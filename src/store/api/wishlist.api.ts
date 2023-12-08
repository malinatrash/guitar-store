import { Product } from '@/models/product'
import { api } from './api'

const wishlistApi = api.injectEndpoints({
	endpoints: builder => ({
		getwishlist: builder.query<Product[], number>({
			query: (id: number) => {
				return `/wishlist?&id=${id}`
			},
		}),
	}),
})

export const { useGetwishlistQuery } = wishlistApi
export default wishlistApi
