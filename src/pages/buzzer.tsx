import { buzzerStore } from '@/store/buzzer.store'

import BuzzerDuel from '@/components/buzzer/buzzer-duel'
import BuzzerResult from '@/components/buzzer/buzzer-result'

export default function Buzzer() {
	const { winner } = buzzerStore()

	if (!winner) {
		return <BuzzerDuel />
	}

	return <BuzzerResult />
}
