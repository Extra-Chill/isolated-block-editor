"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InserterSidebar;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _data = require("@wordpress/data");
var _components = require("@wordpress/components");
var _blockEditor = require("@wordpress/block-editor");
var _icons = require("@wordpress/icons");
var _compose = require("@wordpress/compose");
var _element = require("@wordpress/element");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; } /**
 * WordPress dependencies
 */ /** All known inserter tabs in their fixed render order. */
var ALL_TABS = ['blocks', 'patterns', 'media'];

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
  var hiddenIndices = ALL_TABS.map(function (name, i) {
    return visibleTabs.includes(name) ? null : i + 1;
  }).filter(Boolean);
  if (hiddenIndices.length === 0) {
    return '';
  }
  var rules = [];

  // Hide excluded tab buttons and their panels.
  var _iterator = _createForOfIteratorHelper(hiddenIndices),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var nth = _step.value;
      rules.push(".iso-editor__inserter-tabs .block-editor-tabbed-sidebar__tab:nth-child(".concat(nth, ") { display: none; }"), ".iso-editor__inserter-tabs .block-editor-tabbed-sidebar__tabpanel:nth-of-type(".concat(nth, ") { display: none; }"));
    }

    // When only one tab is visible, hide the entire tab bar + close button
    // row so the user sees a clean single-panel UI.
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (visibleTabs.length === 1) {
    rules.push(".iso-editor__inserter-tabs .block-editor-tabbed-sidebar__tablist-and-close-button { display: none; }");
  }
  return rules.join('\n');
}

/**
 * @param {Object} props
 * @param {boolean} [props.canClose=true]
 * @param {string[]|undefined} [props.tabs] - Which inserter tabs to show.
 *   Defaults to all tabs. Pass e.g. ['blocks'] to show only the Blocks tab.
 */
function InserterSidebar(_ref) {
  var _ref$canClose = _ref.canClose,
    canClose = _ref$canClose === void 0 ? true : _ref$canClose,
    tabs = _ref.tabs;
  var _useDispatch = (0, _data.useDispatch)('isolated/editor'),
    setIsInserterOpened = _useDispatch.setIsInserterOpened;
  var isMobileViewport = (0, _compose.useViewportMatch)('medium', '<');
  var TagName = !isMobileViewport ? _components.VisuallyHidden : 'div';
  // Note: focusOnMount not present in Gutenberg
  // @ts-ignore
  var _useDialog = (0, _compose.__experimentalUseDialog)({
      onClose: function onClose() {
        return setIsInserterOpened(false);
      },
      // @ts-ignore copied from Gutenberg
      focusOnMount: null
    }),
    _useDialog2 = (0, _slicedToArray2["default"])(_useDialog, 2),
    inserterDialogRef = _useDialog2[0],
    inserterDialogProps = _useDialog2[1];
  var visibleTabs = tabs && tabs.length > 0 ? tabs : ALL_TABS;
  var filterCSS = (0, _element.useMemo)(function () {
    return buildTabFilterCSS(visibleTabs);
  }, [visibleTabs.join(',')]);
  var initialTab = visibleTabs[0];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({
    // @ts-ignore
    ref: inserterDialogRef
  }, inserterDialogProps), {}, {
    className: "edit-widgets-layout__inserter-panel",
    children: [canClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(TagName, {
      className: "edit-widgets-layout__inserter-panel-header",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Button, {
        icon: _icons.close,
        onClick: function onClick() {
          return setIsInserterOpened(false);
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "edit-widgets-layout__inserter-panel-content iso-editor__inserter-tabs",
      children: [filterCSS && /*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
        children: filterCSS
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_blockEditor.__experimentalLibrary, {
        showMostUsedBlocks: false,
        showInserterHelpPanel: true,
        shouldFocusBlock: isMobileViewport,
        __experimentalInitialTab: initialTab,
        onClose: canClose ? function () {
          return setIsInserterOpened(false);
        } : undefined
      })]
    })]
  }));
}
//# sourceMappingURL=inserter-sidebar.js.map