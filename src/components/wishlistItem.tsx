import { useWishList } from '@/hooks/useWishList'
import { Product } from '@/models/product'
import { FC } from 'react'
import { Button } from './ui/button'

interface IWishlistItem {
	item: Product
}

const WishlistItem: FC<IWishlistItem> = ({ item }) => {
	const wishList = useWishList(item)
	return (
		<div className='w-full flex h-96 bg-secondary p-8 rounded-xl justify-between'>
			<div className='flex'>
				<img
					className='bg-white py-4 px-8 max-w-[360px] object-contain rounded-lg'
					src={item.image_url}
				/>
				<div className='flex flex-col gap-2 p-4 pl-8'>
					<span className='text-4xl font-semibold'>
						{item.product_name} {item.year_of_production}
					</span>

					<span className='text-2xl font-medium'>
						Страна производства: {item.country_of_origin}
					</span>
					<span className='text-2xl font-medium'>
						{item.in_stock ? 'В наличии' : 'Нет в наличии'}
					</span>
					<span className='text-xl'>
						{item.price == 0 ? 'Договорная цена' : item.price + '₽'}
					</span>
				</div>
			</div>
			<div className='flex flex-col gap-2 justify-end'>
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

export default WishlistItem
