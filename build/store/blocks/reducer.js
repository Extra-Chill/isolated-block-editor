"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _isShallowEqual = _interopRequireDefault(require("@wordpress/is-shallow-equal"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * WordPress dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */
var DEFAULT_STATE = {
  editCount: 0,
  selection: null,
  blocks: null
};
function getSelectedBlock(blocks, selection) {
  return blocks.find(function (block) {
    return block.clientId === selection.clientId;
  });
}

// Gutenberg triggers a UPDATE_BLOCKS_WITH_UNDO one second after typing. Try and group this with the previous edits
function isNewUndo(action, state) {
  var type = action.type,
    selection = action.selection;

  // Don't create a new undo when flagged as no undo
  if (type === 'UPDATE_BLOCKS_WITHOUT_UNDO') {
    return false;
  }
  if (!selection) {
    return true;
  }

  // Not new if selection is same
  if ((0, _isShallowEqual["default"])(selection, state.selection)) {
    var previousBlock = getSelectedBlock(state.blocks, selection.selectionStart);
    var currentBlock = getSelectedBlock(action.blocks, selection.selectionStart);

    // Check if any attributes have changed in the selected block
    if (previousBlock && currentBlock && (0, _isShallowEqual["default"])(previousBlock.attributes, currentBlock.attributes)) {
      // Nothing has changed - not a new undo level
      return false;
    }
  }

  // Yes, a new undo level
  return true;
}
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'UPDATE_BLOCKS_WITHOUT_UNDO':
    case 'UPDATE_BLOCKS_WITH_UNDO':
      return _objectSpread(_objectSpread({}, state), {}, {
        editCount: isNewUndo(action, state) ? state.editCount + 1 : state.editCount,
        blocks: action.blocks,
        selection: action.selection
      });
  }
  return state;
};
var DEFAULT_HISTORY_STATE = {
  past: [],
  present: DEFAULT_STATE,
  future: []
};
var isHistory = function isHistory(state) {
  return state && Array.isArray(state.past) && Array.isArray(state.future) && state.present !== undefined;
};
var blocksHistoryReducer = function blocksHistoryReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_HISTORY_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var historyState = isHistory(state) ? state : DEFAULT_HISTORY_STATE;
  switch (action.type) {
    case 'UNDO':
      {
        if (historyState.past.length === 0) {
          return historyState;
        }
        var previous = historyState.past[historyState.past.length - 1];
        return {
          past: historyState.past.slice(0, -1),
          present: previous,
          future: [historyState.present].concat((0, _toConsumableArray2["default"])(historyState.future))
        };
      }
    case 'REDO':
      {
        if (historyState.future.length === 0) {
          return historyState;
        }
        var next = historyState.future[0];
        return {
          past: [].concat((0, _toConsumableArray2["default"])(historyState.past), [historyState.present]),
          present: next,
          future: historyState.future.slice(1)
        };
      }
    case 'UPDATE_BLOCKS_WITH_UNDO':
      {
        var nextPresent = reducer(historyState.present, action);
        var shouldCreateNewUndoLevel = historyState.present.editCount !== nextPresent.editCount;
        if (!shouldCreateNewUndoLevel) {
          return _objectSpread(_objectSpread({}, historyState), {}, {
            present: nextPresent
          });
        }
        return {
          past: [].concat((0, _toConsumableArray2["default"])(historyState.past), [historyState.present]),
          present: nextPresent,
          future: []
        };
      }
    case 'UPDATE_BLOCKS_WITHOUT_UNDO':
      {
        var _nextPresent = reducer(historyState.present, action);
        return _objectSpread(_objectSpread({}, historyState), {}, {
          present: _nextPresent
        });
      }
  }
  return historyState;
};
var _default = exports["default"] = blocksHistoryReducer;
//# sourceMappingURL=reducer.js.map