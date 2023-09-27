import { Product } from '@/models/product'
import { RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const useFilteredProductList = (productList: Product[]) => {
	const filters = useSelector((state: RootState) => state.productFilter)
	const [filtered, setfiltered] = useState<Product[]>([])
	const sort = useSelector((state: RootState) => state.sortProductList)

	useEffect(() => {
		if (sort.toIncrease) {
			setfiltered(filtered.sort((a, b) => a.price - b.price))
		} else if (sort.toDecrease) {
			setfiltered(filtered.sort((a, b) => b.price - a.price))
		}
	}, [sort.toDecrease, sort.toIncrease])

	useEffect(() => {
		if (filters.onlyInStock) {
			setfiltered(
				productList.filter(
					e =>
						e.in_stock === true &&
						e.price >= filters.priceFrom / 1000 &&
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
