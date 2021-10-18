import {
  ADD_A_ITEM,
  ADD_A_LIST,
  DELETE_A_ITEM,
  REMOVE_A_LIST,
  RENAME_LIST,
} from "./types";

export const actAddAList = (task) => ({
  type: ADD_A_LIST,
  payload: task,
});
export const actRemoveAList = (idx) => ({
  type: REMOVE_A_LIST,
  payload: idx,
});

export const actAddAItem = (idx, taskItem) => ({
  type: ADD_A_ITEM,
  payload: { idx, taskItem },
});

export const actDeleteAItem = (idxList, idxItem) => ({
  type: DELETE_A_ITEM,
  payload: { idxList, idxItem },
});

export const actRenameList = (idxList, taskName) => ({
  type: RENAME_LIST,
  payload: { idxList, taskName },
});
