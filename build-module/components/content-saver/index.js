/**
 * WordPress dependencies
 */

import { useEffect, useRef } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { serialize } from '@wordpress/blocks';

/** @typedef {import('../../index').OnSaveBlocks} OnSaveBlocks */
/** @typedef {import('../../index').OnSaveContent} OnSaveContent */

/**
 * Content saver
 *
 * @param {Object} props - Component props
 * @param {OnSaveBlocks} [props.onSaveBlocks] - Save blocks callback
 * @param {OnSaveContent} [props.onSaveContent] - Save content callback
 */
function ContentSaver(props) {
  const {
    onSaveBlocks,
    onSaveContent
  } = props;
  const firstTime = useRef(true);

  // Debug: Log component mount
  console.log('[IBE Debug] ContentSaver mounted');
  const dispatchResult = useDispatch('isolated/editor');
  console.log('[IBE Debug] useDispatch result:', dispatchResult);
  const {
    setReady
  } = dispatchResult || {};
  const {
    blocks,
    ignoredContent
  } = useSelect(select => {
    const store = select('isolated/editor');
    console.log('[IBE Debug] useSelect - isolated/editor store:', store);
    if (!store) {
      console.error('[IBE Debug] isolated/editor store not found!');
      return {
        blocks: undefined,
        ignoredContent: []
      };
    }
    return {
      blocks: store.getBlocks?.(),
      ignoredContent: store.getIgnoredContent?.()
    };
  }, []);
  console.log('[IBE Debug] blocks:', blocks);
  function saveBlocks() {
    // Save the content in the format wanted by the user
    onSaveBlocks?.(blocks, ignoredContent);
    onSaveContent?.(serialize(blocks));
  }
  useEffect(() => {
    console.log('[IBE Debug] ContentSaver useEffect triggered, blocks:', blocks);
    if (!setReady) {
      console.error('[IBE Debug] setReady is not available!');
      return;
    }
    if (!blocks) {
      console.log('[IBE Debug] No blocks, calling setReady(true)');
      setReady(true);
      return;
    }

    // Try and avoid an initial first save if no content
    if (firstTime.current) {
      firstTime.current = false;
      console.log('[IBE Debug] First time, calling setReady(true)');
      setReady(true);

      // The editor has initial content - save it
      if (blocks && blocks.length > 1) {
        saveBlocks();
      }
    } else {
      saveBlocks();
    }
  }, [blocks]);
  return null;
}
export default ContentSaver;
//# sourceMappingURL=index.js.map