import ProductList from '@/components/ProductList'
import Filters from '@/components/filiters'
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
