/**
 * WordPress dependencies
 */
import { __experimentalListView as ListView } from '@wordpress/block-editor';
import { __experimentalText as Text } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function ListViewOutline() {
	return (
		<>
			<div className="editor-list-view-sidebar__outline">
				<Text>{ __( 'List view' ) }</Text>
			</div>
			{ /* @ts-ignore */ }
			<ListView />
		</>
	);
}
