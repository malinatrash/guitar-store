import { FC } from 'react'

interface Iquantity {
	quantity: number
}

const Quantity: FC<Iquantity> = ({ quantity }) => {
	return (
		<div
			className={`${
				quantity <= 0 && 'hidden'
			} mobile:hidden flex justify-center items-center bg-black text-white dark:text-black dark:bg-white w-6 h-6 rounded-lg text-base`}
		>
			{quantity}
		</div>
	)
}

export default Quantity
