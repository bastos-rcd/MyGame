import { useEffect } from 'react'

import { dartsStore } from '@/store/darts.store'

import DartsStart from '@/components/darts/darts-start'

export default function Darts() {
	const { status } = dartsStore()

	if (!status) {
		return <DartsStart />
	}

	return <></>
}
