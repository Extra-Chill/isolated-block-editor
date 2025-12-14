/**
 * WordPress dependencies
 */
import isShallowEqual from '@wordpress/is-shallow-equal';
const DEFAULT_STATE = {
  editCount: 0,
  selection: null,
  blocks: null
};
function getSelectedBlock(blocks, selection) {
  return blocks.find(block => block.clientId === selection.clientId);
}

// Gutenberg triggers a UPDATE_BLOCKS_WITH_UNDO one second after typing. Try and group this with the previous edits
function isNewUndo(action, state) {
  const {
    type,
    selection
  } = action;

  // Don't create a new undo when flagged as no undo
  if (type === 'UPDATE_BLOCKS_WITHOUT_UNDO') {
    return false;
  }
  if (!selection) {
    return true;
  }

  // Not new if selection is same
  if (isShallowEqual(selection, state.selection)) {
    const previousBlock = getSelectedBlock(state.blocks, selection.selectionStart);
    const currentBlock = getSelectedBlock(action.blocks, selection.selectionStart);

    // Check if any attributes have changed in the selected block
    if (previousBlock && currentBlock && isShallowEqual(previousBlock.attributes, currentBlock.attributes)) {
      // Nothing has changed - not a new undo level
      return false;
    }
  }

  // Yes, a new undo level
  return true;
}
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_BLOCKS_WITHOUT_UNDO':
    case 'UPDATE_BLOCKS_WITH_UNDO':
      return {
        ...state,
        editCount: isNewUndo(action, state) ? state.editCount + 1 : state.editCount,
        blocks: action.blocks,
        selection: action.selection
      };
  }
  return state;
};
const DEFAULT_HISTORY_STATE = {
  past: [],
  present: DEFAULT_STATE,
  future: []
};
const isHistory = state => {
  return state && Array.isArray(state.past) && Array.isArray(state.future) && state.present !== undefined;
};
const blocksHistoryReducer = (state = DEFAULT_HISTORY_STATE, action) => {
  const historyState = isHistory(state) ? state : DEFAULT_HISTORY_STATE;
  switch (action.type) {
    case 'UNDO':
      {
        if (historyState.past.length === 0) {
          return historyState;
        }
        const previous = historyState.past[historyState.past.length - 1];
        return {
          past: historyState.past.slice(0, -1),
          present: previous,
          future: [historyState.present, ...historyState.future]
        };
      }
    case 'REDO':
      {
        if (historyState.future.length === 0) {
          return historyState;
        }
        const next = historyState.future[0];
        return {
          past: [...historyState.past, historyState.present],
          present: next,
          future: historyState.future.slice(1)
        };
      }
    case 'UPDATE_BLOCKS_WITH_UNDO':
      {
        const nextPresent = reducer(historyState.present, action);
        const shouldCreateNewUndoLevel = historyState.present.editCount !== nextPresent.editCount;
        if (!shouldCreateNewUndoLevel) {
          return {
            ...historyState,
            present: nextPresent
          };
        }
        return {
          past: [...historyState.past, historyState.present],
          present: nextPresent,
          future: []
        };
      }
    case 'UPDATE_BLOCKS_WITHOUT_UNDO':
      {
        const nextPresent = reducer(historyState.present, action);
        return {
          ...historyState,
          present: nextPresent
        };
      }
  }
  return historyState;
};
export default blocksHistoryReducer;
//# sourceMappingURL=reducer.js.map