import { fetchShoppingCart } from '@/api/fetchShoppingCart'
import { fetchWishList } from '@/api/fetchWishlist'
import ProductList from '@/components/ProductList'
import Filters from '@/components/filiters'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { useProductList } from '@/hooks/useProductList'
import { useSessions } from '@/hooks/useSessions'
import AuthModal from '@/modal/AuthModal'
import ModalProvider from '@/modal/ModalProvider'
import { useGetOrdersQuery } from '@/store/api/orders.api'
import {
	setupCart,
	setupOrders,
	setupUser,
	setupWishlist,
} from '@/store/slices/userSlice'
import { RootState } from '@/store/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Home = () => {
	const productList = useProductList()

	const session = useSessions()
	const dispatch = useDispatch()
	const user = useSelector((state: RootState) => state.user)
	const { data } = useGetOrdersQuery(user.user_id ?? -1)

	const setUser = async () => {
		const userData = await session.check()
		dispatch(setupUser(userData))
		const wishlist = await fetchWishList(user?.user_id ?? -1)
		dispatch(setupWishlist(wishlist))
		const cart = await fetchShoppingCart(user?.user_id ?? -1)
		dispatch(setupCart(cart))
		dispatch(setupOrders(data))
	}
	useEffect(() => {
		setUser()
	}, [data])

	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<Header />
			<div className='w-full flex mobile:flex-col gap-4 p-5 justify-between'>
				<div className='w-[25%] mobile:w-full'>
					<Filters />
				</div>

				<div className='w-[75%] mobile:w-full flex gap-5 mobile:p-2 mobile:gap-2 mobile:flex-col wrap flex-wrap'>
					<ProductList productList={productList} />
				</div>
			</div>
			<Toaster />
			<ModalProvider childern={<AuthModal />} />
		</ThemeProvider>
	)
}
