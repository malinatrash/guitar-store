import { Product } from '@/models/product'
import { RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const useFilteredProductList = (productList: Product[]) => {
	const filters = useSelector((state: RootState) => state.productFilter)
	const [filtered, setfiltered] = useState<Product[]>([])
	useEffect(() => {
		if (filters.onlyInStock) {
			setfiltered(
				productList.filter(
					e =>
						e.in_stock === true &&
						e.price >= filters.priceFrom &&
						e.price <= filters.priceTo
				)
			)
		} else {
			setfiltered(
				productList.filter(
					e => e.price >= filters.priceFrom && e.price <= filters.priceTo
				)
			)
		}
	}, [productList, filters])

	return filtered
}
