export default ClickOutsideWrapper;
declare const ClickOutsideWrapper: {
    new (...args: any[]): {
        bindNode(node: any): void;
        cancelBlurCheck(): void;
        queueBlurCheck(event: any): void;
        normalizeButtonFocus(event: MouseEvent): void;
        componentWillUnmount(): void;
        node: any;
        blurCheckTimeout: number | undefined;
        preventBlurCheck: boolean | undefined;
        render(): import("react").JSX.Element;
        context: unknown;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<any>;
        state: Readonly<any>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
//# sourceMappingURL=click-outside.d.ts.map