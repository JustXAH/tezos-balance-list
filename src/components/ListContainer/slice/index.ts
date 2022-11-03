import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import {getListFromLocalStorage, setListToLocalStorage} from "./listApi";

export interface ListItem {
  publicKeyHash: string;
  balance: string;
}
export interface ListState {
  list: ListItem[];
}

const initialState: ListState = {
  list: getListFromLocalStorage(),
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ListItem>) => {
      state.list.push(action.payload);
      setListToLocalStorage(state.list);
    },
    removeItemByIndex: (state, action: PayloadAction<number>) => {
      state.list.splice(action.payload, 1);
      setListToLocalStorage(state.list);
    },
  },
});

export const { addItem, removeItemByIndex } = listSlice.actions;

export const selectList = (state: RootState) => state.list.list;

export default listSlice.reducer;
