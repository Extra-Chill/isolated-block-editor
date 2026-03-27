/**
 * WordPress dependencies
 */
import { useDispatch } from '@wordpress/data';
import { Button, VisuallyHidden } from '@wordpress/components';
import { __experimentalLibrary as Library } from '@wordpress/block-editor';
import { close } from '@wordpress/icons';
import { useViewportMatch, __experimentalUseDialog as useDialog } from '@wordpress/compose';
import { useMemo } from '@wordpress/element';

/** All known inserter tabs in their fixed render order. */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ALL_TABS = ['blocks', 'patterns', 'media'];

/**
 * Build a CSS string that hides excluded tabs and their panels using
 * :nth-child selectors. The tab order inside TabbedSidebar is always
 * blocks (1), patterns (2), media (3) — set by Gutenberg's InserterMenu.
 *
 * When only a single tab remains we also hide the entire tab bar and
 * close-button row so the user sees just the panel content.
 *
 * @param {string[]} visibleTabs - Tab names to keep (e.g. ['blocks']).
 * @return {string} CSS rules scoped to .iso-editor__inserter-tabs.
 */
function buildTabFilterCSS(visibleTabs) {
  const hiddenIndices = ALL_TABS.map((name, i) => visibleTabs.includes(name) ? null : i + 1).filter(Boolean);
  if (hiddenIndices.length === 0) {
    return '';
  }
  const rules = [];

  // Hide excluded tab buttons and their panels.
  for (const nth of hiddenIndices) {
    rules.push(`.iso-editor__inserter-tabs .block-editor-tabbed-sidebar__tab:nth-child(${nth}) { display: none; }`, `.iso-editor__inserter-tabs .block-editor-tabbed-sidebar__tabpanel:nth-of-type(${nth}) { display: none; }`);
  }

  // When only one tab is visible, hide the entire tab bar + close button
  // row so the user sees a clean single-panel UI.
  if (visibleTabs.length === 1) {
    rules.push(`.iso-editor__inserter-tabs .block-editor-tabbed-sidebar__tablist-and-close-button { display: none; }`);
  }
  return rules.join('\n');
}

/**
 * @param {Object} props
 * @param {boolean} [props.canClose=true]
 * @param {string[]|undefined} [props.tabs] - Which inserter tabs to show.
 *   Defaults to all tabs. Pass e.g. ['blocks'] to show only the Blocks tab.
 */
export default function InserterSidebar({
  canClose = true,
  tabs
}) {
  const {
    setIsInserterOpened
  } = useDispatch('isolated/editor');
  const isMobileViewport = useViewportMatch('medium', '<');
  const TagName = !isMobileViewport ? VisuallyHidden : 'div';
  // Note: focusOnMount not present in Gutenberg
  // @ts-ignore
  const [inserterDialogRef, inserterDialogProps] = useDialog({
    onClose: () => setIsInserterOpened(false),
    // @ts-ignore copied from Gutenberg
    focusOnMount: null
  });
  const visibleTabs = tabs && tabs.length > 0 ? tabs : ALL_TABS;
  const filterCSS = useMemo(() => buildTabFilterCSS(visibleTabs), [visibleTabs.join(',')]);
  const initialTab = visibleTabs[0];
  return /*#__PURE__*/_jsxs("div", {
    // @ts-ignore
    ref: inserterDialogRef,
    ...inserterDialogProps,
    className: "edit-widgets-layout__inserter-panel",
    children: [canClose && /*#__PURE__*/_jsx(TagName, {
      className: "edit-widgets-layout__inserter-panel-header",
      children: /*#__PURE__*/_jsx(Button, {
        icon: close,
        onClick: () => setIsInserterOpened(false)
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: "edit-widgets-layout__inserter-panel-content iso-editor__inserter-tabs",
      children: [filterCSS && /*#__PURE__*/_jsx("style", {
        children: filterCSS
      }), /*#__PURE__*/_jsx(Library, {
        showMostUsedBlocks: false,
        showInserterHelpPanel: true,
        shouldFocusBlock: isMobileViewport,
        __experimentalInitialTab: initialTab,
        onClose: canClose ? () => setIsInserterOpened(false) : undefined
      })]
    })]
  });
}
//# sourceMappingURL=inserter-sidebar.js.map