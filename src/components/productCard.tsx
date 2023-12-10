import { useShoppingCart } from '@/hooks/useShoppingCart'
import { useWishList } from '@/hooks/useWishList'
import { Product } from '@/models/product'
import { getProductCategory } from '@/scripts/getProductCategory'
import { setProduct } from '@/store/slices/currentProduct'
import '@/styles/index.css'
import { Label } from '@radix-ui/react-dropdown-menu'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

interface Props {
	product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const wishList = useWishList(product)
	const cart = useShoppingCart(product)
	const [quantity, setQuantity] = useState(0)

	const price = (price: number): string => {
		if (price > 0) {
			return `${price}₽`
		} else if (price === 0) {
			return 'Бесплатно'
		} else {
			return 'Цена по запросу'
		}
	}

	const showProduct = () => {
		dispatch(setProduct(product))
		navigate('/product')
	}

	return (
		<div className='transition-all duration-200 ease-linear hover:animate-pulse border-[2px] bg-white p-2 h-[28rem] min-w-[14rem] w-[23%] flex flex-col shadow-lg hover:shadow-2xl rounded-xl justify-between mobile:h-[32rem] mobile:w-[97%]'>
			<img
				onClick={showProduct}
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
				{cart.isInCart ? (
					<Button
						onClick={() => cart.addToCart(1)}
						variant={!cart.isInCart ? 'outline' : 'destructive'}
					>
						{!cart.isInCart ? 'Добавить в корзину' : 'Удалить из корзины'}
					</Button>
				) : (
					<Popover>
						<PopoverTrigger asChild>
							<Button variant={!cart.isInCart ? 'outline' : 'destructive'}>
								{!cart.isInCart ? 'Добавить в корзину' : 'Удалить из корзины'}
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-80'>
							<div className='grid gap-4 p-1'>
								<div className='space-y-2'>
									<h4 className='font-medium leading-none'>Количество</h4>
									<p className='text-sm text-muted-foreground'>
										Укажите количество товаров
									</p>
								</div>
								<div className='grid grid-cols-3 items-center gap-4'>
									<Label>Количество</Label>
									<Input
										id='maxWidth'
										type='number'
										defaultValue='300px'
										className='col-span-2 h-8'
										onChange={e =>
											setQuantity(Math.abs(Number(e.target.value)))
										}
										value={quantity}
									/>
									<Button
										onClick={() => cart.addToCart(quantity)}
										className='col-span-3'
									>
										Добавить
									</Button>
								</div>
							</div>
						</PopoverContent>
					</Popover>
				)}

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
