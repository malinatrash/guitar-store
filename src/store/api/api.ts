import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL =
	import.meta.env.MODE === 'mock'
		? 'https://localhost:8000/api'
		: 'https://92.51.45.202:8000/api/'

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
