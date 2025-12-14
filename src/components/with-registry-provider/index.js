/**
 * WordPress dependencies
 */
import { useState, useEffect } from '@wordpress/element';
import { withRegistry, createRegistry, RegistryProvider, plugins } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { storeConfig as blockEditorStoreConfig } from '@wordpress/block-editor';
import { storeConfig as editorStoreConfig } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import storeConfig from '../../store';
import reusableStore from './reusable-store';
import applyDefaultSettings from '../default-settings';

// Keep track of the registries we create so we can release them after the editor instance is removed
let registries = [];

const STORE_NAME = 'isolated/editor';

/**
 * This is the core of having a multi-editor Gutenberg experience.
 *
 * We create a sub registry that contains copies of `core/block-editor`, `core/editor`, and STORE_NAME. These are specific to the editor instance and
 * provide the content for each editor, as well as overriding some core functions
 *
 * The key `persistenceKey` from the settings is used as the `localStorage` key to save Gutenberg preferences
 */
const withRegistryProvider = createHigherOrderComponent(
	/**
	 *
	 * @param {import("react").FC } WrappedComponent
	 */
	( WrappedComponent ) =>
		withRegistry( ( props ) => {
			const { registry, settings, ...additionalProps } = props;
			const defaultSettings = applyDefaultSettings( settings );
			const { persistenceKey, preferencesKey, defaultPreferences, customStores = [] } = defaultSettings.iso || {};
			const [ subRegistry, setSubRegistry ] = useState( null );

		useEffect( () => {
			// Create a new registry for this editor instance.
			// The parent registry already includes most WP core stores; we only add per-instance stores here.
			const newRegistry = createRegistry(
				{
					'core/reusable-blocks': reusableStore,
				},
				registry
			);

			// Enable the persistence plugin so we use settings in `localStorage`
			if ( persistenceKey ) {
				// @ts-ignore
				newRegistry.use( plugins.persistence, {
					persistenceKey,
				} );
			}

			// Create our custom store
			const store = newRegistry.registerStore(
				STORE_NAME,
				storeConfig( preferencesKey, defaultPreferences )
			);

			// Create WP core stores in this sub-registry so selectors/dispatchers resolve consistently.
			// These must be registered after the persistence plugin is enabled.
			const blockEditorStoreRegistration = newRegistry.registerStore( 'core/block-editor', {
				...blockEditorStoreConfig,
				persist: [ 'preferences' ],
			} );

			const coreEditorStoreRegistration = newRegistry.registerStore( 'core/editor', editorStoreConfig );

			// Create any custom stores inside our registry
			customStores.map( ( store ) => {
				registries.push( newRegistry.registerStore( store.name, store.config ) );
			} );

			registries.push( store );
			registries.push( blockEditorStoreRegistration );
			registries.push( coreEditorStoreRegistration );

			// @ts-ignore
			setSubRegistry( newRegistry );

			return function cleanup() {
				registries = registries.filter( ( item ) => item !== store );
			};
		}, [ registry ] );

			if ( ! subRegistry ) {
				return null;
			}

			return (
				<RegistryProvider value={ subRegistry }>
					{ /* @ts-ignore */ }
					<WrappedComponent { ...additionalProps } settings={ defaultSettings } />
				</RegistryProvider>
			);
		} ),
	'withRegistryProvider'
);

export default withRegistryProvider;
