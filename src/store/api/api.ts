import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL =
	import.meta.env.MODE === 'mock'
		? 'http://127.0.0.1:8000/api'
		: 'http://127.0.0.1:8000/api'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: builder => ({
		mock: builder.query<null, null>({
			query: () => '/',
		}),
	}),
})
