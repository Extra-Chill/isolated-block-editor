"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PatternMonitor;
var _element = require("@wordpress/element");
var _data = require("@wordpress/data");
var _blocks = require("@wordpress/blocks");
// @ts-nocheck
/**
 * WordPress dependencies
 */

/** @typedef {import('../../index').BlockEditorSettings} BlockEditorSettings */
/** @typedef {import('../../store/editor/reducer').Pattern} Pattern */

/**
 * Sets up Gutenberg and the Isolated Block Editor
 *
 * An initial setup is performed, and is then reset each time the editor is
 * focussed. This ensures we are applying the right settings for this
 * particular editor.
 */
function PatternMonitor() {
  var currentPattern = (0, _data.useSelect)(
  // @ts-ignore
  function (select) {
    return select('isolated/editor').getCurrentPattern();
  }, []);
  // @ts-ignore
  var _useDispatch = (0, _data.useDispatch)('isolated/editor'),
    updateBlocksWithoutUndo = _useDispatch.updateBlocksWithoutUndo;
  var previous = (0, _element.useRef)(null);

  // Monitor the current pattern and update the editor content if it changes
  (0, _element.useEffect)(function () {
    if (currentPattern === null || previous.current === currentPattern) {
      previous.current = currentPattern;
      return;
    }
    previous.current = currentPattern.name;
    setTimeout(function () {
      updateBlocksWithoutUndo((0, _blocks.parse)(currentPattern.content));
    }, 0);
  }, [currentPattern, updateBlocksWithoutUndo]);
  return null;
}
//# sourceMappingURL=index.js.map