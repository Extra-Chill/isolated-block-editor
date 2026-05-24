"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertBlockToStatic = convertBlockToStatic;
exports.convertBlocksToReusable = convertBlocksToReusable;
exports["default"] = void 0;
exports.deleteReusableBlock = deleteReusableBlock;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _blocks = require("@wordpress/blocks");
var _data = require("@wordpress/data");
var _i18n = require("@wordpress/i18n");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); } /**
 * WordPress dependencies
 */
/**
 * Convert a reusable block to a static block effect handler
 *
 * @param {string}  clientId Block ID.
 * @return {Object} control descriptor.
 */
function convertBlockToStatic(clientId) {
  return {
    type: 'CONVERT_BLOCK_TO_STATIC',
    clientId: clientId
  };
}

/**
 * Convert a static block to a reusable block effect handler
 *
 * @param {Array}  clientIds Block IDs.
 * @return {Object} control descriptor.
 */
function convertBlocksToReusable(clientIds) {
  return {
    type: 'CONVERT_BLOCKS_TO_REUSABLE',
    clientIds: clientIds
  };
}

/**
 * Deletes a reusable block.
 *
 * @param {string} id Reusable block ID.
 * @return {Object} control descriptor.
 */
function deleteReusableBlock(id) {
  return {
    type: 'DELETE_REUSABLE_BLOCK',
    id: id
  };
}
var controls = {
  CONVERT_BLOCK_TO_STATIC: (0, _data.createRegistryControl)(function (registry) {
    return function (_ref) {
      var clientId = _ref.clientId;
      var oldBlock = registry.select('core/block-editor').getBlock(clientId);
      var reusableBlock = registry.select('core').getEditedEntityRecord('postType', 'wp_block', oldBlock.attributes.ref);
      var newBlocks = (0, _blocks.parse)(reusableBlock.content);
      registry.dispatch('core/block-editor').replaceBlocks(oldBlock.clientId, newBlocks);
    };
  }),
  CONVERT_BLOCKS_TO_REUSABLE: (0, _data.createRegistryControl)(function (registry) {
    return /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee(_ref2) {
        var clientIds, reusableBlock, updatedRecord, newBlock;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              clientIds = _ref2.clientIds;
              reusableBlock = {
                title: (0, _i18n.__)('Untitled Reusable Block'),
                content: (0, _blocks.serialize)(registry.select('core/block-editor').getBlocksByClientId(clientIds)),
                status: 'publish'
              };
              _context.n = 1;
              return registry.dispatch('core').saveEntityRecord('postType', 'wp_block', reusableBlock);
            case 1:
              updatedRecord = _context.v;
              newBlock = (0, _blocks.createBlock)('core/block', {
                ref: updatedRecord.id
              });
              registry.dispatch('core/block-editor').replaceBlocks(clientIds, newBlock);
              registry
              // @ts-ignore */}
              .dispatch(reusableBlocksStore).__experimentalSetEditingReusableBlock(newBlock.clientId, true);
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }();
  }),
  DELETE_REUSABLE_BLOCK: (0, _data.createRegistryControl)(function (registry) {
    return /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee2(_ref4) {
        var id, reusableBlock, allBlocks, associatedBlocks, associatedBlockClientIds;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              id = _ref4.id;
              reusableBlock = registry.select('core').getEditedEntityRecord('postType', 'wp_block', id); // Don't allow a reusable block with a temporary ID to be deleted
              if (reusableBlock) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              // Remove any other blocks that reference this reusable block
              allBlocks = registry.select('core/block-editor').getBlocks();
              associatedBlocks = allBlocks.filter(function (block) {
                return (0, _blocks.isReusableBlock)(block) && block.attributes.ref === id;
              });
              associatedBlockClientIds = associatedBlocks.map(function (block) {
                return block.clientId;
              }); // Remove the parsed block.
              if (associatedBlockClientIds.length) {
                registry.dispatch('core/block-editor').removeBlocks(associatedBlockClientIds);
              }
              _context2.n = 2;
              return registry.dispatch('core').deleteEntityRecord('postType', 'wp_block', id);
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }();
  })
};
var _default = exports["default"] = controls;
//# sourceMappingURL=controls.js.map