export const ROLES = {
	CIVIL: 'Civilian',
	UNDERCOVER: 'Undercover',
	MISTER: 'Mister White',
} as const

export type Role = (typeof ROLES)[keyof typeof ROLES]

export interface Player {
	name: string
	role: Role | null
	die: boolean
}
