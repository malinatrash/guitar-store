import { User } from '@/models/user'
import { createSlice } from '@reduxjs/toolkit'

export interface UserState extends User {}

const initialState: UserState = {
	user_id: -1,
	role: 'guest',
	firstname: '',
	lastname: '',
	email: '',
	cart: undefined,
	favorites: undefined,
}

export const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		setupUser: (state, action) => {
			const user: User = action.payload
			state.user_id = user.user_id
			state.role = user.role
			state.firstname = user.firstname
			state.lastname = user.lastname
			state.email = user.email
			state.cart = user.cart
			state.favorites = user.favorites
		},
		setupWishlist: (state, actions) => {
			state.favorites = actions.payload
		},
		setupCart: (state, actions) => {
			state.cart = actions.payload
		},
	},
})

export const { setupUser, setupWishlist, setupCart } = userSlice.actions

export default userSlice.reducer
