import { Product } from '@/models/product'
import { FC, useEffect, useState } from 'react'
import ProductCard from './productCard'
import { useSelector } from 'react-redux'
import { Root } from '@radix-ui/react-toast'
import { RootState } from '@/store/store'
import { useFilteredProductList } from '@/hooks/useFilteredProductList'

interface IProductList {
	productList: Product[]
}

const ProductList: FC<IProductList> = ({ productList }) => {
	const filtered = useFilteredProductList(productList)
	return (
		<div className='flex gap-5 px-0 mobile:p-2 wrap flex-wrap justify-start mobile:justify-center'>
			{filtered.map(product => (
				<ProductCard key={product.product_id} product={product} />
			))}
		</div>
	)
}

export default ProductList
