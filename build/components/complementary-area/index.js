"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ComplementaryArea;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _components = require("@wordpress/components");
var _data = require("@wordpress/data");
var _complementaryAreaHeader = _interopRequireDefault(require("./complementary-area-header"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "children", "header", "headerClassName", "toggleShortcut", "closeLabel", "identifier"];
/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
var EDITOR_SCOPE = 'isolated/editor';
function isActiveArea(area) {
  return ['edit-post/document', 'edit-post/block'].includes(area);
}
function ComplementaryAreaFill(_ref) {
  var scope = _ref.scope,
    children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Fill, {
    name: "ComplementaryArea/".concat(scope),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: className,
      children: children
    })
  });
}
function ComplementaryArea(_ref2) {
  var className = _ref2.className,
    children = _ref2.children,
    header = _ref2.header,
    headerClassName = _ref2.headerClassName,
    toggleShortcut = _ref2.toggleShortcut,
    closeLabel = _ref2.closeLabel,
    identifier = _ref2.identifier,
    props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  var _useSelect = (0, _data.useSelect)(function (select) {
      var _interfaceStore$getAc;
      var interfaceStore = /** @type {any} */select('core/interface');
      var activeArea = interfaceStore === null || interfaceStore === void 0 || (_interfaceStore$getAc = interfaceStore.getActiveComplementaryArea) === null || _interfaceStore$getAc === void 0 ? void 0 : _interfaceStore$getAc.call(interfaceStore, EDITOR_SCOPE);
      return {
        isActive: isActiveArea(activeArea)
      };
    }, []),
    isActive = _useSelect.isActive;
  if (!isActive) {
    return null;
  }
  var fillClassName = className ? "interface-complementary-area ".concat(className) : 'interface-complementary-area';
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ComplementaryAreaFill, {
    className: fillClassName,
    scope: EDITOR_SCOPE,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_complementaryAreaHeader["default"], {
      className: headerClassName,
      toggleButtonProps: {
        label: closeLabel,
        shortcut: toggleShortcut,
        scope: EDITOR_SCOPE,
        identifier: identifier
      },
      children: header
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Panel, {
      className: "edit-post-sidebar",
      children: children
    })]
  });
}
ComplementaryArea.Slot = function ComplementaryAreaSlot(_ref3) {
  var scope = _ref3.scope;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Slot, {
    name: "ComplementaryArea/".concat(scope)
  });
};
//# sourceMappingURL=index.js.map