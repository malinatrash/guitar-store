import { fetchShoppingCart } from '@/api/fetchShoppingCart'
import { sendCartItem } from '@/api/sendCartItem'
import { useToast } from '@/components/ui/use-toast'
import { Product } from '@/models/product'
import { setupCart } from '@/store/slices/userSlice'
import { RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useShoppingCart = (product: Product) => {
	const [isInCart, setIsInCart] = useState(false)
	const { toast } = useToast()
	const user = useSelector((state: RootState) => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!user.cart) return
		const isInCart = user.cart!.some(
			item => item.product_id === product.product_id
		)
		setIsInCart(isInCart)
	}, [user.cart, product.product_id])

	const addToCart = async (quantity: number) => {
		const userId = user.user_id ?? -1
		const res = await sendCartItem({
			user_id: userId,
			product_id: product.product_id,
			quantity: quantity,
		})

		const shoppingCart = await fetchShoppingCart(userId)
		dispatch(setupCart(shoppingCart))

		if (res === 200 || res === 201) {
			const toastTitle = isInCart
				? 'Товар удален из корзины'
				: 'Товар добавлен в корзину'
			toast({
				title: toastTitle,
				description: product.product_name,
			})
		} else {
			const toastTitle =
				user.role === 'guest' ? 'Войдите в систему' : 'Произошла ошибка'
			toast({
				title: toastTitle,
				variant: 'destructive',
			})
		}
	}

	return { addToCart, isInCart }
}
