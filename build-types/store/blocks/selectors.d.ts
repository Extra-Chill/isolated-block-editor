/**
 * Get blocks from edit history
 *
 * @param {Object} state - Current state
 * @return {object[]}
 */
export function getBlocks(state: any): object[];
/**
 * Get the editor content as serialized HTML.
 *
 * @param {Object} state - Current state
 * @return {string} Serialized block markup.
 */
export function getSerializedContent(state: any): string;
/**
 * Get selection
 *
 * @param {Object} state - Current state
 * @return {Object}
 */
export function getEditorSelection(state: any): any;
/**
 * Is undo possible?
 *
 * @param {Object} state - Current state
 * @return {boolean}
 */
export function hasEditorUndo(state: any): boolean;
/**
 * Is redo possible?
 *
 * @param {Object} state - Current state
 * @return {boolean}
 */
export function hasEditorRedo(state: any): boolean;
/**
 * Get current edit count
 *
 * @param {Object} state - Current state
 * @return {number}
 */
export function getEditCount(state: any): number;
//# sourceMappingURL=selectors.d.ts.map