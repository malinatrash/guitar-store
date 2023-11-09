import Header from '@/components/header'
import ProductCountryOfOrigin from '@/components/product/ProductCountryOfOrigin'
import ProductDescription from '@/components/product/ProductDescription'
import ProductImage from '@/components/product/ProductImage'
import ProductName from '@/components/product/ProductName'
import ProductVendor from '@/components/product/ProductVendor'
import ProductYearOfProduction from '@/components/product/ProductYearOfProduction'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import Comments from '@/components/ui/comments'
import { Toaster } from '@/components/ui/toaster'
import { useWishList } from '@/hooks/useWishList'
import { Comment } from '@/models/comment'
import { useGetCommentsQuery } from '@/store/api/comments.api'
import { RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Product = () => {
	const product = useSelector((state: RootState) => state.currentProduct)
	const wishList = useWishList(product.product!)

	const { data, isLoading, isFetching } = useGetCommentsQuery(
		product.product?.product_id ?? -1
	)

	const [comments, setComments] = useState<Comment[]>([])
	const [visibleComments, setVisibleComments] = useState<Comment[]>([])
	const [currentPage, setCurrentPage] = useState<number>(1)
	const commentsPerPage = 10

	useEffect(() => {
		if (data) {
			setComments(data.slice(0, commentsPerPage))
			setVisibleComments(data.slice(0, commentsPerPage))
		}
	}, [isLoading, isFetching, data])

	const handlePageChange = (pageNumber: number) => {
		const startIndex = (pageNumber - 1) * commentsPerPage
		const endIndex = startIndex + commentsPerPage
		setComments(data ? data.slice(startIndex, endIndex) : [])
		setCurrentPage(pageNumber)
	}

	const handleShowMore = () => {
		const newEndIndex = visibleComments.length + commentsPerPage
		const newVisibleComments = data ? data.slice(0, newEndIndex) : []
		setVisibleComments(newVisibleComments)
	}

	return (
		<ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
			<Header />
			<div className='flex gap-5 justify-center items-start mobile:flex-col'>
				<div className='default:h-screen flex flex-col p-10 justify-start mobile:p-2 h-full'>
					<div className='ml-10'>
						<ProductName name={product.product?.product_name ?? ''} />
					</div>
					<div className='flex flex-col h-full w-full'>
						<div className='m-4 flex items-start mobile:flex-col gap-8 mt-10 w-full h-full'>
							<ProductImage img_url={product.product?.image_url ?? ''} />
							<div className='flex flex-col gap-5 justify-between h-full pb-10 mr-[10%]'>
								<div className='flex flex-col gap-4'>
									<ProductVendor vendorId={product.product?.vendor ?? 0} />
									<ProductCountryOfOrigin
										countryId={product.product?.country_of_origin ?? 0}
									/>
									<ProductYearOfProduction
										year={product.product?.year_of_production ?? 0}
									/>
								</div>
								<ProductDescription
									description={product.product?.product_description ?? ''}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-4 w-full mt-[13%] mr-[5%]'>
					<Button
						onClick={() => {
							// 	toast({
							// 		title: 'Товар добавлен в корзину',
							// 		description: product.product_name,
							// 	})
						}}
						variant={'default'}
					>
						В корзину
					</Button>
					<Button
						onClick={wishList.addToWishlist}
						variant={!wishList.isFavorite ? 'outline' : 'destructive'}
					>
						{!wishList.isFavorite
							? 'Добавить избранное'
							: 'Удалить из избранного'}
					</Button>
					<h1 className='text-[56px] w-full text-center'>
						{product.product?.price}₽
					</h1>
				</div>
			</div>
			<div className='px-16 flex flex-col gap-3 py-16'>
				<h1 className='text-[60px]'>Отзывы</h1>
				<div className='flex gap-8 flex-wrap basis-auto'>
					<Comments
						isLoading={!isLoading}
						comments={visibleComments ? visibleComments : []}
					/>
				</div>
				{visibleComments.length < (data ? data.length : 0) && (
					<Button
						className='opacity-30 hover:opacity-95 transition-all w-96 self-center py-4 hover:scale-105'
						onClick={handleShowMore}
					>
						Показать еще
					</Button>
				)}
			</div>
			<Toaster />
		</ThemeProvider>
	)
}

export default Product
