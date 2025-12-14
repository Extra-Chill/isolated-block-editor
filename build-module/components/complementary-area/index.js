/**
 * WordPress dependencies
 */
import { Fill, Panel, Slot } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import ComplementaryAreaHeader from './complementary-area-header';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const EDITOR_SCOPE = 'isolated/editor';
function isActiveArea(area) {
  return ['edit-post/document', 'edit-post/block'].includes(area);
}
function ComplementaryAreaFill({
  scope,
  children,
  className
}) {
  return /*#__PURE__*/_jsx(Fill, {
    name: `ComplementaryArea/${scope}`,
    children: /*#__PURE__*/_jsx("div", {
      className: className,
      children: children
    })
  });
}
export default function ComplementaryArea({
  className,
  children,
  header,
  headerClassName,
  toggleShortcut,
  closeLabel,
  identifier,
  ...props
}) {
  const {
    isActive
  } = useSelect(select => {
    const interfaceStore = /** @type {any} */select('core/interface');
    const activeArea = interfaceStore?.getActiveComplementaryArea?.(EDITOR_SCOPE);
    return {
      isActive: isActiveArea(activeArea)
    };
  }, []);
  if (!isActive) {
    return null;
  }
  const fillClassName = className ? `interface-complementary-area ${className}` : 'interface-complementary-area';
  return /*#__PURE__*/_jsxs(ComplementaryAreaFill, {
    className: fillClassName,
    scope: EDITOR_SCOPE,
    children: [/*#__PURE__*/_jsx(ComplementaryAreaHeader, {
      className: headerClassName,
      toggleButtonProps: {
        label: closeLabel,
        shortcut: toggleShortcut,
        scope: EDITOR_SCOPE,
        identifier
      },
      children: header
    }), /*#__PURE__*/_jsx(Panel, {
      className: "edit-post-sidebar",
      children: children
    })]
  });
}
ComplementaryArea.Slot = function ComplementaryAreaSlot({
  scope
}) {
  return /*#__PURE__*/_jsx(Slot, {
    name: `ComplementaryArea/${scope}`
  });
};
//# sourceMappingURL=index.js.map