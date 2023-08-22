import { FC, useState } from 'react'

const GuitarStoreLogo: FC = () => {
	const [isHover, setisHover] = useState(false)
	return (
		<div
			className='flex h-28 hover:text-5xl'
			onMouseEnter={() => setisHover(true)}
			onMouseLeave={() => setisHover(false)}
		>
			<img
				className={`bg-slate-50 rounded-full transition-all ${
					isHover && 'opacity-50'
				}`}
				src='/src/assets/logo.png'
				alt='logo'
			/>
			<div className='flex flex-col justify-center ml-5'>
				<span
					className={`transition-all text-slate-50 text-3xl ${
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