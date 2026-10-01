import { ROLES, type Role } from '@/models/undercover'

const WORDS: [string, string][] = [
	['Pizza', 'Burger'],
	['Chat', 'Chien'],
]

function shuffle<T>(array: T[]): T[] {
	const result = [...array]
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[result[i], result[j]] = [result[j], result[i]]
	}
	return result
}

export function buildRoles(players: number): Role[] {
	const { civils, undercover, mister } = compute(players)

	return shuffle([
		...Array.from({ length: civils }, () => ROLES.CIVIL),
		...Array.from({ length: undercover }, () => ROLES.UNDERCOVER),
		...Array.from({ length: mister }, () => ROLES.MISTER),
	])
}

export function pickWords(): { civil: string; undercover: string } {
	const [a, b] = WORDS[Math.floor(Math.random() * WORDS.length)]
	return Math.random() < 0.5
		? { civil: a, undercover: b }
		: { civil: b, undercover: a }
}

export function compute(players: number): {
	civils: number
	undercover: number
	mister: number
} {
	const mister = 1
	const undercover = Math.max(1, Math.floor((players - 1) / 3.5))
	const civils = players - undercover - mister

	return {
		civils,
		undercover,
		mister,
	}
}
