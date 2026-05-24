export default storeConfig;
declare function storeConfig(preferencesKey: any, defaultPreferences: any): {
    reducer: import("redux").Reducer<{
        blocks: {
            past: never[];
            present: any;
            future: {
                editCount: number;
                selection: null;
                blocks: null;
            }[];
        } | {
            past: {
                editCount: number;
                selection: null;
                blocks: null;
            }[];
            present: any;
            future: never[];
        };
        editor: {
            patterns: any;
            currentPattern: any;
            ignoredContent: string[];
            gutenbergTemplate: any;
            settings: any;
            /**
             * - whether in visual or code editing mode.
             */
            editorMode: import("./editor/reducer").EditorMode;
            /**
             * - whether the inserter is open.
             */
            isInserterOpened: boolean;
            /**
             * - whether the list view is open.
             */
            isListViewOpened: boolean;
            /**
             * - is this editor being used?
             */
            isEditing: boolean;
            /**
             * - is the editor ready?
             */
            isReady: boolean;
            /**
             * - current device type
             */
            deviceType: string;
            /**
             * - editor canvas styles
             */
            canvasStyles: any;
            /**
             * - whether the editor canvas is an iframe
             */
            isIframePreview: boolean;
        } | {
            editorMode: any;
            /**
             * - whether the inserter is open.
             */
            isInserterOpened: boolean;
            /**
             * - whether the list view is open.
             */
            isListViewOpened: boolean;
            /**
             * - array of patterns.
             */
            patterns: import("./editor/reducer").Pattern[];
            /**
             * - current pattern name.
             */
            currentPattern: string | null;
            /**
             * - content to ignore when saving.
             */
            ignoredContent: string[];
            /**
             * - the Gutenberg template
             */
            gutenbergTemplate: object | null;
            /**
             * - is this editor being used?
             */
            isEditing: boolean;
            /**
             * - is the editor ready?
             */
            isReady: boolean;
            /**
             * - editor settings
             */
            settings: import("./editor/reducer").IsoSettings;
            /**
             * - current device type
             */
            deviceType: string;
            /**
             * - editor canvas styles
             */
            canvasStyles: any;
            /**
             * - whether the editor canvas is an iframe
             */
            isIframePreview: boolean;
        } | {
            isInserterOpened: any;
            isInspectorOpened: boolean;
            isListViewOpened: boolean;
            /**
             * - whether in visual or code editing mode.
             */
            editorMode: import("./editor/reducer").EditorMode;
            /**
             * - array of patterns.
             */
            patterns: import("./editor/reducer").Pattern[];
            /**
             * - current pattern name.
             */
            currentPattern: string | null;
            /**
             * - content to ignore when saving.
             */
            ignoredContent: string[];
            /**
             * - the Gutenberg template
             */
            gutenbergTemplate: object | null;
            /**
             * - is this editor being used?
             */
            isEditing: boolean;
            /**
             * - is the editor ready?
             */
            isReady: boolean;
            /**
             * - editor settings
             */
            settings: import("./editor/reducer").IsoSettings;
            /**
             * - current device type
             */
            deviceType: string;
            /**
             * - editor canvas styles
             */
            canvasStyles: any;
            /**
             * - whether the editor canvas is an iframe
             */
            isIframePreview: boolean;
        } | {
            isInspectorOpened: any;
            isListViewOpened: boolean;
            /**
             * - whether in visual or code editing mode.
             */
            editorMode: import("./editor/reducer").EditorMode;
            /**
             * - whether the inserter is open.
             */
            isInserterOpened: boolean;
            /**
             * - array of patterns.
             */
            patterns: import("./editor/reducer").Pattern[];
            /**
             * - current pattern name.
             */
            currentPattern: string | null;
            /**
             * - content to ignore when saving.
             */
            ignoredContent: string[];
            /**
             * - the Gutenberg template
             */
            gutenbergTemplate: object | null;
            /**
             * - is this editor being used?
             */
            isEditing: boolean;
            /**
             * - is the editor ready?
             */
            isReady: boolean;
            /**
             * - editor settings
             */
            settings: import("./editor/reducer").IsoSettings;
            /**
             * - current device type
             */
            deviceType: string;
            /**
             * - editor canvas styles
             */
            canvasStyles: any;
            /**
             * - whether the editor canvas is an iframe
             */
            isIframePreview: boolean;
        } | {
            isInserterOpened: boolean;
            isInspectorOpened: boolean;
            isListViewOpened: any;
            /**
             * - whether in visual or code editing mode.
             */
            editorMode: import("./editor/reducer").EditorMode;
            /**
             * - array of patterns.
             */
            patterns: import("./editor/reducer").Pattern[];
            /**
             * - current pattern name.
             */
            currentPattern: string | null;
            /**
             * - content to ignore when saving.
             */
            ignoredContent: string[];
            /**
             * - the Gutenberg template
             */
            gutenbergTemplate: object | null;
            /**
             * - is this editor being used?
             */
            isEditing: boolean;
            /**
             * - is the editor ready?
             */
            isReady: boolean;
            /**
             * - editor settings
             */
            settings: import("./editor/reducer").IsoSettings;
            /**
             * - current device type
             */
            deviceType: string;
            /**
             * - editor canvas styles
             */
            canvasStyles: any;
            /**
             * - whether the editor canvas is an iframe
             */
            isIframePreview: boolean;
        } | {
            isEditing: any;
            /**
             * - whether in visual or code editing mode.
             */
            editorMode: import("./editor/reducer").EditorMode;
            /**
             * - whether the inserter is open.
             */
            isInserterOpened: boolean;
            /**
             * - whether the list view is open.
             */
            isListViewOpened: boolean;
            /**
             * - array of patterns.
             */
            patterns: import("./editor/reducer").Pattern[];
            /**
             * - current pattern name.
             */
            currentPattern: string | null;
            /**
             * - content to ignore when saving.
             */
            ignoredContent: string[];
            /**
             * - the Gutenberg template
             */
            gutenbergTemplate: object | null;
            /**
             * - is the editor ready?
             */
            isReady: boolean;
            /**
             * - editor settings
             */
            settings: import("./editor/reducer").IsoSettings;
            /**
             * - current device type
             */
            deviceType: string;
            /**
             * - editor canvas styles
             */
            canvasStyles: any;
            /**
             * - whether the editor canvas is an iframe
             */
            isIframePreview: boolean;
        } | {
            isReady: any;
            /**
             * - whether in visual or code editing mode.
             */
            editorMode: import("./editor/reducer").EditorMode;
            /**
             * - whether the inserter is open.
             */
            isInserterOpened: boolean;
            /**
             * - whether the list view is open.
             */
            isListViewOpened: boolean;
            /**
             * - array of patterns.
             */
            patterns: import("./editor/reducer").Pattern[];
            /**
             * - current pattern name.
             */
            currentPattern: string | null;
            /**
             * - content to ignore when saving.
             */
            ignoredContent: string[];
            /**
             * - the Gutenberg template
             */
            gutenbergTemplate: object | null;
            /**
             * - is this editor being used?
             */
            isEditing: boolean;
            /**
             * - editor settings
             */
            settings: import("./editor/reducer").IsoSettings;
            /**
             * - current device type
             */
            deviceType: string;
            /**
             * - editor canvas styles
             */
            canvasStyles: any;
            /**
             * - whether the editor canvas is an iframe
             */
            isIframePreview: boolean;
        } | {
            deviceType: any;
            /**
             * - whether in visual or code editing mode.
             */
            editorMode: import("./editor/reducer").EditorMode;
            /**
             * - whether the inserter is open.
             */
            isInserterOpened: boolean;
            /**
             * - whether the list view is open.
             */
            isListViewOpened: boolean;
            /**
             * - array of patterns.
             */
            patterns: import("./editor/reducer").Pattern[];
            /**
             * - current pattern name.
             */
            currentPattern: string | null;
            /**
             * - content to ignore when saving.
             */
            ignoredContent: string[];
            /**
             * - the Gutenberg template
             */
            gutenbergTemplate: object | null;
            /**
             * - is this editor being used?
             */
            isEditing: boolean;
            /**
             * - is the editor ready?
             */
            isReady: boolean;
            /**
             * - editor settings
             */
            settings: import("./editor/reducer").IsoSettings;
            /**
             * - editor canvas styles
             */
            canvasStyles: any;
            /**
             * - whether the editor canvas is an iframe
             */
            isIframePreview: boolean;
        } | {
            isIframePreview: any;
            /**
             * - whether in visual or code editing mode.
             */
            editorMode: import("./editor/reducer").EditorMode;
            /**
             * - whether the inserter is open.
             */
            isInserterOpened: boolean;
            /**
             * - whether the list view is open.
             */
            isListViewOpened: boolean;
            /**
             * - array of patterns.
             */
            patterns: import("./editor/reducer").Pattern[];
            /**
             * - current pattern name.
             */
            currentPattern: string | null;
            /**
             * - content to ignore when saving.
             */
            ignoredContent: string[];
            /**
             * - the Gutenberg template
             */
            gutenbergTemplate: object | null;
            /**
             * - is this editor being used?
             */
            isEditing: boolean;
            /**
             * - is the editor ready?
             */
            isReady: boolean;
            /**
             * - editor settings
             */
            settings: import("./editor/reducer").IsoSettings;
            /**
             * - current device type
             */
            deviceType: string;
            /**
             * - editor canvas styles
             */
            canvasStyles: any;
        };
        preferences: any;
        options: {};
    }, any, Partial<{
        blocks: {
            past: never[];
            present: {
                editCount: number;
                selection: null;
                blocks: null;
            };
            future: never[];
        } | undefined;
        editor: import("./editor/reducer").EditorState | undefined;
        preferences: any;
        options: {} | undefined;
    }>>;
    actions: {
        toggleFeature(feature: string): {
            type: string;
            feature: string;
        };
        toggleOption(option: string): {
            type: string;
            option: string;
        };
        setReady(isReady: boolean): {
            type: string;
            isReady: boolean;
        };
        setEditorMode(editorMode: EditorMode): {
            type: string;
            editorMode: import("./editor/reducer").EditorMode;
        };
        setupEditor(settings: BlockEditorSettings): {
            type: string;
            settings: import("..").BlockEditorSettings;
        };
        setCurrentPattern(pattern: string): {
            type: string;
            pattern: string;
        };
        setIsInserterOpened(isOpen: boolean): {
            type: string;
            isOpen: boolean;
        };
        setDeviceType(deviceType: string): {
            type: string;
            deviceType: string;
        };
        setCanvasStyles(canvasStyles: string): {
            type: string;
            canvasStyles: string;
        };
        setIsIframePreview(isIframePreview: boolean): {
            type: string;
            isIframePreview: boolean;
        };
        setEditing(isEditing: boolean): {
            type: string;
            isEditing: boolean;
        };
        openGeneralSidebar(name: string): Generator<{
            type: string;
            storeKey: string;
            actionName: string;
            args: unknown[];
        }, void, unknown>;
        closeGeneralSidebar(): Generator<{
            type: string;
            storeKey: string;
            actionName: string;
            args: unknown[];
        }, void, unknown>;
        setIsListViewOpened(isOpen: boolean): {
            type: string;
            isOpen: boolean;
        };
        undo(): Generator<{
            type: string;
        }, any, unknown>;
        redo(): Generator<{
            type: string;
        }, any, unknown>;
        updateBlocksWithUndo(blocks: object[], options?: any): Generator<any, any, unknown>;
        updateBlocksWithoutUndo(blocks: object[], options?: any): Generator<any, any, unknown>;
        replaceContent(blocks: object[]): Generator<{
            type: string;
            blocks: any[];
        }, any, unknown>;
    };
    selectors: {
        isOptionActive(state: any, option: string): boolean;
        isFeatureActive(state: any, feature: string, defaultValue?: boolean): any;
        getEditorMode(state: {
            editor: EditorState;
        }): EditorMode;
        getEditorSettings(state: {
            editor: EditorState;
        }): IsoSettings;
        isEditorReady(state: {
            editor: EditorState;
        }): boolean;
        getCurrentPatternName(state: {
            editor: EditorState;
        }): string | null;
        getCurrentPattern(state: {
            editor: EditorState;
        }): Pattern | null;
        getIgnoredContent(state: {
            editor: EditorState;
        }): string[];
        getNamedPattern(state: {
            editor: EditorState;
        }, patternName: any): Pattern | null;
        isInserterOpened(state: {
            editor: EditorState;
        }): boolean;
        isEditing(state: {
            editor: EditorState;
        }): boolean;
        getPatterns(state: {
            editor: EditorState;
        }): Pattern[];
        isListViewOpened(state: {
            editor: EditorState;
        }): boolean;
        getPreviewDeviceType(state: {
            editor: EditorState;
        }): string;
        getCanvasStyles(state: {
            editor: EditorState;
        }): any;
        isIframePreview(state: {
            editor: EditorState;
        }): boolean;
        isEditorSidebarOpened: {
            (): any;
            isRegistrySelector?: boolean;
            registry?: any;
        };
        getBlocks(state: any): object[];
        getSerializedContent(state: any): string;
        getEditorSelection(state: any): any;
        hasEditorUndo(state: any): boolean;
        hasEditorRedo(state: any): boolean;
        getEditCount(state: any): number;
    };
    persist: string[];
    initialState: {
        preferences: any;
    };
};
import * as editorSelectors from './editor/selectors';
//# sourceMappingURL=index.d.ts.map