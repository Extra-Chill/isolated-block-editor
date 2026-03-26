/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { createPortal, useEffect, useMemo, useState } from '@wordpress/element';
import { jsx as _jsx } from "react/jsx-runtime";
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
  return createPortal(/*#__PURE__*/_jsx("div", {
    className: sidebarClassName,
    children: children
  }), resolvedTarget);
}
//# sourceMappingURL=detached-sidebar.js.map