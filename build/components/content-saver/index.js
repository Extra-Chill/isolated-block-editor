"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _element = require("@wordpress/element");
var _data = require("@wordpress/data");
var _blocks = require("@wordpress/blocks");
/**
 * WordPress dependencies
 */

/** @typedef {import('../../index').OnSaveBlocks} OnSaveBlocks */
/** @typedef {import('../../index').OnSaveContent} OnSaveContent */
/**
 * Content saver
 *
 * @param {Object} props - Component props
 * @param {OnSaveBlocks} [props.onSaveBlocks] - Save blocks callback
 * @param {OnSaveContent} [props.onSaveContent] - Save content callback
 */
function ContentSaver(props) {
  var onSaveBlocks = props.onSaveBlocks,
    onSaveContent = props.onSaveContent;
  var firstTime = (0, _element.useRef)(true);

  // Debug: Log component mount
  console.log('[IBE Debug] ContentSaver mounted');
  var dispatchResult = (0, _data.useDispatch)('isolated/editor');
  console.log('[IBE Debug] useDispatch result:', dispatchResult);
  var _ref = dispatchResult || {},
    setReady = _ref.setReady;
  var _useSelect = (0, _data.useSelect)(function (select) {
      var _store$getBlocks, _store$getIgnoredCont;
      var store = select('isolated/editor');
      console.log('[IBE Debug] useSelect - isolated/editor store:', store);
      if (!store) {
        console.error('[IBE Debug] isolated/editor store not found!');
        return {
          blocks: undefined,
          ignoredContent: []
        };
      }
      return {
        blocks: (_store$getBlocks = store.getBlocks) === null || _store$getBlocks === void 0 ? void 0 : _store$getBlocks.call(store),
        ignoredContent: (_store$getIgnoredCont = store.getIgnoredContent) === null || _store$getIgnoredCont === void 0 ? void 0 : _store$getIgnoredCont.call(store)
      };
    }, []),
    blocks = _useSelect.blocks,
    ignoredContent = _useSelect.ignoredContent;
  console.log('[IBE Debug] blocks:', blocks);
  function saveBlocks() {
    // Save the content in the format wanted by the user
    onSaveBlocks === null || onSaveBlocks === void 0 || onSaveBlocks(blocks, ignoredContent);
    onSaveContent === null || onSaveContent === void 0 || onSaveContent((0, _blocks.serialize)(blocks));
  }
  (0, _element.useEffect)(function () {
    console.log('[IBE Debug] ContentSaver useEffect triggered, blocks:', blocks);
    if (!setReady) {
      console.error('[IBE Debug] setReady is not available!');
      return;
    }
    if (!blocks) {
      console.log('[IBE Debug] No blocks, calling setReady(true)');
      setReady(true);
      return;
    }

    // Try and avoid an initial first save if no content
    if (firstTime.current) {
      firstTime.current = false;
      console.log('[IBE Debug] First time, calling setReady(true)');
      setReady(true);

      // The editor has initial content - save it
      if (blocks && blocks.length > 1) {
        saveBlocks();
      }
    } else {
      saveBlocks();
    }
  }, [blocks]);
  return null;
}
var _default = exports["default"] = ContentSaver;
//# sourceMappingURL=index.js.map