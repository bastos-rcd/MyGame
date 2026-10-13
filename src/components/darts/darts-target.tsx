import { useState } from 'react'

import type { Player } from '@/models/darts'

import { dartsStore } from '@/store/darts.store'

interface Props {
	player: Player
}

const NUMBERS = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 0,
]

export default function DartsTarget(props: Props) {
	const {
		stop,
		players,
		classment,
		addClassment,
		removeClassment,
		darts,
		addDart,
		removeDart,
	} = dartsStore()

	const [multiplier, setMultiplier] = useState<1 | 2 | 3>(1)

	const handleClick = (value: number, multiplier: number) => {
		const totalScore = value * multiplier

		let label =
			multiplier === 2
				? `D${value}`
				: multiplier === 3
					? `T${value}`
					: `${totalScore}`

		const allPlayerDarts = darts.filter((d) => d.player.id === props.player.id)

		const currentTurnCount = allPlayerDarts.length % 3

		const previousTurnsDarts = allPlayerDarts.slice(
			0,
			allPlayerDarts.length - currentTurnCount,
		)

		const currentTurnDarts = allPlayerDarts.slice(
			allPlayerDarts.length - currentTurnCount,
		)

		const scoreAtStartOfTurn = previousTurnsDarts.reduce(
			(a, b) => a + b.score,
			0,
		)
		const scoreScoredThisTurn = currentTurnDarts.reduce(
			(a, b) => a + b.score,
			0,
		)

		if (301 - (scoreAtStartOfTurn + scoreScoredThisTurn + totalScore) < 0) {
			const dartsToAddCount = 3 - currentTurnCount
			const compensationScore = -scoreScoredThisTurn

			for (let i = 0; i < dartsToAddCount; i++) {
				addDart({
					id: crypto.randomUUID(),
					label: i === 0 ? 'BUST' : '0',
					score: i === 0 ? compensationScore : 0,
					player: props.player,
				})
			}

			return
		}

		if (301 - (scoreAtStartOfTurn + scoreScoredThisTurn + totalScore) === 0) {
			if (!classment.includes(props.player)) {
				addClassment(props.player)
			}

			addDart({
				id: crypto.randomUUID(),
				label,
				score: totalScore,
				player: props.player,
			})

			return
		}

		addDart({
			id: crypto.randomUUID(),
			label,
			score: totalScore,
			player: props.player,
		})
	}

	const handleCancel = () => {
		if (darts.length === 0) return

		const lastDart = darts[darts.length - 1]

		const playerDarts = darts.filter((d) => d.player.id === lastDart.player.id)
		const scoreBeforeCancel = playerDarts.reduce((acc, d) => acc + d.score, 0)

		if (scoreBeforeCancel === 301) {
			const playerInClassment = players.find((p) => p.id === lastDart.player.id)
			if (playerInClassment) removeClassment(playerInClassment.id)
		}

		removeDart(lastDart.id)
	}

	return (
		<div className="grid grid-cols-7 gap-1.5">
			{NUMBERS.map((num) => (
				<button
					key={num}
					className="aspect-square rounded-2xl border border-(--border) bg-(--surface)/50 font-bold disabled:opacity-50"
					onClick={() => {
						handleClick(num, multiplier)
						setMultiplier(1)
					}}
					disabled={num * multiplier > 60}
				>
					{num}
				</button>
			))}

			<button
				className={`col-span-2 rounded-2xl border border-(--border) bg-(--blue)/50 font-bold ${multiplier === 2 && 'opacity-50'}`}
				onClick={() => setMultiplier(multiplier === 2 ? 1 : 2)}
			>
				DOUBLE
			</button>

			<button
				className={`col-span-2 rounded-2xl border border-(--border) bg-(--green)/50 font-bold ${multiplier === 3 && 'opacity-50'}`}
				onClick={() => setMultiplier(multiplier === 3 ? 1 : 3)}
			>
				TRIPLE
			</button>

			<button
				className="aspect-square rounded-2xl border border-(--border) bg-(--purple)/50"
				onClick={() => {
					setMultiplier(1)
					handleCancel()
				}}
			>
				<i className="fa-solid fa-arrow-rotate-left"></i>
			</button>

			<button
				className="aspect-square rounded-2xl border border-(--border) bg-(--red)/50"
				onClick={() => {
					if (confirm('Voulez-vous vraiment arrêter la partie ?')) stop()
				}}
			>
				<i className="fa-regular fa-circle-xmark fa-lg"></i>
			</button>
		</div>
	)
}
