import { Product } from './product'

export interface User {
	role: 'admin' | 'guest' | 'clinet'
	name: string
	email: string
	cart: Product[]
	favorites: Product[]
}
