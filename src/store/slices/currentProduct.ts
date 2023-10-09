import { Product } from '@/models/product';
import { createSlice } from '@reduxjs/toolkit';

export interface CurrentProductState {
	product: Product | undefined;
}

const initialState: CurrentProductState = {
	product: undefined,
};

export const currentProductSlice = createSlice({
	name: 'currentProduct',
	initialState,
	reducers: {
		setProduct: (state, actions) => {
			state.product = actions.payload;
		},
	},
});

export const { setProduct } = currentProductSlice.actions;

export default currentProductSlice.reducer;
