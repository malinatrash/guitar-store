import { createSlice } from '@reduxjs/toolkit'

export interface ProductFilterState {
	onlyInStock: boolean
	vendors: string[]
	countryOfOrigin: string[]
	priceFrom: number
	priceTo: number
}

const initialState: ProductFilterState = {
	onlyInStock: false,
	vendors: [],
	countryOfOrigin: [],
	priceFrom: 0,
	priceTo: 100000,
}

export const productFilter = createSlice({
	name: 'Filter',
	initialState,
	reducers: {
		setupPriceFrom: (state, actions) => {
			state.priceFrom = actions.payload
		},
		setupPriceTo: (state, actions) => {
			state.priceTo = actions.payload
		},
		setOnlyInStock: (state, actions) => {
			state.onlyInStock = actions.payload
		},
		setVendors: (state, actions) => {
			state.vendors = []
			state.vendors = [...actions.payload]
		},
		setCountry: (state, actions) => {
			state.countryOfOrigin = []
			state.countryOfOrigin = [...actions.payload]
		},
	},
})

export const {
	setupPriceFrom,
	setupPriceTo,
	setOnlyInStock,
	setVendors,
	setCountry,
} = productFilter.actions

export default productFilter.reducer
