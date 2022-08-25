import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session } from '@supabase/supabase-js';

// ログイン状態を管理
export type AdminState = {
  session: Session | null;
};

export const initialState: AdminState = {
  session: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    getInfo(state) {
      state.session;
    },
    login: (state, action: PayloadAction<AdminState>) => ({
      ...state,
      session: action.payload.session,
    }),
  },
});

export const { getInfo, login } = adminSlice.actions;
export const adminReducer = adminSlice.reducer;
