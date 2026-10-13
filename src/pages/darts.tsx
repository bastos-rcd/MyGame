import { dartsStore } from '@/store/darts.store'

import DartsGame from '@/components/darts/darts-game'
import DartsStart from '@/components/darts/darts-start'

export default function Darts() {
	const { status } = dartsStore()

	if (!status) {
		return <DartsStart />
	}

	return <DartsGame />
}
