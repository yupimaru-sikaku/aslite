import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'src/types';

export const initialState: Product[] = [];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export const productReducer = productSlice.reducer;
