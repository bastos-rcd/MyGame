import { useEffect } from 'react'

import { buzzerStore } from '@/store/buzzer.store'

import BuzzerDuel from '@/components/buzzer/buzzer-duel'
import BuzzerResult from '@/components/buzzer/buzzer-result'

export default function Buzzer() {
	const { winner, setWinner } = buzzerStore()

	useEffect(() => {
		setWinner(null)
	}, [])

	if (!winner) {
		return <BuzzerDuel />
	}

	return <BuzzerResult />
}
