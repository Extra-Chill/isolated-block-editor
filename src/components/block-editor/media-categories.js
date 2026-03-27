/**
 * Auto-registers inserter media categories (Images, Videos, Audio) when
 * `allowedMimeTypes` is present in the editor settings.
 *
 * In a full WordPress post editor, `@wordpress/editor` provides these via the
 * private `inserterMediaCategories` setting. IBE doesn't use `@wordpress/editor`'s
 * provider, so we replicate the core categories here using the public
 * `registerInserterMediaCategory` action from `core/block-editor`.
 *
 * Each category fetches from the WP REST API (`/wp/v2/media`). The `core` data
 * store must be available in the registry (it is — inherited from the parent
 * registry in WordPress environments where `wp-editor` / `wp-core-data` scripts
 * are enqueued).
 */

import { useEffect, useRef } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Fetch media items from the WP REST API via `@wordpress/core-data`.
 *
 * Uses `wp.data.resolveSelect('core')` from the global registry (the parent)
 * rather than importing `@wordpress/core-data` directly, to avoid adding a
 * hard build dependency. The 'core' store is always available in WordPress
 * environments where `wp-editor` / `wp-core-data` are enqueued.
 *
 * @param {Object} query     - InserterMediaRequest from Gutenberg.
 * @param {string} mediaType - MIME type prefix (image, video, audio).
 * @return {Promise<Object[]>} Transformed media items.
 */
async function coreMediaFetch( query = {}, mediaType ) {
	// @ts-ignore — wp.data is a WordPress global available at runtime.
	const { resolveSelect } = wp.data;
	const coreSelect = resolveSelect( 'core' );

	if ( ! coreSelect?.getEntityRecords ) {
		return [];
	}

	let mediaItems;
	try {
		mediaItems = await coreSelect.getEntityRecords(
			'postType',
			'attachment',
			{
				...query,
				media_type: mediaType,
				orderBy: query?.search ? 'relevance' : 'date',
			}
		);
	} catch {
		return [];
	}

	if ( ! mediaItems ) {
		return [];
	}

	return mediaItems.map( ( item ) => ( {
		...item,
		alt: item.alt_text,
		url: item.source_url,
		previewUrl: item.media_details?.sizes?.medium?.source_url,
		caption: item.caption?.raw,
	} ) );
}

const MEDIA_CATEGORIES = [
	{
		name: 'images',
		labels: {
			name: __( 'Images' ),
			search_items: __( 'Search images' ),
		},
		mediaType: 'image',
		async fetch( query = {} ) {
			return coreMediaFetch( query, 'image' );
		},
	},
	{
		name: 'videos',
		labels: {
			name: __( 'Videos' ),
			search_items: __( 'Search videos' ),
		},
		mediaType: 'video',
		async fetch( query = {} ) {
			return coreMediaFetch( query, 'video' );
		},
	},
	{
		name: 'audio',
		labels: {
			name: __( 'Audio' ),
			search_items: __( 'Search audio' ),
		},
		mediaType: 'audio',
		async fetch( query = {} ) {
			return coreMediaFetch( query, 'audio' );
		},
	},
];

/**
 * Registers core media categories for the inserter Media tab.
 *
 * Only registers when `allowedMimeTypes` is provided in editor settings,
 * indicating the host environment supports media browsing. The action's
 * internal duplicate check prevents double-registration.
 *
 * Render this component inside the IBE React tree so `useDispatch` targets
 * the correct sub-registry.
 *
 * @param {Object} props
 * @param {Object} props.settings - Full IBE settings object.
 */
export default function MediaCategoryRegistrar( { settings } ) {
	const didRegister = useRef( false );
	const allowedMimeTypes = settings?.editor?.allowedMimeTypes;
	const hasMimeTypes =
		allowedMimeTypes &&
		typeof allowedMimeTypes === 'object' &&
		Object.keys( allowedMimeTypes ).length > 0;

	const { registerInserterMediaCategory } = useDispatch( blockEditorStore );

	useEffect( () => {
		if ( ! hasMimeTypes || didRegister.current || ! registerInserterMediaCategory ) {
			return;
		}

		for ( const category of MEDIA_CATEGORIES ) {
			try {
				registerInserterMediaCategory( category );
			} catch ( e ) {
				// Action logs its own validation errors; we just prevent
				// unhandled exceptions from breaking the editor.
			}
		}

		didRegister.current = true;
	}, [ hasMimeTypes, registerInserterMediaCategory ] );

	return null;
}
