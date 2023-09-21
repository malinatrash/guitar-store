import { FC, ReactNode } from 'react'

interface IFrame {
	children: ReactNode
	className: string
}

const Frame: FC<IFrame> = ({ children, className }) => {
	return (
		<div className={'bg-white p-6 rounded-xl shadow-frame' + ' ' + className}>
			{children}
		</div>
	)
}

export default Frame
