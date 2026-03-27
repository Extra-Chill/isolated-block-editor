"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlocks = getBlocks;
exports.getEditCount = getEditCount;
exports.getEditorSelection = getEditorSelection;
exports.getSerializedContent = getSerializedContent;
exports.hasEditorRedo = hasEditorRedo;
exports.hasEditorUndo = hasEditorUndo;
var _blocks = require("@wordpress/blocks");
var _selectors = require("../editor/selectors");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Get blocks from edit history
 *
 * @param {Object} state - Current state
 * @return {object[]}
 */
function getBlocks(state) {
  return state.blocks.present.blocks;
}

/**
 * Get the editor content as serialized HTML.
 *
 * @param {Object} state - Current state
 * @return {string} Serialized block markup.
 */
function getSerializedContent(state) {
  var blocks = getBlocks(state);
  return blocks ? (0, _blocks.serialize)(blocks) : '';
}

/**
 * Get selection
 *
 * @param {Object} state - Current state
 * @return {Object}
 */
function getEditorSelection(state) {
  return state.blocks.present.selection;
}

/**
 * Is undo possible?
 *
 * @param {Object} state - Current state
 * @return {boolean}
 */
function hasEditorUndo(state) {
  if ((0, _selectors.getEditorMode)(state) !== 'visual') return false;
  return state.blocks.past.length > 0;
}

/**
 * Is redo possible?
 *
 * @param {Object} state - Current state
 * @return {boolean}
 */
function hasEditorRedo(state) {
  if ((0, _selectors.getEditorMode)(state) !== 'visual') return false;
  return state.blocks.future.length > 0;
}

/**
 * Get current edit count
 *
 * @param {Object} state - Current state
 * @return {number}
 */
function getEditCount(state) {
  return state.blocks.present.editCount;
}
//# sourceMappingURL=selectors.js.map