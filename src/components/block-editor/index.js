// @ts-nocheck
/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { withDispatch, useSelect } from '@wordpress/data';
import { KeyboardShortcuts, Slot } from '@wordpress/components';
import { rawShortcut } from '@wordpress/keycodes';
import { useViewportMatch } from '@wordpress/compose';
import { BlockEditorKeyboardShortcuts, BlockToolbar } from '@wordpress/block-editor';
import { InterfaceSkeleton } from '@wordpress/interface';
import { __ } from '@wordpress/i18n';
import { store as keyboardShortcutsStore } from '@wordpress/keyboard-shortcuts';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import SettingsSidebar from './sidebar';
import VisualEditor from './visual-editor';
import TextEditor from './text-editor';
import './style.scss';
import BlockEditorToolbar from '../block-editor-toolbar';
import InserterSidebar from './inserter-sidebar';
import ListViewSidebar from './listview-sidebar';
import DetachedSidebar from './detached-sidebar';
import MediaCategoryRegistrar from './media-categories';
import Footer from './footer';
import ActionArea from '../action-area';

/** @typedef {import('../../store/editor/reducer').EditorMode} EditorMode */
/** @typedef {import('../../index').BlockEditorSettings} BlockEditorSettings */
/** @typedef {import('../../index').OnMore} OnMore */

/**
 * Undo/redo
 *
 * @callback OnHistory
 */

const interfaceLabels = {
	secondarySidebar: __( 'Block library' ),
	/* translators: accessibility text for the editor top bar landmark region. */
	header: __( 'Editor top bar' ),
	/* translators: accessibility text for the editor content landmark region. */
	body: __( 'Editor content' ),
	/* translators: accessibility text for the editor settings landmark region. */
	sidebar: __( 'Editor settings' ),
	/* translators: accessibility text for the editor publish landmark region. */
	actions: __( 'Editor publish' ),
	/* translators: accessibility text for the editor footer landmark region. */
	footer: __( 'Editor footer' ),
};

/**
 * The editor component. Contains the visual or text editor, along with keyboard handling.
 *
 * Note: the keyboard handling is specific to this editor and *not* global
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isEditing - Are we editing in this editor?
 * @param {EditorMode} props.editorMode - Visual or code?
 * @param {BlockEditorSettings} props.settings - Settings
 * @param {Object} props.children - Child components
 * @param {OnHistory} props.undo
 * @param {OnHistory} props.redo
 * @param {OnMore} props.renderMoreMenu - Callback to render additional items in the more menu
 */
