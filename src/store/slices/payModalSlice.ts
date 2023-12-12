import { Order } from '@/models/user'
import { createSlice } from '@reduxjs/toolkit'

export interface PayModalState {
	isShown: boolean
	order?: Order
}

const initialState: PayModalState = {
	isShown: false,
	order: undefined,
}

export const payModalSlice = createSlice({
	name: 'Pay',
	initialState,
	reducers: {
		show: state => {
			state.isShown = true
		},
		hide: state => {
			state.isShown = false
		},
		setOrder: (state, action) => {
			state.order = action.payload
		},
	},
})

export const { show, hide, setOrder } = payModalSlice.actions

export default payModalSlice.reducer
