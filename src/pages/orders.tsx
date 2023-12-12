import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { useRedirect } from '@/hooks/useRedirect'
import { RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/components/ui/button'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import ModalProvider from '@/modal/ModalProvider'
import PayModal from '@/modal/PayModal'
import { setOrder, show } from '@/store/slices/payModalSlice'

export const Orders = () => {
	const user = useSelector((state: RootState) => state.user)
	const dispath = useDispatch()

	useRedirect()
	return (
		<ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
			<Header />
			<div className='container mx-auto p-10 bg-transparent rounded-2xl my-12 flex gap-8 flex-col'>
				{user.orders?.map(order => (
					<div key={order.order_id} className='text-2xl font-medium'>
						<span className='block box-border mb-2'>
							Заказ №{order.order_id}
						</span>
						<Table className='border'>
							<TableHeader className='bg-secondary'>
								<TableRow>
									<TableHead className='w-[100px]'>Номер заказа</TableHead>
									<TableHead>Дата заказа</TableHead>
									<TableHead>Количество</TableHead>
									<TableHead>Статус</TableHead>
									<TableHead className='text-right'>Итоговая сумма</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{order.order_products.map(product => (
									<TableRow key={product.product.product_id}>
										<TableCell className='font-medium'>
											{product.product.product_name}
										</TableCell>
										<TableCell>{order.order_date}</TableCell>
										<TableCell>{product.quantity} шт.</TableCell>
										<TableCell>{order.order_status}</TableCell>
										<TableCell className='text-right'>
											{product.quantity * product.product.price}₽
										</TableCell>
									</TableRow>
								))}
								<TableRow key={`${order.order_id}-summary`}>
									<TableCell colSpan={5}>
										<Table className='border border-gray-300 mt-4'>
											<TableBody>
												<TableRow>
													<TableCell className='bg-secondary' colSpan={5}>
														Общая информация о заказе:
													</TableCell>
												</TableRow>
												<TableRow>
													<TableCell colSpan={5}>
														{/* Display nested table of product details */}
														<Table className='border border-gray-300 mt-2 w-full'>
															<TableHeader>
																<TableRow>
																	<TableHead>Наименование товара</TableHead>
																	<TableHead>Цена</TableHead>
																	<TableHead>Количество</TableHead>
																	{/* ... add other headers based on your Product interface */}
																</TableRow>
															</TableHeader>
															<TableBody>
																{order.order_products.map(product => (
																	<TableRow key={product.product.product_id}>
																		<TableCell>
																			{product.product.product_name}
																		</TableCell>
																		<TableCell>
																			{product.product.price}₽
																		</TableCell>
																		<TableCell>{product.quantity}</TableCell>
																		{/* ... display other product details */}
																	</TableRow>
																))}
															</TableBody>
														</Table>
													</TableCell>
												</TableRow>
												<TableRow>
													<TableCell colSpan={5}>
														Общая сумма заказа: {order.total_price}₽
													</TableCell>
												</TableRow>
												<TableRow>
													<TableCell colSpan={5}>
														Примечания к заказу:
													</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
						<div className='w-full flex justify-end pt-4'>
							{order.order_status === 'открыт' && (
								<Button
									onClick={() => {
										dispath(setOrder(order))
										dispath(show())
									}}
								>
									Оплатить
								</Button>
							)}
						</div>
					</div>
				))}
			</div>
			<Toaster />
			<ModalProvider childern={<PayModal />} />
		</ThemeProvider>
	)
}
