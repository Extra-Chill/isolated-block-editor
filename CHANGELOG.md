# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.1.2] - 2026-03-24

### Changed
- add homeboy component config
- add replaceContent action and getSerializedContent selector
- Release 3.1.1: Migrate SCSS imports to @use syntax
- Release 3.1.0: Add Gutenberg 22.x compatibility and usePaddingAppender feature
- Update for Gutenberg 22.x compatibility
- Change padding appender height from 40vh to 40px
- Add usePaddingAppender so that click at post bottom inserts a block
- Update to Gutenberg 20.6.0
- Update playwright to v1.52.0
- Update GitHub actions versions
- Release 2.29.0
- Rebuild
- Update to Gutenberg 17
- Release 2.28.0
- Updates for Gutenberg 16.9
- Release 2.27.0
- Include recompiled tests
- Update packages for Gutenberg 16.7.1
- Remove stray double quote from usage instructions
- Release 2.26.0
- Release 2.25.0
- Release 2.24.0
- Release 2.23.1
- Update example to React 18
- Remove react dependency
- Update index.html
- Release 2.23.0
- Update changelog
- Update all packages
- Release 2.22.0
- Update build files
- Update packages
- Remove refx
- Add experimental undo
- Update README.md
- Release 2.21.0
- Remove unused mediaUpload setting
- Remove the media upload override
- Release 2.20.0
- Reset version to 2.19
- Add an actions slot
- Release 2.19.0
- Update/2.19.0 (again)
- Release 2.18.1
- Update build and changelog
- Allow FooterSlot usage
- Release 2.18.0
- Update build
- Add support to custom previews
- Release 2.17.3
- Do not override default window.wp namespace
- Release 2.17.2
- Update release
- Support both gutenberg v13 and v14 layout margins
- Update Gutenberg requirement
- Release 2.17.1
- Update build output
- Update Changelog
- Add 'constrained' type to default layout to support latest Gutenberg
- Release 2.17.0
- Push build output
- Add a new boolean 'header' setting so that it can be disabled when not needed
- Release 2.16.0
- Update for 2.16
- Bump npm versions
- Replace block navigation dropdown
- Remove unused judder fix
- Added @automatic/ for the imports
- Update version in package.json
- Add experimental onSelection callback
- Bump minimum node version to match Gutenberg
- Add .nvmrc for node 14
- Release 2.14.1
- Keep internal state in sync when onChange and onInput are called
- Add fullscreen and block inserter fixes to changelog
- Remove fullscreen if component unmounted
- Release 2.14.0
- Commit built assets
- Allow extending the editor by externally managing its content
- Release 2.13.1
- Popover fix for Gutenberg 13.3.0
- Add more debug logs for undo feature
- Use optional chaining (?.) for conditional call
- Release 2.13.0
- Bundle 2.13.0
- Add a title slot
- Update selected packages
- Update @wordpress/interface
- Rename fetchLinkSuggestions
- Test with playwright
- Release 2.12.1
- Set changelog date
- Revert to @wordpress/interface 4.4.0
- Fix caret position for undo
- Release 2.12.0
- Bundle 2.12.0
- Bump storybook and babel-preset
- Allow user settings in browser attachEditor
- Update wordpress monorepo
- Bump yjs
- Bump storybook
- Bump core modules
- Release 2.11.1
- Bundle 2.11.1
- Update changelog for 2.11.1
- Fix basic handling of nested lists
- Release 2.11.0
- Update changelog for 2.11.0
- Update browser bundle for 2.11.0
- Bundle
- Add comment
- Add UI test
- Sanitize block attributes
- Add sanitize function
- Prevent remote changes from triggering a selection change message
- Also adjust peer carets for remote updates
- Refactor types
- Remove mutex
- Clean up and add comments
- Refactor
- Adjust local relative position for peer carets
- Modularize relative position handler
- Adjust tests
- Add basic relative cursor adjusting
- Extract `selectionIsInRichText`
- Rename applyChangesToYDoc → applyLocalChangesToYDoc
- Remove unused import in test
- Support replacements
- Infer multiline tags
- Prepare for handling RichText replacements
- Rename test file for clarity
- Support known keys
- Simplify
- Remap named guten formats to standard tags
- Properly initialize yxmlText
- Wire up
- Change to reference equality check for rich text formats
- Temporarily skip test due to upstream change in Gutenberg
- Use imported simplediff
- Revert "Extract simpleDiff"
- Add HTML to Yjs delta converter
- Extract simpleDiff
- Release 2.10.0
- Update changelog for 2.10.0
- Release 2.9.1
- Update changelog for 2.9.1
- Only update current pattern if it changes
- Stabilize return object to prevent formatting issues
- Fix peer caret glitches at list item edges
- Add ts-ignore for Intl.Segmenter
- Prevent emoji from being separated by peer caret
- Tweak flakey test
- Disable dependency dashboard
- Pin `@wordpress` dependencies
- Release 2.9.0
- Update changelog for 2.9.0
- Add renovate config for @wordpress packages
- Update to 6.4.8
- Add changelog entries
- Add back hasCollabPeers() selector
- Prevent adding initial content to undo stack
- Show better error messages on test failure
- Cleanup
- Add test for multiplayer undo
- Refactor tests
- Add tests
- Move undo/redo to middleware
- Move to redux middleware
- Extract undo manager code
- Improve readability
- Simplify data passing
- Handle selection changes
- Count undo stack
- Hook up custom undo via filters
- Set up undo manager
- Release 2.8.1
- Add 2.8.1 build files
- Add fix for CSS override for Gutenberg's static mobile breakpoint
- Release 2.8.0
- Update changelog for 2.8.0
- Support block previews and device type
- Release 2.7.2
- Remove canvas click redirect
- Release 2.7.1
- Update changelog for 2.7.1
- Release 2.7.0
- Add 2.7.0 details to changelog
- Move eslint plugin to dev dependencies
- Rebundle
- Remove unnecessary tests from editor store
- Only show inspector tabs if documentInspector is enabled
- Export FooterSlot
- Improve popover CSS
- Add footer slot
- Add sidebar support
- Release 2.6.0
- Bundle for 2.6.0
- Update changelog for 2.6.0
- Use official Gutenberg black color
- fix changing of caret avatar text color
- Build modules
- Allow an initial save
- Add onAvatarClick to Avatar story
- Use optional chaining
- Use btn element for clickable avatars
- Improve how we access and pass selectBlock
- Release 2.5.1
- Update changelog for 2.5.1
- Move editor background colour to the core editor
- Add edit-post CSS to browser build
- Build last to fail earlier
- Run tests on CI
- Add basic UI integration tests
- Prevent duplicate format registration
- Build bundle
- Refresh `@wordpress` packages
- Refresh lockfile
- Add built modules
- focus peer selected block on avatar click
- Update src/components/collaborative-editing/use-yjs/formats/collab-caret/CollabCaret.stories.tsx
- fix multi line carets
- Add .idea to ignore list
- Release 2.5.0
- Bundle 2.5.0
- Update changelog for 2.5
- Add missing dependencies to package.json
- Autofix lint issues in collab-related files
- Restore the toolbar slot
- Add stories for IsolatedBlockEditor
- Tweak eslintrc for better typescript support
- Make prettier work
- Make eslint work again
- Add a reset button for Collab story
- Remove fixedToolbar default
- Remove unnecessary toolbar CSS
- Also show toolbar if selectorTool is enabled
- Change the onLoad to also accept a Promise
- Update toolbar to match core
- Use BlockTools
- Remove block editor effects
- Release 2.4.3
- Add release info to readme
- Update changelog for 2.4.3
- Bundle shortcut fix
- Bump all packages
- Add ShortcutProvider
- Update package version to 2.4.2
- Bundle things for 2.4.2
- Prevent peer block selection colors from disappearing
- Tweak selection border
- Add colored peer block selection outlines
- Enlarge peer caret labels
- Autoselect caret label text color
- Tweak peer caret styles
- Add story for peer caret
- Round corners on peer caret label
- Only overflow when there is at least +2
- Make overflow number smaller
- Vertically align avatar overflow tooltip
- Release 2.4.1
- Reset version back to 2.4.0
- Bundle 2.4.1
- Remove unnecessary changelog
- Update package.json number
- Update changelog for 2.4
- Purge tsconfig.tsbuildinfo in yarn clean
- Improve peer cursor updates
- Prevent toolbar settings items from stacking
- Update readme
- Increase name initial font size to match
- Enlarge avatar size
- Tweak name initial styles
- Add global font context to Storybook
- Mimic core Tooltip styles
- Add presence avatars
- Update changelog for blur fix
- Expand click-outside exceptions
- Update READMEs
- Move typedefs
- Change settings location
- Move to separate named export
- Tweak color
- Add peer block selection outlines
- Move formats/collab-caret
- Remove debounce
- Initialize Yjs doc with up-to-date blocks
- Add story
- Release 2.3.0
- Bundle types
- Add 2.3.0 details to changelog
- Add block inspector to Storybook
- Add docs
- Standardize hyphenation
- Add workaround for Emotion 11
- Refresh yarn lock
- ts-nocheck the algorithms file for now
- Copy asblocks code
- Move to folder
- Add commit hash for asblocks dep
- Tweak caret styles
- Group together user settings
- Only send caret color on channel connect
- Handle ids and usernames separately
- Release 2.2.0
- Bundle 2.1.0
- Add comments
- Update readme for ToolbarSlot
- Add a store selector to get edit count
- Add a fill slot for the toolbar
- Move stories out of src folder
- Use webpack 5 for storybook
- Revert package.json spaces to tabs
- Disable undo when sharing
- Update ydoc after undo/redo
- Better id collision prevension
- Don't rely on change events
- Make mock transport events arrive asynchronously
- Add caret colors
- Rename param back to initialBlocks
- Add caret names
- Allow arbitrary identities
- Simplify messaging
- Rename from asblocks
- Add `title` to identify carets
- Add position indicators
- Send selection
- Add tech notes
- Release 2.0.0
- Make npm registry explicit
- Add changelog
- Configure release-it to push to npm
- Add @automattic prefix to package name
- Handle edge case
- Refactor and add types
- Only enable via settings
- Add Storybook
- Pass channel id via settings
- Extract
- Start passing messages
- Add types
- Produce a seperate core CSS file
- Remove unnecessary webpack config
- Force ES6 for browser build
- Add missing CSS for block mover
- Move core imports to browser build file
- Remove CSS files from the JS and move to the SCSS
- Update build system
- Bundle 1.2.2
- Restore local withFocusOutside
- Switch to core withFocusOutside and remove clearSelectedBlock
- Move webpack to devDependencies
- Clarify adding a tag version from github
- Update version to 1.2.0
- Add Gutenberg version levels to readme
- Remove local BlockEditorProvider
- Switch to using core BlockEditorProvider, but with no subregistry
- Remove deprecated DropZoneProvider
- Remove convert to group button
- Add experimental note
- Update docs with documentsection and custom store
- Bump version to 1.1.0
- Remove Chrome extension
- Include the core/editor store in the hot swapper
- Split editor initialisation
- Export DocumentInspector component
- Don’t set font on the token field help class
- Duplicate and decorate core/editor
- Allow custom stores to be created within our registry
- Setup Gutenberg post entity
- Add an apiFetch preload for the post
- Add a DocumentInspector component
- Bump version to 1.0.1
- Move plain text editor from examples
- Bundle builds
- Switch visual editor back to merged refs
- Include textareas in loading style
- Bump packages
- Revert to previous visual editor
- Update Visual Editor for 10.1.0
- Add a bundle step for Chrome extension
- Update readme with wp-scripts example
- Remove experimental scroll component
- Update example build scripts
- Switch to transpiling the code
- Add build files
- Add GPL
- Initial commit

