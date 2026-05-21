/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Popover } from '@wordpress/components';
import { createPortal, useEffect, useMemo, useState } from '@wordpress/element';

/**
 * Name of the Popover slot mounted inside the detached sidebar portal.
 *
 * Popovers rendered inside the detached subtree (e.g. the inserter preview)
 * are scoped to this slot via Popover.__unstableSlotNameProvider so they
 * render in the same stacking context as their anchors, instead of falling
 * back to the default Popover.Slot inside `.iso-editor` (which is isolated
 * via `isolation: isolate` and therefore paints behind the editor canvas
 * when the anchor lives outside it).
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const DETACHED_POPOVER_SLOT_NAME = 'iso-editor/detached-sidebar';
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
export default function DetachedSidebar({
  target,
  className,
  children
}) {
  const [resolvedTarget, setResolvedTarget] = useState(() => resolveTarget(target));
  const sidebarClassName = useMemo(() => classnames('iso-editor__detached-sidebar', className), [className]);
  useEffect(() => {
    const nextTarget = resolveTarget(target);
    setResolvedTarget(nextTarget);
    if (nextTarget || !target) {
      return undefined;
    }
    const observer = new MutationObserver(() => {
      const observedTarget = resolveTarget(target);
      if (observedTarget) {
        setResolvedTarget(observedTarget);
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => {
      observer.disconnect();
    };
  }, [target]);
  if (!resolvedTarget || !children) {
    return null;
  }
  return createPortal(/*#__PURE__*/_jsx(Popover.__unstableSlotNameProvider, {
    value: DETACHED_POPOVER_SLOT_NAME,
    children: /*#__PURE__*/_jsxs("div", {
      className: sidebarClassName,
      children: [children, /*#__PURE__*/_jsx(Popover.Slot, {
        name: DETACHED_POPOVER_SLOT_NAME
      })]
    })
  }), resolvedTarget);
}
//# sourceMappingURL=detached-sidebar.js.map