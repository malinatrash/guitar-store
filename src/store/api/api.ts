import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL =
	import.meta.env.MODE === 'mock'
		? 'http://1689355-cq44749.twc1.net:8000/api'
		: 'http://1689355-cq44749.twc1.net:8000/api/'

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
