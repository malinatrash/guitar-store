import { useFilteredProductList } from '@/hooks/useFilteredProductList';
import { Product } from '@/models/product';
import { FC } from 'react';
import ProductCard from './productCard';

interface IProductList {
	productList: Product[];
}

const ProductList: FC<IProductList> = ({ productList }) => {
	const filtered = useFilteredProductList(productList);
	return (
		<div className='flex gap-5 px-0 mobile:p-2 wrap flex-wrap justify-start mobile:justify-center'>
			{filtered.map(product => (
				<ProductCard key={product.product_id} product={product} />
			))}
		</div>
	);
};

export default ProductList;
