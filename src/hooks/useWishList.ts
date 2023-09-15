import { fetchWishList } from '@/api/fetchWishlist'
import { sendWishlistItem } from '@/api/sendWishlistItem'
import { useToast } from '@/components/ui/use-toast'
import { Product } from '@/models/product'
import { setupWishlist } from '@/store/slices/userSlice'
import { RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useWishList = (product: Product) => {
	const [isFavorite, setisFavorite] = useState(false)
	const { toast } = useToast()
	const user = useSelector((state: RootState) => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		for (const prod of user.favorites ?? []) {
			if (prod.product_id === product.product_id) {
				setisFavorite(true)
				return
			}
			setisFavorite(false)
		}
	}, [user])

	const addToWishlist = async () => {
		const res = await sendWishlistItem({
			user_id: user.user_id ?? -1,
			product_id: product.product_id,
		})
		console.log(user.user_id)

		console.log(res)

		if (res === 200 || res == 201) {
			if (isFavorite) {
				const wishlist = await fetchWishList(user.user_id ?? -1)
				dispatch(setupWishlist(wishlist))
				toast({
					title: 'Товар удален из избранного',
					description: product.product_name,
				})
			} else {
				const wishlist = await fetchWishList(user.user_id ?? -1)
				dispatch(setupWishlist(wishlist))
				toast({
					title: 'Товар добавлен в избранное',
					description: product.product_name,
				})
			}
		} else {
			toast({
				title: 'Произошла ошибка',
				variant: 'destructive',
			})
		}
	}
	return { addToWishlist, isFavorite }
}
