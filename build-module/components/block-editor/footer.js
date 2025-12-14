/**
 * WordPress dependencies
 */
import { useViewportMatch } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import { BlockBreadcrumb } from '@wordpress/block-editor';
import { _x } from '@wordpress/i18n';
import { store as blockEditorStore } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */

import FooterSection from '../footer-slot';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Footer = ({
  editorMode
}) => {
  const isMobileViewport = useViewportMatch('medium', '<');
  const {
    showBlockBreadcrumbs,
    documentLabel
  } = useSelect(select => {
    const {
      getSettings
    } = select(blockEditorStore);
    const settings = getSettings();
    const postTypeLabel = settings?.postTypeLabel;
    return {
      // TODO: This is currently disabled until it can be better worked in
      showBlockBreadcrumbs: false,
      //isFeatureActive( 'showBlockBreadcrumbs' ),
      // translators: Default label for the Document in the Block Breadcrumb.
      documentLabel: postTypeLabel || _x('Document', 'noun')
    };
  }, []);
  return /*#__PURE__*/_jsxs("div", {
    className: "edit-post-layout__footer",
    children: [showBlockBreadcrumbs && !isMobileViewport && editorMode === 'visual' && /*#__PURE__*/_jsx(BlockBreadcrumb, {
      rootLabelText: documentLabel
    }), /*#__PURE__*/_jsx(FooterSection.Slot, {})]
  });
};
export default Footer;
//# sourceMappingURL=footer.js.map