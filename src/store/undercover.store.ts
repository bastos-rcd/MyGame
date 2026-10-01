import { create } from 'zustand'

import type { Player, Role } from '@/models/undercover'
import { buildRoles, pickWords } from '@/utils/undercover'

interface State {
	status: boolean
	start: () => void
	stop: () => void

	nbPlayers: number
	setNbPlayers: (nbPlayer: number) => void

	roles: Role[]
	words: { civil: string; undercover: string } | null

	players: Player[]
	addPlayer: (name: string) => void
}

export const undercoverStore = create<State>((set) => ({
	status: false,
	start: () =>
		set((state) => ({
			status: true,
			players: [],
			roles: buildRoles(state.nbPlayers),
			words: pickWords(),
		})),
	stop: () => set({ status: false, players: [], roles: [], words: null }),

	nbPlayers: 4,
	setNbPlayers: (nbPlayers) => set({ nbPlayers }),

	roles: [],
	words: null,

	players: [],
	addPlayer: (name) =>
		set((state) => ({
			players: [
				...state.players,
				{ name, role: state.roles[state.players.length], die: false },
			],
		})),
}))
