import { Product } from './product'

export interface OrderProduct {
	product: Product
	quantity: number
}

export interface Vendor {
	id: number
	name: string
}

export interface Order {
	order_id: number
	order_date: string
	order_status: string
	total_price: number
	order_products: OrderProduct[]
}

export interface User {
	user_id?: number
	role: 'admin' | 'guest' | 'clinet'
	firstname: string
	lastname: string
	email?: string
	cart?: Product[]
	favorites?: Product[]
	orders?: Order[]
}
