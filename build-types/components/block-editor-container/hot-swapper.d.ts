/**
 * Routes wp.data access for `core/block-editor` and `core/editor` to the
 * focused editor instance's sub-registry. Without this, blocks that call
 * `wp.data.select( 'core/block-editor' )` directly would always read from
 * the parent registry and ignore the per-instance editor state.
 */
export default function HotSwapper(): null;
//# sourceMappingURL=hot-swapper.d.ts.map