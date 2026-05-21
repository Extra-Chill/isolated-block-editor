"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DetachedSidebar;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classnames = _interopRequireDefault(require("classnames"));
var _components = require("@wordpress/components");
var _element = require("@wordpress/element");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Name of the Popover slot mounted inside the detached sidebar portal.
 *
 * Popovers rendered inside the detached subtree (e.g. the inserter preview)
 * are scoped to this slot via Popover.__unstableSlotNameProvider so they
 * render in the same stacking context as their anchors, instead of falling
 * back to the default Popover.Slot inside `.iso-editor` (which is isolated
 * via `isolation: isolate` and therefore paints behind the editor canvas
 * when the anchor lives outside it).
 */var DETACHED_POPOVER_SLOT_NAME = 'iso-editor/detached-sidebar';
function resolveTarget(target) {
  if (!target) {
    return null;
  }
  if (typeof target === 'string') {
    return document.querySelector(target);
  }
  if (target instanceof Element) {
    return target;
  }
  return null;
}
function DetachedSidebar(_ref) {
  var target = _ref.target,
    className = _ref.className,
    children = _ref.children;
  var _useState = (0, _element.useState)(function () {
      return resolveTarget(target);
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    resolvedTarget = _useState2[0],
    setResolvedTarget = _useState2[1];
  var sidebarClassName = (0, _element.useMemo)(function () {
    return (0, _classnames["default"])('iso-editor__detached-sidebar', className);
  }, [className]);
  (0, _element.useEffect)(function () {
    var nextTarget = resolveTarget(target);
    setResolvedTarget(nextTarget);
    if (nextTarget || !target) {
      return undefined;
    }
    var observer = new MutationObserver(function () {
      var observedTarget = resolveTarget(target);
      if (observedTarget) {
        setResolvedTarget(observedTarget);
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return function () {
      observer.disconnect();
    };
  }, [target]);
  if (!resolvedTarget || !children) {
    return null;
  }
  return (0, _element.createPortal)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Popover.__unstableSlotNameProvider, {
    value: DETACHED_POPOVER_SLOT_NAME,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: sidebarClassName,
      children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Popover.Slot, {
        name: DETACHED_POPOVER_SLOT_NAME
      })]
    })
  }), resolvedTarget);
}
//# sourceMappingURL=detached-sidebar.js.map