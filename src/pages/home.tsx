import ProductList from '@/components/ProductList'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { useProductList } from '@/hooks/useProductList'
import '@/styles/index.css'
import { ReactNode } from 'react'

interface Props {
	children?: ReactNode
}
const Home: React.FC<Props> = () => {
	const productList = useProductList()

	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<Header />
			<div className='flex gap-5 p-6 mobile:p-2 mobile:gap-2 mobile:flex-col wrap flex-wrap'>
				<ProductList productList={productList} />
			</div>
			<Toaster />
		</ThemeProvider>
	)
}

export default Home
