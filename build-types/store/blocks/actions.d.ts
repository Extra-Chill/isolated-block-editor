export default actions;
declare namespace actions {
    function undo(): Generator<{
        type: string;
    }, any, unknown>;
    function redo(): Generator<{
        type: string;
    }, any, unknown>;
    /**
     * Update blocks without undo history
     *
     * @param {object[]} blocks
     * @param {Object} options
     */
    function updateBlocksWithUndo(blocks: any[], options?: any): Generator<any, any, unknown>;
    /**
     * Update blocks without undo history
     *
     * @param {object[]} blocks
     * @param {Object} options
     */
    function updateBlocksWithoutUndo(blocks: any[], options?: any): Generator<any, any, unknown>;
}
//# sourceMappingURL=actions.d.ts.map