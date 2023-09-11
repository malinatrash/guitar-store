import { Product } from '@/models/product'
import { FC } from 'react'
import ProductCard from './productCard'

interface IProductList {
	productList: Product[]
}

const ProductList: FC<IProductList> = ({ productList }) => {
	return (
		<div className='flex gap-5 p-6 mobile:p-2 mobile:gap-2 wrap flex-wrap mobile:justify-center'>
			{productList.map(product => (
				<ProductCard key={product.product_id} product={product} />
			))}
		</div>
	)
}

export default ProductList
