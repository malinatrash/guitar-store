import { Product } from '@/models/product'
import '@/styles/index.css'
import { FC } from 'react'
import { Button } from './ui/button'

interface Props {
	product: Product
	toast: any
}

const ProductCard: FC<Props> = ({ product, toast }) => {
	return (
		<div className='bg-white h-[30rem] mobile:h-[26rem] mobile:w-36 p-2 w-64 flex flex-col border-[3px] border-black rounded-2xl shadow-sm justify-between'>
			<img
				className='h-60 object-scale-down mobile:h-32'
				src={product.picture}
				alt={product.picture}
			/>
			<span className='opacity-60 pt-2'>{product.type}</span>
			<div className='h-full pt-2'>
				<span>{product.title}</span>
			</div>
			<div className='flex flex-col gap-1 relative pb-0'>
				<b>{product.price}</b>
				<Button
					onClick={() => {
						toast({
							title: 'Товар успешно добавлен в корзину',
							description: product.title,
						})
					}}
				>
					Купить
				</Button>
				<Button
					onClick={() => {
						toast({
							title: 'Товар добавлен в избранное',
							description: product.title,
						})
					}}
					variant={'outline'}
				>
					В избранное
				</Button>
			</div>
		</div>
	)
}

export default ProductCard
