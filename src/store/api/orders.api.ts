import { Order } from '@/models/user'
import { api } from './api'

interface ProductItem {
	product_id: number
	quantity: number
}

interface PostBody {
	user_id: number
	products: ProductItem[]
}

const ordersApi = api.injectEndpoints({
	endpoints: builder => ({
		getOrders: builder.query<Order[], number>({
			query: (id: number) => {
				return `/orders?user_id=${id}`
			},
		}),
		createOrders: builder.mutation({
			query: (ordersData: PostBody) => ({
				body: ordersData,
				url: '/orders',
				method: 'POST',
			}),
		}),
	}),
})

export const { useGetOrdersQuery, useCreateOrdersMutation } = ordersApi
export default ordersApi
