import { createSlice } from '@reduxjs/toolkit'

export interface SortProductListState {
	toIncrease: boolean
	toDecrease: boolean
}

const initialState: SortProductListState = {
	toIncrease: false,
	toDecrease: false,
}

export const sortProductListSlice = createSlice({
	name: 'sortProductList',
	initialState,
	reducers: {
		setToIncrease: (state, action) => {
			state.toIncrease = action.payload
		},
		setToDecrease: (state, action) => {
			state.toDecrease = action.payload
		},
	},
})

export const { setToIncrease, setToDecrease } = sortProductListSlice.actions

export default sortProductListSlice.reducer
