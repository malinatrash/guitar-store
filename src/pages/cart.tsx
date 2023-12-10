import { DataTable, columns } from '@/components/DataTable'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import AuthModal from '@/modal/AuthModal'
import ModalProvider from '@/modal/ModalProvider'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const Cart = () => {
	const user = useSelector((state: RootState) => state.user)

	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<Header />
			<div className='container mx-auto py-10'>
				<DataTable
					columns={columns}
					data={user.cart ?? []}
					key={user.user_id}
				/>
			</div>
			<Toaster />
			<ModalProvider childern={<AuthModal />} />
		</ThemeProvider>
	)
}
