import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FetchProducts as FetchProductsAPI } from '../api/ProductsApi';

export const FetchProducts = createAsyncThunk('products/FetchProducts', async ({ limit, skip }) => {
  const data = await FetchProductsAPI(limit, skip);
  return data.products;
});

const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    limit: 10,
    skip: 0,
  },
  reducers: {
    incrementSkip(state) {
      state.skip += state.limit;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(FetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const uniqueItems = action.payload.map((item, index) => {
            const idExists = state.items.some(existingItem => existingItem.id === item.id);
            return idExists ? { ...item, id: `${item.id}-${index}` } : item;
        });
        state.items = state.items.concat(uniqueItems);
      })
      .addCase(FetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { incrementSkip } = ProductsSlice.actions;
export default ProductsSlice.reducer;