### Fixed
- Fix experimental layout toolbar
- Fix link button and add custom sidebar component
- Fixes for 15.5.0
- Fix typo in import package namespace
- Fix texarea tag
- Fix missing experimental import
- Fix the block inserter showing mobile viewport UI
- Fix auto-fixable eslint errors
- Fix `act` misuse in tests
- Fix documentInspector can be used for custom document tab label
- Fix typo
- Fix bug in peer caret adjustment
- Fix comment
- Fix diffing bugs
- Fix types
- Fix pattern start
- Fix TS issues
- Fix story
- Fix for Safari
- Fix story matcher glob
- Fix types in algorithms/yjs.js
- Fix variable shadowing
- Fix instantiation bug
- Fix several minor style issues caused by change to interface skeleton
- Fix linting issues
- Fix popover inspector not opening properly
- Fix borders
- Fix caching
- Fix remaining errors in collab files
- Fix the fixedToolbar preference
- Fix a broken link to the Plain Text Editor example README.
- Fix blur clicks when they go to the root popover
- Fix a type linting issue
- Fix caret label flickering
- Fix caret text color when text is not black
- Fix type for `color`
- Fix invalid glob
- Fix linting error
- Fix duplicate @types/react
- Fixup
- Fix set peer bug
- Fix unmount bug and add debug
- Fix client count management
- Fix prettier support in IDEs
- Fix typescript linting issues
- Fix crash in selection change
- Fix focus detector
- Fix empty patterns

