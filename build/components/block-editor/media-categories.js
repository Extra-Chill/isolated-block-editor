"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MediaCategoryRegistrar;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _element = require("@wordpress/element");
var _data = require("@wordpress/data");
var _blockEditor = require("@wordpress/block-editor");
var _i18n = require("@wordpress/i18n");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); } /**
 * Auto-registers inserter media categories (Images, Videos, Audio) when
 * `allowedMimeTypes` is present in the editor settings.
 *
 * In a full WordPress post editor, `@wordpress/editor` provides these via the
 * private `inserterMediaCategories` setting. IBE doesn't use `@wordpress/editor`'s
 * provider, so we replicate the core categories here using the public
 * `registerInserterMediaCategory` action from `core/block-editor`.
 *
 * Each category fetches from the WP REST API (`/wp/v2/media`). The `core` data
 * store must be available in the registry (it is — inherited from the parent
 * registry in WordPress environments where `wp-editor` / `wp-core-data` scripts
 * are enqueued).
 */
/**
 * Fetch media items from the WP REST API via `@wordpress/core-data`.
 *
 * Uses `wp.data.resolveSelect('core')` from the global registry (the parent)
 * rather than importing `@wordpress/core-data` directly, to avoid adding a
 * hard build dependency. The 'core' store is always available in WordPress
 * environments where `wp-editor` / `wp-core-data` are enqueued.
 *
 * @param {Object} query     - InserterMediaRequest from Gutenberg.
 * @param {string} mediaType - MIME type prefix (image, video, audio).
 * @return {Promise<Object[]>} Transformed media items.
 */
function coreMediaFetch() {
  return _coreMediaFetch.apply(this, arguments);
}
function _coreMediaFetch() {
  _coreMediaFetch = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee4() {
    var query,
      mediaType,
      resolveSelect,
      coreSelect,
      mediaItems,
      _args4 = arguments,
      _t;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          query = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
          mediaType = _args4.length > 1 ? _args4[1] : undefined;
          // @ts-ignore — wp.data is a WordPress global available at runtime.
          resolveSelect = wp.data.resolveSelect;
          coreSelect = resolveSelect('core');
          if (coreSelect !== null && coreSelect !== void 0 && coreSelect.getEntityRecords) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2, []);
        case 1:
          _context4.p = 1;
          _context4.n = 2;
          return coreSelect.getEntityRecords('postType', 'attachment', _objectSpread(_objectSpread({}, query), {}, {
            media_type: mediaType,
            orderBy: query !== null && query !== void 0 && query.search ? 'relevance' : 'date'
          }));
        case 2:
          mediaItems = _context4.v;
          _context4.n = 4;
          break;
        case 3:
          _context4.p = 3;
          _t = _context4.v;
          return _context4.a(2, []);
        case 4:
          if (mediaItems) {
            _context4.n = 5;
            break;
          }
          return _context4.a(2, []);
        case 5:
          return _context4.a(2, mediaItems.map(function (item) {
            var _item$media_details, _item$caption;
            return _objectSpread(_objectSpread({}, item), {}, {
              alt: item.alt_text,
              url: item.source_url,
              previewUrl: (_item$media_details = item.media_details) === null || _item$media_details === void 0 || (_item$media_details = _item$media_details.sizes) === null || _item$media_details === void 0 || (_item$media_details = _item$media_details.medium) === null || _item$media_details === void 0 ? void 0 : _item$media_details.source_url,
              caption: (_item$caption = item.caption) === null || _item$caption === void 0 ? void 0 : _item$caption.raw
            });
          }));
      }
    }, _callee4, null, [[1, 3]]);
  }));
  return _coreMediaFetch.apply(this, arguments);
}
var MEDIA_CATEGORIES = [{
  name: 'images',
  labels: {
    name: (0, _i18n.__)('Images'),
    search_items: (0, _i18n.__)('Search images')
  },
  mediaType: 'image',
  fetch: function fetch() {
    var _arguments = arguments;
    return (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee() {
      var query;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            query = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {};
            return _context.a(2, coreMediaFetch(query, 'image'));
        }
      }, _callee);
    }))();
  }
}, {
  name: 'videos',
  labels: {
    name: (0, _i18n.__)('Videos'),
    search_items: (0, _i18n.__)('Search videos')
  },
  mediaType: 'video',
  fetch: function fetch() {
    var _arguments2 = arguments;
    return (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee2() {
      var query;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            query = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {};
            return _context2.a(2, coreMediaFetch(query, 'video'));
        }
      }, _callee2);
    }))();
  }
}, {
  name: 'audio',
  labels: {
    name: (0, _i18n.__)('Audio'),
    search_items: (0, _i18n.__)('Search audio')
  },
  mediaType: 'audio',
  fetch: function fetch() {
    var _arguments3 = arguments;
    return (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee3() {
      var query;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            query = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : {};
            return _context3.a(2, coreMediaFetch(query, 'audio'));
        }
      }, _callee3);
    }))();
  }
}];

/**
 * Registers core media categories for the inserter Media tab.
 *
 * Only registers when `allowedMimeTypes` is provided in editor settings,
 * indicating the host environment supports media browsing. The action's
 * internal duplicate check prevents double-registration.
 *
 * Render this component inside the IBE React tree so `useDispatch` targets
 * the correct sub-registry.
 *
 * @param {Object} props
 * @param {Object} props.settings - Full IBE settings object.
 */
function MediaCategoryRegistrar(_ref) {
  var _settings$editor;
  var settings = _ref.settings;
  var didRegister = (0, _element.useRef)(false);
  var allowedMimeTypes = settings === null || settings === void 0 || (_settings$editor = settings.editor) === null || _settings$editor === void 0 ? void 0 : _settings$editor.allowedMimeTypes;
  var hasMimeTypes = allowedMimeTypes && (0, _typeof2["default"])(allowedMimeTypes) === 'object' && Object.keys(allowedMimeTypes).length > 0;
  var _useDispatch = (0, _data.useDispatch)(_blockEditor.store),
    registerInserterMediaCategory = _useDispatch.registerInserterMediaCategory;
  (0, _element.useEffect)(function () {
    if (!hasMimeTypes || didRegister.current || !registerInserterMediaCategory) {
      return;
    }
    var _iterator = _createForOfIteratorHelper(MEDIA_CATEGORIES),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var category = _step.value;
        try {
          registerInserterMediaCategory(category);
        } catch (e) {
          // Action logs its own validation errors; we just prevent
          // unhandled exceptions from breaking the editor.
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    didRegister.current = true;
  }, [hasMimeTypes, registerInserterMediaCategory]);
  return null;
}
//# sourceMappingURL=media-categories.js.map