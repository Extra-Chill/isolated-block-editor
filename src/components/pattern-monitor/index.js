// @ts-nocheck
/**
 * WordPress dependencies
 */

import { useEffect, useRef } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { parse } from '@wordpress/blocks';

/** @typedef {import('../../index').BlockEditorSettings} BlockEditorSettings */
/** @typedef {import('../../store/editor/reducer').Pattern} Pattern */

/**
 * Sets up Gutenberg and the Isolated Block Editor
 *
 * An initial setup is performed, and is then reset each time the editor is
 * focussed. This ensures we are applying the right settings for this
 * particular editor.
 */
export default function PatternMonitor() {
	const currentPattern = useSelect(
		// @ts-ignore
		( select ) => select( 'isolated/editor' ).getCurrentPattern(),
		[]
	);
	// @ts-ignore
	const { updateBlocksWithoutUndo } = useDispatch( 'isolated/editor' );
	const previous = useRef( null );

	// Monitor the current pattern and update the editor content if it changes
	useEffect( () => {
		if ( currentPattern === null || previous.current === currentPattern ) {
			previous.current = currentPattern;
			return;
		}

		previous.current = currentPattern.name;
		setTimeout( () => {
			updateBlocksWithoutUndo( parse( currentPattern.content ) );
		}, 0 );
	}, [ currentPattern, updateBlocksWithoutUndo ] );

	return null;
}
