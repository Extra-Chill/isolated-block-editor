declare const _default: {
    actions: typeof actions;
    controls: {
        CONVERT_BLOCK_TO_STATIC: ((registry: import("@wordpress/data").DataRegistry) => ({ clientId }: any) => void) & {
            isRegistryControl?: boolean;
        };
        CONVERT_BLOCKS_TO_REUSABLE: ((registry: import("@wordpress/data").DataRegistry) => ({ clientIds }: any) => Promise<void>) & {
            isRegistryControl?: boolean;
        };
        DELETE_REUSABLE_BLOCK: ((registry: import("@wordpress/data").DataRegistry) => ({ id }: any) => Promise<void>) & {
            isRegistryControl?: boolean;
        };
    };
    reducer: import("redux").Reducer<{
        isEditingReusableBlock: {};
    }, any, Partial<{
        isEditingReusableBlock: {} | undefined;
    }>>;
    selectors: typeof selectors;
};
export default _default;
import * as actions from './actions';
import * as selectors from './selectors';
//# sourceMappingURL=index.d.ts.map