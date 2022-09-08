import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { useDispatch } from 'react-redux';
import { load, save } from 'redux-localstorage-simple';
import { adminReducer } from 'src/ducks/admin/slice';
import { productReducer } from 'src/ducks/product/slice';
import { setupListeners } from '@rtk-incubator/rtk-query/dist';
import { productApi } from 'src/ducks/product/query';

const RootReducer = combineReducers({
  admin: adminReducer,
  product: productReducer,
});

export const store = configureStore({
  reducer: {
    RootReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  // こいつの使い方わからん
  // preloadedState: load(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productApi.middleware, save()),
});

// 追記は任意ですが、refetchOnFocus/refetchOnReconnectという機能を利用するためには下記が必要です
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof RootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
