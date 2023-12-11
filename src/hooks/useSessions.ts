import { useToast } from '@/components/ui/use-toast'
import { useLazyCheckSessionQuery } from '@/store/api/sessions.api'

export const useSessions = () => {
	const [trigger] = useLazyCheckSessionQuery()
	const { toast } = useToast()

	const getSessionId = () => {
		return JSON.parse(localStorage.getItem('session_id') || '') || ''
	}

	const check = async () => {
		const { data } = await trigger(getSessionId())

		console.log(getSessionId())
		console.log('result:', data)

		if (data?.status_code == 200) {
			toast({
				title: 'Успешно',
				description: `Добро пожаловать, ${data.user?.firstname} ${data.user?.lastname}`,
			})
			return data.user
		} else {
			toast({
				title: 'Ошибка',
				description: 'Сессия истекла',
				variant: 'destructive',
			})
		}
		return null
	}
	return { check }
}
