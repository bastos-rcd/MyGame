import { create } from 'zustand'

import type { Player } from '@/models/undercover'

interface State {
	status: boolean
	start: () => void
	stop: () => void

	nbPlayers: number
	setNbPlayers: (nbPlayer: number) => void

	players: Player[]
	setPlayers: (players: Player[]) => void
}

export const undercoverStore = create<State>((set) => ({
	status: false,
	start: () => set({ status: true }),
	stop: () => set({ status: false }),

	nbPlayers: 4,
	setNbPlayers: (nbPlayers) => set({ nbPlayers }),

	players: [],
	setPlayers: (players) => set({ players }),
}))
