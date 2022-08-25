import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { adminReducer } from '../user/slice';
import { useDispatch } from 'react-redux';

const RootReducer = combineReducers({
  admin: adminReducer,
});

export const store = configureStore({
  reducer: RootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof RootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
