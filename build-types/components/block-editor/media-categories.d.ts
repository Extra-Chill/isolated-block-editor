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
export default function MediaCategoryRegistrar({ settings }: {
    settings: any;
}): null;
//# sourceMappingURL=media-categories.d.ts.map