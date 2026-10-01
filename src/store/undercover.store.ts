import { create } from 'zustand'

import type { Player } from '@/models/undercover'

interface State {
	start: boolean
	setStart: (start: boolean) => void

	players: Player[]
	setPlayers: (players: Player[]) => void
}

export const undercoverStore = create<State>((set) => ({
	start: false,
	setStart: (start) => set({ start }),

	players: [],
	setPlayers: (players) => set({ players }),
}))
