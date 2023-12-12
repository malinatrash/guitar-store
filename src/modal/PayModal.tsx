import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { hide } from '@/store/slices/payModalSlice'
import { RootState } from '@/store/store'
import { useContext, useEffect, useState } from 'react'
import Card from 'react-credit-cards-2'
import { useDispatch, useSelector } from 'react-redux'
import { ModalContext } from './modal-context'

const PayDialog = () => {
	const isShown = useSelector((state: RootState) => state.payModal.isShown)
	const dispatch = useDispatch()
	const { show, setShow } = useContext(ModalContext)

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
				className={` w-[90vw] h-[90vh] overflow-hidden mobile:max-w-[95%] justify-center  ${
					!isShown && 'hidden'
				}`}
			>
				<DialogHeader onClick={() => setShow(false)}>
					<span className='text-2xl font-medium'>Оплата</span>
				</DialogHeader>

				<div className='flex flex-col gap-4'>
					<Select>
						<SelectTrigger className='w-[250px]'>
							<SelectValue placeholder='Выберите способ оплаты' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem
									className='transition-all hover:shadow-sm hover:scale-[101%]'
									value='Наличные при получении'
								>
									Наличные при получении
								</SelectItem>
								<SelectItem
									className='transition-all hover:shadow-sm hover:scale-[101%]'
									value='Картой при получении'
								>
									Картой при получении
								</SelectItem>
								<SelectItem
									className='transition-all hover:shadow-sm hover:scale-[101%]'
									value='Онлайн'
								>
									Онлайн
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger className='w-[250px]'>
							<SelectValue placeholder='Выберите способ получения' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem
									className='transition-all hover:shadow-sm hover:scale-[101%]'
									value='Доставка'
								>
									Доставка
								</SelectItem>
								<SelectItem
									className='transition-all hover:shadow-sm hover:scale-[101%]'
									value='Самовывоз'
								>
									Самовывоз
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Card
						preview={true}
						name={state.name}
						number={state.number}
						expiry={state.expiry}
						cvc={state.cvc}
					/>
					<Input
						type='tel'
						name='number'
						className='form-control'
						placeholder='Card Number'
						pattern='[\d| ]{16,22}'
						required
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>

					<Input
						type='text'
						name='name'
						placeholder='Name'
						value={state.name}
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>

					<Input
						type='text'
						name='expiry'
						placeholder='Expiration Date'
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
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default PayDialog
