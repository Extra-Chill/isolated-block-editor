export default actions;
declare namespace actions {
    function undo(): Generator<{
        type: string;
    }, any, unknown>;
    function redo(): Generator<{
        type: string;
    }, any, unknown>;
    /**
     * Update blocks with undo history
     *
     * @param {object[]} blocks
     * @param {Object} options
     */
    function updateBlocksWithUndo(blocks: object[], options?: any): Generator<any, any, unknown>;
    /**
     * Update blocks without undo history
     *
     * @param {object[]} blocks
     * @param {Object} options
     */
    function updateBlocksWithoutUndo(blocks: object[], options?: any): Generator<any, any, unknown>;
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
    function replaceContent(blocks: object[]): Generator<{
        type: string;
        blocks: any[];
    }, any, unknown>;
}
//# sourceMappingURL=actions.d.ts.map