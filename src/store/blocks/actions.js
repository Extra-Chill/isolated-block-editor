/**
 * Internal dependencies
 */

const actions = {
	*undo() {
		return yield { type: 'UNDO' };
	},
	*redo() {
		return yield { type: 'REDO' };
	},
	/**
	 * Update blocks without undo history
	 *
	 * @param {object[]} blocks
	 * @param {Object} options
	 */
	*updateBlocksWithUndo( blocks, options = {} ) {
		return yield {
			type: 'UPDATE_BLOCKS_WITH_UNDO',
			blocks,
			...options,
		};
	},
	/**
	 * Update blocks without undo history
	 *
	 * @param {object[]} blocks
	 * @param {Object} options
	 */
	*updateBlocksWithoutUndo( blocks, options = {} ) {
		return yield {
			type: 'UPDATE_BLOCKS_WITHOUT_UNDO',
			blocks,
			...options,
		};
	},
};

export default actions;
