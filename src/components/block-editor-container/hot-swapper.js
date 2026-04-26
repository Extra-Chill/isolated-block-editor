/**
 * WordPress dependencies
 */
import { useRegistry, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import storeHotSwapPlugin from '../../store/plugins/store-hot-swap';

/**
 * Routes wp.data access for `core/block-editor` and `core/editor` to the
 * focused editor instance's sub-registry. Without this, blocks that call
 * `wp.data.select( 'core/block-editor' )` directly would always read from
 * the parent registry and ignore the per-instance editor state.
 */
export default function HotSwapper() {
	const registry = useRegistry();
	const isEditing = useSelect(
		// @ts-ignore
		( select ) => select( 'isolated/editor' ).isEditing(),
		[]
	);

	useEffect( () => {
		storeHotSwapPlugin.resetEditor();
		let didSetEditor = false;

		if ( isEditing ) {
			storeHotSwapPlugin.setEditor( registry.select, registry.dispatch );
			didSetEditor = true;
		}

		return () => {
			if ( didSetEditor ) {
				storeHotSwapPlugin.resetEditor();
			}
		};
	}, [ isEditing, registry ] );

	return null;
}
