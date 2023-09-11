import { useState } from 'react'
import { ModalContext } from './modal-context'

const ModalProvider = ({ childern }: { childern: React.ReactNode }) => {
	const [show, setShow] = useState<boolean>(false)
	return (
		<ModalContext.Provider value={{ show, setShow }}>
			{childern}
		</ModalContext.Provider>
	)
}

export default ModalProvider
