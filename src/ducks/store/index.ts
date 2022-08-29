import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { adminReducer } from '../user/slice';
import { useDispatch } from 'react-redux';
import { load, save } from 'redux-localstorage-simple';

const RootReducer = combineReducers({
  admin: adminReducer,
});

export const store = configureStore({
  reducer: RootReducer,
  preloadedState: load(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof RootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
