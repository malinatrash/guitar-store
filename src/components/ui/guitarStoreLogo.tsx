import { FC, useState } from 'react'

interface Props {
	onClick?: () => void
}

const GuitarStoreLogo: FC<Props> = ({ onClick }) => {
	const [isHover, setisHover] = useState(false)
	return (
		<div
			className='flex hover:text-5xl mobile:relative'
			onMouseEnter={() => setisHover(true)}
			onMouseLeave={() => setisHover(false)}
			onClick={onClick}
		>
			<img
				className={`bg-slate-50 w-28 mobile:w-16 self-center mobile:h-16 mobile:object-fill rounded-full transition-all  ${
					isHover && 'opacity-50 animate-spin'
				}`}
				src='/assets/logo.png'
				alt='logo'
			/>
			<div className='flex flex-col justify-center ml-5 mobile:ml-0'>
				<span
					className={`transition-all text-slate-50 text-3xl mobile:text-[0] ${
						isHover && 'opacity-50'
					}`}
				>
					Guitar Store
				</span>
			</div>
		</div>
	)
}

export default GuitarStoreLogo
