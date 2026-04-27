"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HotSwapper;
var _data = require("@wordpress/data");
var _element = require("@wordpress/element");
var _storeHotSwap = _interopRequireDefault(require("../../store/plugins/store-hot-swap"));
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Routes wp.data access for `core/block-editor` and `core/editor` to the
 * focused editor instance's sub-registry. Without this, blocks that call
 * `wp.data.select( 'core/block-editor' )` directly would always read from
 * the parent registry and ignore the per-instance editor state.
 */
function HotSwapper() {
  var registry = /** @type {{ select: Function, dispatch: Function }} */
  /** @type {unknown} */(0, _data.useRegistry)();
  var isEditing = (0, _data.useSelect)(
  // @ts-ignore
  function (select) {
    return select('isolated/editor').isEditing();
  }, []);
  (0, _element.useEffect)(function () {
    _storeHotSwap["default"].resetEditor();
    var didSetEditor = false;
    if (isEditing) {
      _storeHotSwap["default"].setEditor(registry.select, registry.dispatch);
      didSetEditor = true;
    }
    return function () {
      if (didSetEditor) {
        _storeHotSwap["default"].resetEditor();
      }
    };
  }, [isEditing, registry]);
  return null;
}
//# sourceMappingURL=hot-swapper.js.map