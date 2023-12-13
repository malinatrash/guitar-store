import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { usePay } from '@/hooks/usePay'
import { hide } from '@/store/slices/payModalSlice'
import { RootState } from '@/store/store'
import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalContext } from './modal-context'

const PayDialog = () => {
	const isShown = useSelector((state: RootState) => state.payModal.isShown)
	const dispatch = useDispatch()
	const { show, setShow } = useContext(ModalContext)
	const order = useSelector((state: RootState) => state.payModal.order)
	const pay = usePay()

	const submit = async () => {
		const { cvc, expiry, focus, name, number } = state
		const fields = [cvc, expiry, focus, name, number]

		if (fields.some(field => field === '')) {
			pay.toast({
				title: 'Ошибка',
				description: 'Заполните все поля',
				variant: 'destructive',
			})
			return
		}

		const isOk = await pay.pay(order)
		if (isOk) {
			dispatch(hide())
		}
	}

	const [state, setState] = useState({
		number: '',
		expiry: '',
		cvc: '',
		name: '',
		focus: '',
	})

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleInputChange = (evt: any) => {
		const { name, value } = evt.target

		setState(prev => ({ ...prev, [name]: value }))
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleInputFocus = (evt: any) => {
		setState(prev => ({ ...prev, focus: evt.target.name }))
	}

	const action = () => {
		if (isShown) {
			dispatch(hide())
		}
	}

	useEffect(() => {
		setShow(isShown)
	}, [isShown])
	return (
		<Dialog open={show} onOpenChange={action}>
			<DialogContent
				className={`flex flex-col items-center justify-between  h-[60vh] overflow-hidden mobile:max-w-[95%]  ${
					!isShown && 'hidden'
				}`}
			>
				<DialogHeader onClick={() => setShow(false)}>
					<span className='text-2xl font-medium w-full'>
						Оплата заказа №{order?.order_id}
					</span>
				</DialogHeader>

				<div className='flex flex-col gap-4 w-[70%]'>
					<Input
						type='tel'
						name='number'
						className='form-control'
						placeholder='1111 2222 3333 4444'
						pattern='[\d| ]{16,22}'
						required
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>

					<Input
						type='text'
						name='name'
						placeholder='PAVEL NAUMOV'
						value={state.name}
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>

					<Input
						type='text'
						name='expiry'
						placeholder='09/29'
						value={state.expiry}
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>

					<Input
						type='text'
						name='cvc'
						placeholder='CVC'
						value={state.cvc}
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>
					<Button onClick={submit}>Оплатить {order?.total_price}₽</Button>
				</div>
				<div></div>
			</DialogContent>
		</Dialog>
	)
}

export default PayDialog
