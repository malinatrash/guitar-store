import { Product } from '@/models/product'
import axios from 'axios'
import { domain } from './domain'
import { format } from './format'

interface CartsResponse {
	products: Product[]
	status_code: number
}

export const fetchCart = async (user_id: number) => {
	try {
		const response = await axios.get<CartsResponse>(
			`${domain}carts?&id=${user_id}&${format}`
		)
		console.log(user_id)

		console.log(response.data)

		if (response.status === 200 || response.status === 201) {
			console.log('User data:', response.data)

			return response.data.products
		} else {
			console.error('User not found:', response.data)
			return null
		}
	} catch (error) {
		return null
	}
}
