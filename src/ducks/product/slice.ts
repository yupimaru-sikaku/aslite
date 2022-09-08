import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'src/types';

export const initialState: Product[] = [];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const newProduct = {
        id: action.payload.id,
        identification_number: action.payload.identification_number,
        product_name: action.payload.product_name,
        description: action.payload.description,
        genre: action.payload.genre,
        image_url: action.payload.image_url,
        is_display: action.payload.is_display,
        created_at: action.payload.created_at,
        updated_at: action.payload.updated_at,
      };
      const newState = [...state, newProduct];
      return newState;
    },
    // updateProduct: (state, action: PayloadAction<Product>) => {
    //   const newState = state.map((product) => {
    //     if (product.id === action.payload.id) {
    //       return {
    //         identification_number: action.payload.identification_number,
    //         product_name: action.payload.identification_number,
    //         description: action.payload.description,
    //         genre: action.payload.genre,
    //         image_url: action.payload.image_url,
    //         is_display: action.payload.identification_number,
    //         created_at: action.payload.created_at,
    //         updated_at: action.payload.updated_at,
    //       };
    //     }
    //   });
    //   return newState;
    // },
    deleteProduct: (state, action: PayloadAction<Product>) => {
      const newState = state.filter((product) => {
        if (product.id === action.payload.id) {
          return product;
        }
      });
      // return newState;
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export const productReducer = productSlice.reducer;
