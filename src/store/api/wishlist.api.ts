import { Product } from '@/models/product'
import { api } from './api'

interface Response {
	products: Product[]
	code: number
}

const wishlistApi = api.injectEndpoints({
	endpoints: builder => ({
		getwishlist: builder.query<Response, number>({
			query: (id: number) => {
				return `/wishlist?&id=${id}`
			},
		}),
	}),
})

export const { useGetwishlistQuery } = wishlistApi
export default wishlistApi