## [3.1.1] - 2025-12-14

### Updated

-   Migrated SCSS imports from `@import` to `@use` syntax for WordPress base styles to align with latest package requirements
-   Updated all style files (source and build) to use modern SCSS import syntax

## [3.1.0] - 2025-12-13

### Added

-   New `usePaddingAppender` hook that allows inserting blocks by clicking at the bottom of the post content
-   Support for Gutenberg 22.x compatibility

### Updated

-   All WordPress package dependencies updated to align with Gutenberg 22.x
-   CSS class naming conventions updated to match Gutenberg 22.x standards (edit-post-_ → editor-_)
-   Block navigation component refactored for Gutenberg 22.x compatibility
-   Header toolbar component updated with new API structure
-   Improved TypeScript compatibility with private API access messaging

### Breaking Changes

-   `selectorTool` option in toolbar settings is no longer functional (ToolSelector removed from Gutenberg 22.x)
-   Editor now requires Gutenberg 22.x or later (incompatible with previous Gutenberg versions)
-   CSS class names have changed for internal layout and header elements

## [2.29.0] - 2024-03-20

### Update

-   Various changes to work with Gutenberg 17.9.0
-   Toolbar is now a single strip only

## [2.28.0] - 2023-10-31

### Update

-   Due to the new Gutenberg locking mechanism this now only works with specific versions of Gutenberg. Currently set at 16.9

