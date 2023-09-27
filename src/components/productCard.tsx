import { useWishList } from '@/hooks/useWishList'
import { Product } from '@/models/product'
import { getProductCategory } from '@/scripts/getProductCategory'
import '@/styles/index.css'
import { FC } from 'react'
import { Button } from './ui/button'

interface Props {
	product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
	const wishList = useWishList(product)
	const price = (price: number): string => {
		if (price > 0) {
			return `${price}₽`
		} else if (price === 0) {
			return 'Бесплатно'
		} else {
			return 'Цена по запросу'
		}
	}

	return (
		<div className='transition-all duration-200 ease-linear hover:animate-pulse border-[2px] bg-white p-2 h-[28rem] min-w-[14rem] w-[23%] flex flex-col shadow-lg hover:shadow-2xl rounded-xl justify-between mobile:h-[32rem] mobile:w-[97%]'>
			<img
				className='box-border h-[50%] w-[100%] object-scale-down mobile:h-80'
				src={product.image_url}
				alt={product.product_name}
			/>
			<div className='px-1 flex flex-col h-[6rem] justify-start'>
				<span className='text-black/50'>
					{getProductCategory(product.category_id_id)}
				</span>
				<span className='text-black blackbreak-keep'>
					{product.product_name}
				</span>
				<b className='dark:text-black text-xl'>{price(product.price)}</b>
			</div>
			<div className='flex flex-col gap-2'>
				<Button
					onClick={() => {
						// 	toast({
						// 		title: 'Товар добавлен в корзину',
						// 		description: product.product_name,
						// 	})
					}}
					variant={'default'}
				>
					В корзину
				</Button>
				<Button
					onClick={wishList.addToWishlist}
					variant={!wishList.isFavorite ? 'outline' : 'destructive'}
				>
					{!wishList.isFavorite
						? 'Добавить избранное'
						: 'Удалить из избранного'}
				</Button>
			</div>
		</div>
	)
}

export default ProductCard
