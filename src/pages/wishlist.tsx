import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import AuthModal from '@/modal/AuthModal'
import ModalProvider from '@/modal/ModalProvider'
import { useGetwishlistQuery } from '@/store/api/wishlist.api'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const Wishlist = () => {
	const user = useSelector((state: RootState) => state.user)
	const { data } = useGetwishlistQuery(user.user_id ?? -1)
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<Header />
			<div className='w-full flex mobile:flex-col gap-4 p-5 justify-between'>
				{data?.map(e => (
					<div className='w-full'>{e.price}</div>
				))}
			</div>
			<Toaster />
			<ModalProvider childern={<AuthModal />} />
		</ThemeProvider>
	)
}
