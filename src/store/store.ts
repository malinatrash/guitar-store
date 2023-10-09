import { configureStore } from '@reduxjs/toolkit';
import authModalSlice from './slices/authModalSlice';
import currentProduct from './slices/currentProduct';
import { productFilter } from './slices/productFilterSlice';
import { sortProductListSlice } from './slices/productListSort';
import userSlice from './slices/userSlice';

export const store = configureStore({
	reducer: {
		authModal: authModalSlice,
		user: userSlice,
		productFilter: productFilter.reducer,
		sortProductList: sortProductListSlice.reducer,
		currentProduct: currentProduct,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
