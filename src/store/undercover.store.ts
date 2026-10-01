import { create } from 'zustand'

import type { Player, Role, Winner } from '@/models/undercover'
import { buildRoles, pickStarter, pickWords } from '@/utils/undercover'

interface State {
	status: boolean
	start: () => void
	stop: () => void

	nbPlayers: number
	setNbPlayers: (nbPlayer: number) => void

	roles: Role[]
	words: { civil: string; undercover: string } | null
	starter: string | null
	eliminate: (name: string) => void

	players: Player[]
	addPlayer: (name: string) => void

	winner: Winner | null
	setWinner: (winner: Winner | null) => void
}

export const undercoverStore = create<State>((set) => ({
	status: false,
	start: () =>
		set((state) => ({
			status: true,
			players: [],
			roles: buildRoles(state.nbPlayers),
			starter: null,
			words: pickWords(),
			winner: null,
		})),
	stop: () =>
		set({
			status: false,
			players: [],
			roles: [],
			starter: null,
			words: null,
			winner: null,
		}),

	nbPlayers: 4,
	setNbPlayers: (nbPlayers) => set({ nbPlayers }),

	roles: [],
	words: null,
	starter: null,
	eliminate: (name) =>
		set((state) => {
			const players = state.players.map((player) =>
				player.name === name ? { ...player, die: true } : player,
			)

			return { players, starter: pickStarter(players) }
		}),

	players: [],
	addPlayer: (name) =>
		set((state) => {
			const players = [
				...state.players,
				{ name, role: state.roles[state.players.length], die: false },
			]

			return {
				players,
				starter:
					players.length === state.nbPlayers ? pickStarter(players) : null,
			}
		}),

	winner: null,
	setWinner: (winner) => set({ winner }),
}))
