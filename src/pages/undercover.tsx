import { undercoverStore } from '@/store/undercover.store'

import UndercoverStart from '@/components/undercover/undercover-start'
import UndercoverSelect from '@/components/undercover/undercover-select'
import UndercoverPlay from '@/components/undercover/undercover-play'

export default function Undercover() {
	const { status, nbPlayers, players } = undercoverStore()

	if (!status) {
		return <UndercoverStart />
	}

	if (players.length < nbPlayers) {
		return <UndercoverSelect />
	}

	return <UndercoverPlay />
}
