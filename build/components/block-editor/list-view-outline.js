"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ListViewOutline;
var _blockEditor = require("@wordpress/block-editor");
var _components = require("@wordpress/components");
var _i18n = require("@wordpress/i18n");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * WordPress dependencies
 */

function ListViewOutline() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "editor-list-view-sidebar__outline",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.__experimentalText, {
        children: (0, _i18n.__)('List view')
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_blockEditor.__experimentalListView, {})]
  });
}
//# sourceMappingURL=list-view-outline.js.map