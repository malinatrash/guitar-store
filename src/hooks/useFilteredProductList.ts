import { Product } from '@/models/product';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useFilteredProductList = (productList: Product[]) => {
	const filters = useSelector((state: RootState) => state.productFilter);
	const [filtered, setFiltered] = useState<Product[]>([]);
	const sort = useSelector((state: RootState) => state.sortProductList);

	const filterByVendor = async () => {
		if (filters.vendors.length === 0) {
			setFiltered([...productList]);
		} else {
			const selectedVendorIds = filters.vendors.map(vendor => vendor.id);
			const filteredProducts = productList.filter(product => {
				return selectedVendorIds.includes(product.vendor);
			});
			console.log(filtered);
			console.log(filteredProducts);
			await setFiltered(filteredProducts);
			console.log(filtered);
		}
	};

	useEffect(() => {
		sort.toIncrease
			? setFiltered([...filtered].sort((a, b) => a.price - b.price))
			: setFiltered([...filtered].sort((a, b) => b.price - a.price));
	}, [sort.toDecrease, sort.toIncrease]);

	useEffect(() => {
		filterByVendor();
	}, [filters.vendors]);

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
	}, [productList, filters]);

	return filtered;
};
