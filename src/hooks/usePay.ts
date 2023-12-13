import { sendPay } from '@/api/sendPay'
import { useToast } from '@/components/ui/use-toast'
import { Order } from '@/models/user'

type ToastVariant = 'default' | 'destructive' | null | undefined

export const usePay = () => {
	const { toast } = useToast()

	const succToast = {
		title: 'Успешно',
		description: 'Оплата успешно проведена',
		variant: 'default' as ToastVariant,
	}
	const errToast = {
		title: 'Ошибка',
		description: 'Во время оплаты произошла ошибка',
		variant: 'destructive' as ToastVariant,
	}

	const pay = async (order?: Order) => {
		const data: PayProps = { order_id: order?.order_id }
		const payResponse = await sendPay(data)
		const currToast = payResponse?.error ? errToast : succToast
		toast(currToast)
		return currToast !== errToast
	}
	return { toast, pay }
}
