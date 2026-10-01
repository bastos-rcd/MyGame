import { ROLES, type Player, type Role, type Winner } from '@/models/undercover'

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

export function pickStarter(players: Player[]): string | null {
	const alive = players.filter((player) => !player.die)
	const candidates = alive.filter((player) => player.role !== ROLES.MISTER)
	const pool = candidates.length > 0 ? candidates : alive

	if (pool.length === 0) return null

	return pool[Math.floor(Math.random() * pool.length)].name
}

export function getSecret(
	role: Role | null,
	words: { civil: string; undercover: string } | null,
): string {
	if (role === ROLES.MISTER) return 'Tu es Mister White'
	if (role === ROLES.UNDERCOVER) return words?.undercover ?? ''
	return words?.civil ?? ''
}

export function getWinner(players: Player[]): Winner | null {
	const alive = players.filter((player) => !player.die)

	const civils = alive.filter((p) => p.role === ROLES.CIVIL).length
	const undercovers = alive.filter((p) => p.role === ROLES.UNDERCOVER).length
	const misters = alive.filter((p) => p.role === ROLES.MISTER).length

	if (undercovers === 0 && misters === 0) return 'CIVIL'
	if (undercovers > 0 && civils <= undercovers) return 'UNDERCOVER'
	if (undercovers === 0 && civils <= misters) return 'MISTER'

	return null
}

export function normalize(value: string): string {
	return value
		.trim()
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
}
