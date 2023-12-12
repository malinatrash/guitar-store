import { Order, User } from '@/models/user'
import { createSlice } from '@reduxjs/toolkit'

export interface UserState extends User {
	orders: Order[]
	session_id: string
}

const getSessionFromLocalStorage = (): string => {
	const session_id = localStorage.getItem('session_id')
	return session_id ?? ''
}

const initialState: UserState = {
	user_id: -1,
	role: 'guest',
	firstname: '',
	lastname: '',
	email: '',
	cart: undefined,
	favorites: undefined,
	session_id: getSessionFromLocalStorage(),
	orders: [],
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
		setupSession: (state, action) => {
			state.session_id = action.payload
			localStorage.setItem('session_id', JSON.stringify(action.payload))
		},
		signOut: state => {
			state.user_id = -1
			state.role = 'guest'
			state.firstname = ''
			state.lastname = ''
			state.email = ''
			state.cart = []
			state.favorites = []
			state.session_id = ''
			localStorage.setItem('session_id', JSON.stringify(''))
		},
		setupWishlist: (state, actions) => {
			state.favorites = actions.payload
		},
		setupCart: (state, actions) => {
			state.cart = actions.payload
		},
		setupOrders: (state, actions) => {
			state.orders = actions.payload
		},
	},
})

export const {
	setupUser,
	setupWishlist,
	setupCart,
	signOut,
	setupSession,
	setupOrders,
} = userSlice.actions

export default userSlice.reducer
