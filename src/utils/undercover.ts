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
