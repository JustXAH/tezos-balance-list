import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../components/ListContainer/slice/index';

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
