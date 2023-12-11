import { fetchShoppingCart } from '@/api/fetchShoppingCart'
import { fetchWishList } from '@/api/fetchWishlist'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { useRedirect } from '@/hooks/useRedirect'
import AuthModal from '@/modal/AuthModal'
import ModalProvider from '@/modal/ModalProvider'
import { useCreateOrdersMutation } from '@/store/api/orders.api'
import {
	setupCart,
	setupOrders,
	setupUser,
	setupWishlist,
} from '@/store/slices/userSlice'
import { RootState } from '@/store/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export const Cart = () => {
	const user = useSelector((state: RootState) => state.user)
	const [createOrdersMutation, { data }] = useCreateOrdersMutation()
	const navigate = useNavigate()

	const dispatch = useDispatch()

	const setUser = async () => {
		dispatch(setupUser(user))
		dispatch(setupOrders(data))
		const wishlist = await fetchWishList(user?.user_id ?? -1)
		dispatch(setupWishlist(wishlist))
		const cart = await fetchShoppingCart(user?.user_id ?? -1)
		dispatch(setupCart(cart))
		dispatch(setupOrders(data))
	}

	useEffect(() => {
		setUser()
	}, [])

	const createOrder = () => {
		const filteredCart = user.cart?.filter(e => e.quantity !== undefined) ?? []

		createOrdersMutation({
			user_id: user.user_id ?? 0,
			products: filteredCart.map(e => ({
				product_id: e.product_id,
				quantity: e.quantity || 0,
			})),
		})
	}

	useEffect(() => {
		if (data) {
			console.log('Данные о заказе:', data)
			navigate('/orders')
		}
	}, [data])

	useRedirect()
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<Header />
			<div className='container mx-auto p-10 bg-primary rounded-2xl my-12'>
				{user.cart?.map(e => (
					<div key={e.product_id} className='flex gap-4 mb-8'>
						<div className='w-full bg-white max-w-[250px] flex justify-center rounded-xl p-4'>
							<img
								className='object-contain max-w-[220px] h-64'
								src={e.image_url}
							/>
						</div>
						<div className='text-secondary flex gap-4 flex-nowrap whitespace-nowrap m-8 flex-col'>
							<span className='font-bold text-4xl'>{e.product_name}</span>
							<span className='font-normal text-3xl'>{e.price}₽</span>
							<span className='font-normal text-3xl'>
								Количество: {e.quantity} шт.
							</span>
							<span className='font-thin text-2xl'>
								{e.in_stock ? 'В наличии' : 'Нет в наличии'}
							</span>
						</div>
					</div>
				))}
				<div className='flex justify-between'>
					<span className='font-extralight text-secondary text-4xl'>
						Итого:{' '}
						{user.cart?.reduce(
							(total, item) => total + item.quantity! * item.price,
							0
						) ?? 0}
						₽
					</span>
					<Button onClick={createOrder} variant={'secondary'}>
						Оформить заказ
					</Button>
				</div>
			</div>
			<Toaster />
			<ModalProvider childern={<AuthModal />} />
		</ThemeProvider>
	)
}
