export const ROLES = {
	CIVIL: 'Civil',
	UNDERCOVER: 'Undercover',
	MISTER: 'Mister White',
} as const

export type Role = (typeof ROLES)[keyof typeof ROLES]

export type Winner = 'CIVIL' | 'UNDERCOVER' | 'MISTER'

export interface Player {
	name: string
	role: Role | null
	die: boolean
}
