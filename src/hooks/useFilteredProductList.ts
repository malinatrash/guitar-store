import { Product } from '@/models/product'
import { RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const useFilteredProductList = (productList: Product[]) => {
	const filters = useSelector((state: RootState) => state.productFilter)
	const [filtered, setFiltered] = useState<Product[]>([])
	const sort = useSelector((state: RootState) => state.sortProductList)

	useEffect(() => {
		if (sort.toIncrease) {
			setFiltered([...filtered].sort((a, b) => a.price - b.price))
		} else if (sort.toDecrease) {
			setFiltered([...filtered].sort((a, b) => b.price - a.price))
		}
	}, [sort.toDecrease, sort.toIncrease, filtered])

	useEffect(() => {
		console.log(filters.vendors.length)
		productList.forEach(e => {
			console.log(e.vendor.name)
		})
		if (filters.vendors.length > 0) {
			setFiltered(
				filtered.filter(e => filters.vendors.some(v => v.id === e.vendor.id))
			)
		} else {
			setFiltered(productList)
		}
	}, [filters.vendors, productList])

	useEffect(() => {
		if (filters.onlyInStock) {
			setFiltered(
				productList.filter(
					e =>
						e.in_stock === true &&
						e.price >= filters.priceFrom / 1000 &&
						e.price <= filters.priceTo
				)
			)
		} else {
			setFiltered(
				productList.filter(
					e => e.price >= filters.priceFrom && e.price <= filters.priceTo
				)
			)
		}
	}, [productList, filters])

	return filtered
}