## [2.27.0] - 2023-10-13

### Breaking changes

-   Collaborative editing has been removed

### Update

-   Get working with Gutenberg 16.7.1+

## [2.26.0] - 2023-07-11

### Update

-   Get working with Gutenberg 16+
-   Fixed toolbar is now attached to the top of the editor and is no longer sticky

## [2.25.0] - 2023-06-13

### Added

-   `settings.iso.sidebar.customComponent` added to allow a custom settings sidebar to be supplied
-   Fix buttons in link popup (see #226)

## [2.24.0] - 2023-04-24

### Update

-   Get working with Gutenberg 15.5.0+

## [2.23.1] - 2023-01-09

### Update

-   Remove React as a direct dependency

## [2.23.0] - 2023-01-05

### Update

-   Update all packages, including React to version 18

### Breaking changes

-   Collaborative editing via yjs has been deprecated and will be removed in the next version. A hook-based replacement will be proposed in the future.

## [2.22.0] - 2023-01-03

### Added

-   Add \_\_experimentalUndo for editing that better matches core Gutenberg
-   Replace refx with equivalent core version

## [2.21.0] - 2022-12-06

### Breaking changes

-   Now doesn't automatically set up the media uploader - you must do this manually (see readme)

## [2.20.0] - 2022-11-17

-   Add an ActionArea slot to insert components into the Gutenberg actions sidebar

## [2.19.0] - 2022-10-12

-   Update to latest Gutenberg 14.3.0 packages

## [2.18.1] - 2022-10-03

-   Fix FooterSlot (#187)

## [2.18.0] - 2022-09-22

-   Add support to custom previews (#186)

## [2.17.3] - 2022-09-16

-   Do not override default window.wp namespace (#185) (cb85bcf)

## [2.17.2] - 2022-08-29

-   Support both gutenberg v13 and v14 layout margins (#183)

## [2.17.1] - 2022-08-29

-   Fix issues with Gutenberg v14.0.0

## [2.17.0] - 2022-08-04

-   Add a new boolean 'header' setting so that it can be disabled when not neede

## [2.16.0] - 2022-06-30

-   Fixed the deprecated use of BlockNavigationDropdown
-   Remove some old CSS adding focus borders to some blocks
-   Update interface store to match latest Gutenberg libraries

## [2.15.0] - 2022-06-22

-   Add callback prop to main editor component to be able to listen to onSelection events

## [2.14.1] - 2022-06-16

### Fixed

-   Keep internal state in sync when onChange and onInput are called
-   Fullscreen works correctly if unmounted before disabling fullscreen mode
-   The block inserter header now only appears on mobile

## [2.14.0] - 2022-06-01

-   Allow extending the editor by externally managing its content

## [2.13.1] - 2022-06-01

### Fixed

-   Update inspector Popover usage to work with Gutenberg 13.3.0

## [2.13.0] - 2022-05-17

### Added

-   Add EditorHeadingSlot to allow content to be inserted before the editor. For example, a title.

### Fixed

-   Duplicate interface store to fix problem with different context stopping block inspector from working
-   Stop using experimental link suggestion

## [2.12.1] - 2022-04-18

### Fixed

-   Fix caret position when undoing in collab mode.
-   Revert @wordpress/interface to 4.4.0 to restore block inspector functionality.

## [2.12.0] - 2022-04-15

### Added

-   `attachEditor` now takes an optional settings object

## [2.11.1] - 2022-02-25

### Fixed

-   Fixed basic handling of nested lists in collab mode.
-   Fix `documentInspector` option so it allows the document title to be changed

## [2.11.0] - 2022-02-18

### Added

-   In collab mode, add support for same-block concurrent editing.

### Fixed

-   Sanitize HTML in block attributes received from collab peers.

## [2.10.0] - 2022-02-09

### Added

-   `is-preview-mode` class is added to the editor when preview is enabled

### Fixed

-   Pattern fix in 2.9.1 stopped patterns being triggered normally.

## [2.9.1] - 2022-02-07

### Fixed

-   In collab mode, prevent emojis from being separated by a peer caret when the emoji consists of more than one Unicode code point.
-   In collab mode, prevent peer carets from disappearing when at the end of List block items.
-   Only change current pattern if the pattern name changes. Helps to fix an infinite loop situation.

## [2.9.0] - 2021-12-09

### Breaking changes

-   Renamed collab-related selectors and action creators for clarity:
    -   `getPeers` to `getCollabPeers`
    -   `hasPeers` to `hasCollabPeers`
    -   `setAvailablePeers` to `setAvailableCollabPeers`
    -   `setPeerSelection` to `setCollabPeerSelection`

### Added

-   Smart undo/redo functionality in collab mode. Each peer will only be able to undo their own edits and not of others, with the current limitation being that they are editing separate blocks.

## [2.8.1] - 2021-12-06

### Fixed

-   Fix CSS override to disable Gutenberg's mobile `position: static` - it needs to be important but still allow previews to work

## [2.8.0] - 2021-12-06

### Added

-   Add support for changing device types (via `setDeviceType` and `getDeviceType`)
-   Add support for resizable canvas
-   Add editor styles to editor

### Fixed

-   Set a default `__editorAssets` if not defined
-   Fixed block previews not detecting height changes
-   Fix invalid default editor styles

## [2.7.2] - 2021-12-02

### Fixed

-   Fix crash with Gutenberg 12.1.0
-   Updated all package versions to resolve a dependency problem

## [2.7.1] - 2021-11-26

### Fixed

-   Restore previous `is-fullscreen-mode` behaviour
-   Set a max width on interface skeleton to help stop wide content pushing outside of the editor
-   Change how inserter is closed so it works better with pattern explorer

## [2.7.0] - 2021-11-23

### Breaking changes

-   Uses Gutenberg interface skeleton, changing the overall layout of the editor

### Added

-   Gutenberg sidebars, for the block inserter and inspector, are supported through the `sidebar` setting
-   `footer` setting to enable the footer area
-   `FooterSlot` component to insert content into footer area

## [2.6.0] - 2021-11-01

### Fixed

-   Fix changing of caret avatar text color in collab mode
-   Fix no list margin in Gutenberg term component

### Breaking changes

-   Editor now saves initial content if there is anything to save

## [2.5.1] - 2021-10-13

### Added

-   Browser build contains toolbar styles

### Fixed

-   Browser build now contains `@wordpress/keyboard-shortcuts` module
-   Prevent duplicate collaboration format registration
-   Fix multi-line collaboration carets

## [2.5.0] - 2021-10-06

### Added

-   `selectorTool` setting to show the selector tool

### Breaking changes

-   Toolbar has changed to match core Gutenberg and will now be two lines in height (when using 'top toolbar' mode)

## [2.4.3] - 2021-09-30

### Fixed

-   Use `ShortcutProvider` to prevent crash with Gutenberg 11.6.0

### [2.4.2] - 2021-09-27

### Changed

-   Tweaks to collaborative editing UI.

## [2.4.1] - 2021-09-09

### Fixed

-   Further fix to blur event in block inspector to catch clicks that fall in the popover itself

## [2.4.0] - 2021-09-08

### Breaking changes

-   Change collaborative editing features to be enabled via a top-level named export [<CollaborativeEditing>](https://github.com/Automattic/isolated-block-editor/tree/trunk/src/components/collaborative-editing) to avoid unnecessary bundle bloat.

### Added

-   Show outline around blocks that are currently being modified by peers when collaborative editing.
-   Presence avatars for collaborative editing peers.
-   Update peer caret position indicators more frequently while collaborative editing.

### Fixed

-   Fix handling of initial content from `onLoad` when collaborative editing is enabled
-   Improved reliability of collaborative editing when multiple peers are typing simultaneously
-   Fix blur event when clicking in some UI components in the block inspector

### Changed

-   Updated all @wordpress packages to latest

## [2.3.0] - 2021-07-29

### Added

-   Support for real-time collaborative editing (experimental)

## [2.2.0]

Skipped due to mishandling of release.

## [2.1.0] - 2021-07-29

### Added

-   `ToolbarSlot` added for toolbar customisation
-   Add `getEditCount` selector to help detect changes

### Changed

-   Updated all @wordpress packages to latest

## [2.0.0] - 2021-07-20

### Changed

-   Package renamed to @automattic/isolated-block-editor
