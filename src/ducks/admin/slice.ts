import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ログイン状態を管理
export type AdminState = {
  access_token: string;
};

export const initialState: AdminState = {
  access_token: '',
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    isSession(state) {
      state.access_token;
    },
    setSession: (state, action: PayloadAction<AdminState>) => ({
      ...state,
      access_token: action.payload.access_token,
    }),
    resetSession: (state) => {
      state.access_token = '';
    },
  },
});

export const { isSession, setSession, resetSession } = adminSlice.actions;
export const adminReducer = adminSlice.reducer;
