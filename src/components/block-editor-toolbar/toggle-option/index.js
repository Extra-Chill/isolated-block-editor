/**
 * WordPress dependencies
 */
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { MenuItem, withSpokenMessages } from '@wordpress/components';
import { check } from '@wordpress/icons';

function OptionToggle( { onToggle, isActive, label, info } ) {
	return (
		<MenuItem
			icon={ isActive && check }
			isSelected={ isActive }
			onClick={ onToggle }
			role="menuitemcheckbox"
			info={ info }
		>
			{ label }
		</MenuItem>
	);
}

// @ts-ignore
export default compose( [
	withSelect( ( select, { option } ) => ( {
		isActive: /** @type {any} */ ( select( 'isolated/editor' ) ).isOptionActive( option ),
	} ) ),
	withDispatch( ( dispatch, ownProps ) => ( {
		onToggle() {
			const { option, onClose } = /** @type {{ option: string, onClose: Function }} */ ( ownProps );
			/** @type {any} */ ( dispatch( 'isolated/editor' ) ).toggleOption( option );
			onClose();
		},
	} ) ),
	withSpokenMessages,
] )( OptionToggle );
