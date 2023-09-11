import { Product } from '@/models/product'
import { getProductCategory } from '@/scripts/getProductCategory'
import '@/styles/index.css'
import { FC } from 'react'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'

interface Props {
	product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
	const { toast } = useToast()
	return (
		<div className='hover:animate-pulse dark:opacity-90 bg-white p-2 h-[28rem] w-64 flex flex-col border-[2px] border-black/70 rounded-xl justify-between mobile:h-[32rem] mobile:w-11/12'>
			<img
				className='h-60 object-scale-down mobile:h-80'
				src={product.image_url}
				alt={product.product_name}
			/>
			<div className='px-1 flex flex-col gap-[2px]'>
				<span className='pt-2 text-black/50'>
					{getProductCategory(product.category_id_id)}
				</span>
				<span className='text-black'>{product.product_name}</span>
				<b className='dark:text-black text-xl'>{product.price}₽</b>
			</div>
			<Button
				onClick={() => {
					toast({
						title: 'Товар добавлен в корзину',
						description: product.product_name,
					})
				}}
				variant={'default'}
			>
				Купить
			</Button>
			<Button
				onClick={() => {
					toast({
						title: 'Товар добавлен в избранное',
						description: product.product_name,
					})
				}}
				variant={'outline'}
			>
				В избранное
			</Button>
		</div>
	)
}

export default ProductCard
