"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _isPromise = _interopRequireDefault(require("is-promise"));
var _components = require("@wordpress/components");
var _data = require("@wordpress/data");
var _compose = require("@wordpress/compose");
var _element = require("@wordpress/element");
var _blocks = require("@wordpress/blocks");
var _blockEditor = require("@wordpress/block-editor");
var _blockEditor2 = _interopRequireDefault(require("../block-editor"));
var _editorContent = _interopRequireDefault(require("./editor-content"));
var _jsxRuntime = require("react/jsx-runtime");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); } /**
 * External dependencies
 */ /**
 * WordPress dependencies
 */ /**
 * Internal dependencies
 */ /** @typedef {import('../../store/editor/reducer').EditorMode} EditorMode */ /** @typedef {import('../../index').BlockEditorSettings} BlockEditorSettings */ /** @typedef {import('../../index').OnLoad} OnLoad */ /** @typedef {import('../../index').OnMore} OnMore */ /**
 * Get editor selection
 *
 * @callback OnSelection
 */ /**
 * Update callback
 *
 * @callback OnUpdate
 * @param {object[]} blocks - Editor content to save
 * @param settings
 * @param [loader]
 * @param {Object} [options]
 */
function getInitialContent(_x, _x2) {
  return _getInitialContent.apply(this, arguments);
}
/**
 * The editor itself, including toolbar
 *
 * @param {Object} props - Component props
 * @param {object[]} props.blocks
 * @param {OnUpdate} props.onInput - Callback to update blocks
 * @param {OnUpdate} props.onChange - Callback to update blocks
 * @param {boolean} props.isEditing - Are we editing in this editor?
 * @param {EditorMode} props.editorMode - Visual or code?
 * @param {Object} props.children - Child components
 * @param {BlockEditorSettings} props.settings - Settings
 * @param {OnMore} props.renderMoreMenu - Callback to render additional items in the more menu
 * @param {OnSelection} props.selection
 * @param {OnLoad} props.onLoad - Load initial blocks
 */
function _getInitialContent() {
  _getInitialContent = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee2(settings, loader) {
    var contentLoader;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          contentLoader = (0, _isPromise["default"])(loader) ? loader : new Promise(function (resolve) {
            resolve(loader ? loader(_blocks.parse, _blocks.rawHandler) : []);
          });
          return _context2.a(2, contentLoader.then(function (content) {
            return (0, _editorContent["default"])(settings.iso.patterns, settings.iso.currentPattern, settings.editor.template, content);
          }));
      }
    }, _callee2);
  }));
  return _getInitialContent.apply(this, arguments);
}
function BlockEditorContents(props) {
  var blocks = props.blocks,
    onInput = props.onInput,
    onChange = props.onChange,
    selection = props.selection,
    isEditing = props.isEditing,
    editorMode = props.editorMode;
  var children = props.children,
    settings = props.settings,
    renderMoreMenu = props.renderMoreMenu,
    onLoad = props.onLoad;

  // Set initial content, if we have any, but only if there is no existing data in the editor (from elsewhere)
  (0, _element.useEffect)(function () {
    var loadData = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee() {
        var initialContent;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return getInitialContent(settings, onLoad);
            case 1:
              initialContent = _context.v;
              if (initialContent.length > 0 && (!blocks || blocks.length === 0)) {
                onInput(initialContent, {
                  isInitialContent: true
                });
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function loadData() {
        return _ref.apply(this, arguments);
      };
    }();
    loadData();
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_blockEditor.BlockEditorProvider, {
    value: blocks || [],
    onInput: onInput,
    onChange: onChange,
    useSubRegistry: false,
    selection: selection,
    settings: settings.editor,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_blockEditor2["default"], {
      isEditing: isEditing,
      editorMode: editorMode,
      settings: settings,
      renderMoreMenu: renderMoreMenu,
      children: children
    }),
    /*#__PURE__*/
    // @ts-ignore
    (0, _jsxRuntime.jsx)(_components.Popover.Slot, {})]
  });
}

// @ts-ignore
var _default = exports["default"] = (0, _compose.compose)([(0, _data.withSelect)(function (select, ownProps) {
  var _ownProps$blocks;
  var _select = /** @type {any} */select('isolated/editor'),
    getBlocks = _select.getBlocks,
    getEditorSelection = _select.getEditorSelection,
    getEditorMode = _select.getEditorMode,
    isEditing = _select.isEditing;
  return {
    blocks: (_ownProps$blocks = ownProps.blocks) !== null && _ownProps$blocks !== void 0 ? _ownProps$blocks : getBlocks(),
    selection: getEditorSelection(),
    isEditing: isEditing(),
    editorMode: getEditorMode()
  };
}), (0, _data.withDispatch)(function (dispatch, ownProps) {
  var _dispatch = /** @type {any} */dispatch('isolated/editor'),
    updateBlocksWithUndo = _dispatch.updateBlocksWithUndo,
    updateBlocksWithoutUndo = _dispatch.updateBlocksWithoutUndo;
  var _onInput = (/** @type {{ onInput?: Function, onChange?: Function }} */ownProps).onInput,
    _onChange = (/** @type {{ onInput?: Function, onChange?: Function }} */ownProps).onChange;
  return {
    onChange: function onChange() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _onChange === null || _onChange === void 0 || _onChange.apply(void 0, args);
      updateBlocksWithUndo.apply(void 0, args);
    },
    onInput: function onInput() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      _onInput === null || _onInput === void 0 || _onInput.apply(void 0, args);
      updateBlocksWithoutUndo.apply(void 0, args);
    }
  };
})])(BlockEditorContents);
//# sourceMappingURL=index.js.map