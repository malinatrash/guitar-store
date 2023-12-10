import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import WishlistItem from '@/components/wishlistItem'
import AuthModal from '@/modal/AuthModal'
import ModalProvider from '@/modal/ModalProvider'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const Wishlist = () => {
	const user = useSelector((state: RootState) => state.user)
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<Header />
			<div className='w-full flex mobile:flex-col gap-4 p-5 justify-between flex-wrap'>
				{user.favorites?.map(e => (
					<WishlistItem item={e} key={e.product_id} />
				))}
			</div>
			<Toaster />
			<ModalProvider childern={<AuthModal />} />
		</ThemeProvider>
	)
}
