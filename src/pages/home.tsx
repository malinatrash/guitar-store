import Header from '@/components/header'
import ProductCard from '@/components/productCard'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { mockProductList } from '@/models/product'
import '@/styles/index.css'
import { ReactNode } from 'react'

interface Props {
	children?: ReactNode
}
const Home: React.FC<Props> = ({ children }) => {
	const { toast } = useToast()

	const isUserPath = window.location.pathname === '/user'

	return (
		<div className='bg-[#f8f8f8]'>
			<Header />
			<div className='flex justify-around gap-5 p-6 mobile:p-2 mobile:gap-2 wrap flex-wrap'>
				{mockProductList.map(product => (
					<ProductCard key={product.id} product={product} toast={toast} />
				))}
			</div>
			<Toaster />

			{/* Показываем children только на пути '/user' */}
			{isUserPath && children}
		</div>
	)
}

export default Home
