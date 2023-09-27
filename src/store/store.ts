import { sortProductListSlice } from './slices/productListSort'
import { configureStore } from '@reduxjs/toolkit'
import authModalSlice from './slices/authModalSlice'
import { productFilter } from './slices/productFilterSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
	reducer: {
		authModal: authModalSlice,
		user: userSlice,
		productFilter: productFilter.reducer,
		sortProductList: sortProductListSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
