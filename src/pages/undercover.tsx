import { undercoverStore } from '@/store/undercover.store'

import UndercoverStart from '@/components/undercover/undercover-start'
import { useEffect } from 'react'

export default function Undercover() {
	const { start, setStart } = undercoverStore()

	useEffect(() => {
		setStart(false)
	}, [])

	if (!start) {
		return <UndercoverStart />
	}

	return <>UNDERCOVER</>
}
