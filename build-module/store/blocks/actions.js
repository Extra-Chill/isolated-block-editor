/**
 * Internal dependencies
 */

const actions = {
  *undo() {
    return yield {
      type: 'UNDO'
    };
  },
  *redo() {
    return yield {
      type: 'REDO'
    };
  },
  /**
   * Update blocks with undo history
   *
   * @param {object[]} blocks
   * @param {Object} options
   */
  *updateBlocksWithUndo(blocks, options = {}) {
    return yield {
      type: 'UPDATE_BLOCKS_WITH_UNDO',
      blocks,
      ...options
    };
  },
  /**
   * Update blocks without undo history
   *
   * @param {object[]} blocks
   * @param {Object} options
   */
  *updateBlocksWithoutUndo(blocks, options = {}) {
    return yield {
      type: 'UPDATE_BLOCKS_WITHOUT_UNDO',
      blocks,
      ...options
    };
  },
  /**
   * Replace all editor content with new blocks and reset undo history.
   *
   * Use this when loading entirely new content (e.g. switching documents,
   * restoring a draft, or loading a template). Unlike updateBlocksWithoutUndo,
   * this clears the undo/redo history so the user starts fresh.
   *
   * Accepts parsed block objects — call parse(html) before dispatching
   * if you have serialized HTML.
   *
   * @param {object[]} blocks - Parsed block objects to load.
   */
  *replaceContent(blocks) {
    return yield {
      type: 'REPLACE_CONTENT',
      blocks: blocks || []
    };
  }
};
export default actions;
//# sourceMappingURL=actions.js.map