function BlockEditor( props ) {
	const { isEditing, editorMode, children, undo, redo, settings, renderMoreMenu } = props;
	// Thread through the editor styles from settings (root.css, editor-style.css,
	// block-editor.css, etc. registered via add_editor_style()) so they reach
	// BlockCanvas / EditorStyles and land inside the iframe document. Without
	// this, the host theme's CSS custom properties never define inside the
	// iframe and the editor canvas falls back to plain white / browser default
	// font.
	const styles = settings?.editor?.styles || [];
	const isMobileViewport = useViewportMatch( 'medium', '<' );
	const isLargeViewport = useViewportMatch( 'medium' );
	const inspectorInSidebar = settings?.iso?.sidebar?.inspector || false;
	const inserterInSidebar = settings?.iso?.sidebar?.inserter || false;
	const detachedSidebar = settings?.iso?.sidebar?.detached || null;
	const detachedSidebarViews = detachedSidebar?.views || null;
	const detachedInserterView = detachedSidebarViews?.inserter || null;
	const detachedListView = detachedSidebarViews?.listView || null;
	const isDetachedSidebarPersistent = Boolean( detachedSidebar?.persistent && detachedSidebar?.target );
	const detachedSidebarDefaultView = detachedSidebar?.defaultView || 'inserter';
	const inserterTabs = settings?.iso?.inserter?.tabs || null;
	// When a persistent detached sidebar is active on mobile, the inserter button
	// is hidden and the sidebar collapses to single-column (unreachable). The
	// header bar becomes dead chrome eating vertical space — suppress it.
	const showHeader = ( settings?.iso?.header ?? true ) && ! ( isMobileViewport && isDetachedSidebarPersistent );
	const showFooter = settings?.iso?.footer || false;
	const {
		sidebarIsOpened,
		fixedToolbar,
		isInserterOpened,
		isListViewOpened,
		showIconLabels,
		isFullscreenActive,
		previousShortcut,
		nextShortcut,
	} = useSelect( ( select ) => {
		const { isFeatureActive, isInserterOpened, isListViewOpened, isOptionActive } = select( 'isolated/editor' );

		return {
			sidebarIsOpened: !! select( 'core/interface' ).getActiveComplementaryArea( 'isolated/editor' ),
			fixedToolbar: isFeatureActive( 'fixedToolbar', settings?.editor.hasFixedToolbar ),
			isInserterOpened: isInserterOpened(),
			isListViewOpened: isListViewOpened(),
			isFullscreenActive: isOptionActive( 'fullscreenMode' ),
			showIconLabels: isFeatureActive( 'showIconLabels' ),
			previousShortcut: select( keyboardShortcutsStore ).getAllShortcutKeyCombinations(
				'core/edit-post/previous-region'
			),
			nextShortcut:
				select( keyboardShortcutsStore ).getAllShortcutKeyCombinations( 'core/edit-post/next-region' ),
		};
	}, [] );
	const className = classnames( 'edit-post-layout', 'is-mode-' + editorMode, {
		'has-fixed-toolbar': fixedToolbar,
		'show-icon-labels': showIconLabels,
	} );
	const secondarySidebarContent = () => {
		if ( ! inserterInSidebar ) {
			return null;
		}

		if ( isDetachedSidebarPersistent ) {
			if ( detachedSidebarDefaultView === 'list-view' ) {
				return <ListViewSidebar canClose={ false } />;
			}

			return <InserterSidebar canClose={ false } tabs={ inserterTabs } />;
		}

		if ( editorMode === 'visual' && isInserterOpened ) {
			return <InserterSidebar tabs={ inserterTabs } />;
		}

		if ( editorMode === 'visual' && isListViewOpened ) {
			return <ListViewSidebar />;
		}

		return null;
	};
	const renderedSecondarySidebar = secondarySidebarContent();
	const shouldUseDetachedSidebar =
		Boolean( detachedSidebar?.target ) &&
		Boolean( renderedSecondarySidebar ) &&
		( isDetachedSidebarPersistent || ( editorMode === 'visual' && ( isInserterOpened || isListViewOpened ) ) );
	const hasSplitDetachedTargets = Boolean( detachedInserterView?.target || detachedListView?.target );

	// For back-compat with older iso-editor
	useEffect( () => {
		const html = document.querySelector( 'html' );

		if ( isFullscreenActive ) {
			// @ts-ignore
			html.classList.add( 'is-fullscreen-mode' );
		} else {
			// @ts-ignore
			html.classList.remove( 'is-fullscreen-mode' );
		}

		return () => {
			if ( html ) {
				html.classList.remove( 'is-fullscreen-mode' );
			}
		};
	}, [ isFullscreenActive ] );

	const header = showHeader ? (
		<BlockEditorToolbar editorMode={ editorMode } settings={ settings } renderMoreMenu={ renderMoreMenu } />
	) : null;
	const CustomSettingsSidebar = settings?.iso?.sidebar?.customComponent ?? SettingsSidebar;

	return (
		<>
			<MediaCategoryRegistrar settings={ settings } />
			<CustomSettingsSidebar documentInspector={ settings?.iso?.toolbar?.documentInspector ?? false } />
			{ shouldUseDetachedSidebar && (
				<DetachedSidebar
					target={ detachedSidebar.target }
					className={ detachedSidebar.className }
				>
					{ renderedSecondarySidebar }
				</DetachedSidebar>
			) }
			{ detachedInserterView?.target && (
				<DetachedSidebar
					target={ detachedInserterView.target }
					className={ detachedInserterView.className }
				>
					<InserterSidebar canClose={ false } />
				</DetachedSidebar>
			) }
			{ detachedListView?.target && (
				<DetachedSidebar
					target={ detachedListView.target }
					className={ detachedListView.className }
				>
					<ListViewSidebar canClose={ false } />
				</DetachedSidebar>
			) }

			<InterfaceSkeleton
				className={ className }
				labels={ interfaceLabels }
				header={ header }
				secondarySidebar={ shouldUseDetachedSidebar || hasSplitDetachedTargets ? null : renderedSecondarySidebar }
				sidebar={
					( ! isMobileViewport || sidebarIsOpened ) &&
					inspectorInSidebar && <Slot name="ComplementaryArea/isolated/editor" />
				}
				content={
					<>
						{ isEditing && (
							<>
								<BlockEditorKeyboardShortcuts />
								<BlockEditorKeyboardShortcuts.Register />
							</>
						) }

						<KeyboardShortcuts
							bindGlobal={ false }
							shortcuts={ {
								[ rawShortcut.primary( 'z' ) ]: undo,
								[ rawShortcut.primaryShift( 'z' ) ]: redo,
							} }
						>
							{ editorMode === 'visual' && (
								<>
									{ ! isLargeViewport && <BlockToolbar hideDragHandle /> }
									<VisualEditor styles={ styles } />
								</>
							) }
							{ editorMode === 'text' && <TextEditor /> }
						</KeyboardShortcuts>

						{ children }
					</>
				}
				footer={ showFooter && <Footer editorMode={ editorMode } /> }
				actions={ <ActionArea.Slot /> }
				shortcuts={ {
					previous: previousShortcut,
					next: nextShortcut,
				} }
			/>
		</>
	);
}

export default withDispatch( ( dispatch ) => {
	const { redo, undo } = dispatch( 'isolated/editor' );
	return { redo, undo };
} )( BlockEditor );
