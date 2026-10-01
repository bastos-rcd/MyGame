import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { undercoverStore } from '@/store/undercover.store'

import { ROLES, type Player, type Winner } from '@/models/undercover'

import { getSecret, getWinner, normalize } from '@/utils/undercover'

import Divider from '@/components/divider'
import Button from '@/components/button'

const WINNERS: Record<Winner, string> = {
	CIVIL: 'Victoire des civils',
	UNDERCOVER: 'Victoire des Undercover',
	MISTER: 'Victoire de Mister White',
}

export default function UndercoverPlay() {
	const navigate = useNavigate()

	const { players, words, starter, winner, eliminate, setWinner, stop } =
		undercoverStore()

	const [voting, setVoting] = useState<boolean>(false)

	const vote = (player: Player) => {
		if (player.die) return
		if (!confirm(`Éliminer ${player.name} ?`)) return

		eliminate(player.name)
		setVoting(false)

		let message = `${player.name} était ${player.role}`

		if (player.role === ROLES.MISTER) {
			const guess = prompt(
				`${player.name} était Mister White !\n\nQuel est le mot des civils ?`,
			)

			if (guess && normalize(guess) === normalize(words?.civil ?? '')) {
				setWinner('MISTER')
				return
			}

			message = 'Mauvaise réponse !'
		}

		const state = undercoverStore.getState()
		const result = getWinner(state.players)

		alert(message)

		if (result) setWinner(result)
	}

	const handleClick = (player: Player) => {
		if (winner) return

		if (voting) {
			vote(player)
		} else {
			if (!confirm(`Es-tu bien ${player.name} ?`)) return

			alert(`${player.name} : ${getSecret(player.role, words)}`)
		}
	}

	return (
		<>
			<h1 className="text-center text-2xl font-bold">
				{winner
					? WINNERS[winner]
					: voting
						? 'Qui éliminer ?'
						: `${starter} commence`}
			</h1>

			{winner && (
				<p className="text-center">
					Civils : <b>{words?.civil}</b> · Undercover :{' '}
					<b>{words?.undercover}</b>
				</p>
			)}

			<Divider />

			<div className="no-scrollbar flex-1 overflow-y-auto">
				<div className="grid grid-cols-3 gap-4">
					{players.map((player) => (
						<div
							key={player.name}
							className="flex h-32 flex-col items-center justify-center gap-1 rounded-2xl border p-2 text-center"
							style={{
								backgroundColor: player.die ? 'var(--surface)' : 'white',
								borderColor: player.die ? 'var(--red)' : 'var(--border)',
								opacity: player.die ? 0.5 : 1,
							}}
							onClick={() => handleClick(player)}
						>
							<span className="font-bold">{player.name}</span>

							{(player.die || winner) && (
								<span className="text-xs">{player.role}</span>
							)}
						</div>
					))}
				</div>
			</div>

			<Divider />

			{!winner && (
				<Button
					label={voting ? 'Annuler le vote' : 'Voter'}
					style="light"
					action={() => setVoting(!voting)}
				/>
			)}

			<Button
				label="Quitter"
				style="dark"
				action={() => {
					if (winner || confirm('Voulez-vous vraiment quitter ?')) {
						stop()
						navigate('/')
					}
				}}
			/>
		</>
	)
}
