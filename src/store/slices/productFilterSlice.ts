import { createSlice } from '@reduxjs/toolkit';

export interface ProductFilterState {
	onlyInStock: boolean;
	vendors: Vendor[];
	countryOfOrigin: string[];
	priceFrom: number;
	priceTo: number;
}

const initialState: ProductFilterState = {
	onlyInStock: false,
	vendors: [],
	countryOfOrigin: [],
	priceFrom: 0,
	priceTo: 100000,
};

export const productFilter = createSlice({
	name: 'Filter',
	initialState,
	reducers: {
		setupPriceFrom: (state, actions) => {
			state.priceFrom = actions.payload;
		},
		setupPriceTo: (state, actions) => {
			state.priceTo = actions.payload;
		},
		setOnlyInStock: (state, actions) => {
			state.onlyInStock = actions.payload;
		},
		addVendor: (state, actions) => {
			state.vendors.push(actions.payload);
		},
		deleteVendor: (state, action) => {
			const idToDelete = action.payload;
			state.vendors = [
				...state.vendors.filter(vendor => vendor.id !== idToDelete),
			];
		},
		setCountry: (state, actions) => {
			state.countryOfOrigin = [];
			state.countryOfOrigin = [...actions.payload];
		},
	},
});

export const {
	setupPriceFrom,
	setupPriceTo,
	setOnlyInStock,
	addVendor,
	deleteVendor,
	setCountry,
} = productFilter.actions;

export default productFilter.reducer;
