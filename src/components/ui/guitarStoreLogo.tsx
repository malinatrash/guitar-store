import { FC, useState } from 'react'

interface Props {
	onClick?: () => void
}

const GuitarStoreLogo: FC<Props> = ({ onClick }) => {
	const [isHover, setisHover] = useState(false)
	return (
		<div
			className='flex h-28 hover:text-5xl mobile:h-28 mobile:relative'
			onMouseEnter={() => setisHover(true)}
			onMouseLeave={() => setisHover(false)}
			onClick={onClick}
		>
			<img
				className={`bg-slate-50 rounded-full transition-all pr-1 ${
					isHover && 'opacity-50'
				}`}
				src='/assets/logo.png'
				alt='logo'
			/>
			<div className='flex flex-col justify-center ml-5'>
				<span
					className={`transition-all text-slate-50 text-3xl mobile:text-[0] ${
						isHover && 'text-5xl opacity-50'
					}`}
				>
					Guitar Store
				</span>
			</div>
		</div>
	)
}

export default GuitarStoreLogo
