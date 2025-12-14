/**
 * WordPress dependencies
 */
import { Fill, Panel, Slot } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import ComplementaryAreaHeader from './complementary-area-header';

const EDITOR_SCOPE = 'isolated/editor';

function isActiveArea( area ) {
	return [ 'edit-post/document', 'edit-post/block' ].includes( area );
}

function ComplementaryAreaFill( { scope, children, className } ) {
	return (
		<Fill name={ `ComplementaryArea/${ scope }` }>
			<div className={ className }>{ children }</div>
		</Fill>
	);
}

export default function ComplementaryArea( {
	className,
	children,
	header,
	headerClassName,
	toggleShortcut,
	closeLabel,
	identifier,
	...props
} ) {
	const { isActive } = useSelect( ( select ) => {
		const interfaceStore = /** @type {any} */ ( select( 'core/interface' ) );
		const activeArea = interfaceStore?.getActiveComplementaryArea?.( EDITOR_SCOPE );

		return {
			isActive: isActiveArea( activeArea ),
		};
	}, [] );

	if ( ! isActive ) {
		return null;
	}

	const fillClassName = className
		? `interface-complementary-area ${ className }`
		: 'interface-complementary-area';

	return (
		<ComplementaryAreaFill className={ fillClassName } scope={ EDITOR_SCOPE }>
			<ComplementaryAreaHeader
				className={ headerClassName }
				toggleButtonProps={ {
					label: closeLabel,
					shortcut: toggleShortcut,
					scope: EDITOR_SCOPE,
					identifier,
				} }
			>
				{ header }
			</ComplementaryAreaHeader>
			<Panel className="edit-post-sidebar">{ children }</Panel>
		</ComplementaryAreaFill>
	);
}

ComplementaryArea.Slot = function ComplementaryAreaSlot( { scope } ) {
	return <Slot name={ `ComplementaryArea/${ scope }` } />;
};
