import { Product } from '@/models/product';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useFilteredProductList = (productList: Product[]) => {
	const filters = useSelector((state: RootState) => state.productFilter);
	const [filtered, setFiltered] = useState<Product[]>([]);
	const sort = useSelector((state: RootState) => state.sortProductList);

	useEffect(() => {
		sort.toIncrease
			? setFiltered([...filtered].sort((a, b) => a.price - b.price))
			: setFiltered([...filtered].sort((a, b) => b.price - a.price));
	}, [sort.toDecrease, sort.toIncrease, filters.vendors]);

	useEffect(() => {
		if (filters.vendors.length === 0) {
			setFiltered([...productList]);
		} else {
			const selectedVendorIds = filters.vendors.map(vendor => vendor.id);
			const filteredProducts = productList.filter(product =>
				selectedVendorIds.includes(product.vendor)
			);
			setFiltered(filteredProducts);
		}
	}, [productList, filters.vendors]);

	useEffect(() => {
		if (filters.onlyInStock) {
			setFiltered(
				productList.filter(
					e =>
						e.in_stock === true &&
						e.price >= filters.priceFrom / 1000 &&
						e.price <= filters.priceTo
				)
			);
		} else {
			setFiltered(
				productList.filter(
					e => e.price >= filters.priceFrom && e.price <= filters.priceTo
				)
			);
		}
	}, [productList, filters.priceFrom, filters.priceTo]);

	return filtered;
};
