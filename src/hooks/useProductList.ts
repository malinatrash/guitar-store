import { fetchProductList } from '@/api/fetchProductList'
import { Product } from '@/models/product'
import { useEffect, useState } from 'react'

export const useProductList = () => {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		async function fetchProductData() {
			try {
				const data = await fetchProductList()
				setProducts(data.data)
			} catch (error) {
				console.error('Error fetching products:', error)
			}
		}

		fetchProductData()
	}, [])

	return products
}
