import { useShoppingCart } from '@/hooks/useShoppingCart'
import { Product } from '@/models/product'
import { FC, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

interface Props {
	product: Product
}

const AddToCartButton: FC<Props> = ({ product }) => {
	const { addToCart, isInCart } = useShoppingCart(product)
	const [quantity, setQuantity] = useState(0)
	return (
		<>
			{isInCart ? (
				<Button
					onClick={() => addToCart(1)}
					variant={!isInCart ? 'outline' : 'destructive'}
				>
					{!isInCart ? 'Добавить в корзину' : 'Удалить из корзины'}
				</Button>
			) : (
				<Popover>
					<PopoverTrigger asChild>
						<Button variant={!isInCart ? 'outline' : 'destructive'}>
							{!isInCart ? 'Добавить в корзину' : 'Удалить из корзины'}
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
									aria-valuemin={1}
									className='col-span-2 h-8'
									onChange={e => setQuantity(Math.abs(Number(e.target.value)))}
									value={quantity}
								/>
								<Button
									onClick={() => addToCart(quantity)}
									className='col-span-3'
								>
									Добавить
								</Button>
							</div>
						</div>
					</PopoverContent>
				</Popover>
			)}
		</>
	)
}

export default AddToCartButton
