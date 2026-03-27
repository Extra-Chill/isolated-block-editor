/**
 * @param {Object} props
 * @param {boolean} [props.canClose=true]
 * @param {string[]|undefined} [props.tabs] - Which inserter tabs to show.
 *   Defaults to all tabs. Pass e.g. ['blocks'] to show only the Blocks tab.
 */
export default function InserterSidebar({ canClose, tabs }: {
    canClose?: boolean | undefined;
    tabs?: string[] | undefined;
}): import("react").JSX.Element;
//# sourceMappingURL=inserter-sidebar.d.ts.map