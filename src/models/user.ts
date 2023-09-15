import { Product } from './product'

export interface User {
	user_id?: number
	role: 'admin' | 'guest' | 'clinet'
	firstname: string
	lastname: string
	email?: string
	cart?: Product[]
	favorites?: Product[]
}
