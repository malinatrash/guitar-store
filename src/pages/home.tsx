import Header from '@/components/header'
import ProductCard from '@/components/itemCard'
import { mockProductList } from '@/models/product'
import '@/styles/index.css'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<div>
			<Header />
			<div className='flex justify-around gap-5 p-6 wrap flex-wrap'>
				{mockProductList.map(product => (
					<ProductCard product={product} />
				))}
			</div>
		</div>
	)
}

export default Home
