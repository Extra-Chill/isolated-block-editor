export default blocksHistoryReducer;
declare function blocksHistoryReducer(state: {
    past: never[];
    present: {
        editCount: number;
        selection: null;
        blocks: null;
    };
    future: never[];
} | undefined, action: any): {
    past: never[];
    present: any;
    future: {
        editCount: number;
        selection: null;
        blocks: null;
    }[];
} | {
    past: {
        editCount: number;
        selection: null;
        blocks: null;
    }[];
    present: any;
    future: never[];
};
//# sourceMappingURL=reducer.d.ts.map