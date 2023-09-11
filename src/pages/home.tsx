import ProductList from '@/components/ProductList'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { useProductList } from '@/hooks/useProductList'
import AuthModal from '@/modal/AuthModal'
import ModalProvider from '@/modal/ModalProvider'

export const Home = () => {
	const productList = useProductList()

	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<Header />
			<div className='flex gap-5 p-6 mobile:p-2 mobile:gap-2 mobile:flex-col wrap flex-wrap'>
				<ProductList productList={productList} />
			</div>
			<Toaster />
			<ModalProvider childern={<AuthModal />} />
		</ThemeProvider>
	)
}
