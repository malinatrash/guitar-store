import { Product } from '@/models/product'
import axios from 'axios'
import { domain } from './domain'
import { format } from './format'

type FetchProductListResponse = {
	data: Product[]
}

export function fetchProductList() {
	try {
		const response = axios.get<FetchProductListResponse>(
			`${domain}products${format}`
		)
		return response
	} catch (error) {
		console.error('Error fetching products:', error)
		throw error
	}
}
