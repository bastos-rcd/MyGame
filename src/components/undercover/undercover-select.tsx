import { useState } from 'react'

import { ROLES } from '@/models/undercover'
import { undercoverStore } from '@/store/undercover.store'

import Divider from '@/components/divider'
import Button from '@/components/button'

export default function UndercoverSelect() {
	const { roles, words, players, addPlayer } = undercoverStore()

	const [name, setName] = useState<string>('')
	const [reveal, setReveal] = useState<boolean>(false)

	const role = roles[players.length]
	const trimmed = name.trim()
	const taken = players.some(
		(player) => player.name.toLowerCase() === trimmed.toLowerCase(),
	)

	const canValidate = trimmed.length > 0 && !taken

	const next = () => {
		addPlayer(trimmed)
		setName('')
		setReveal(false)
	}

	return (
		<>
			<div className="flex flex-1 flex-col items-center justify-center gap-4">
				{!reveal ? (
					<>
						<input
							className="w-full rounded-2xl border border-(--border) bg-white px-4 py-3 outline-none"
							type="text"
							placeholder="Nom du joueur"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						{taken && <span className="text-(--red)">Prénom déjà pris</span>}
					</>
				) : (
					<>
						<span className="text-lg">{trimmed} :</span>
						<span className="rounded-2xl border border-(--border) bg-white p-4 text-2xl font-bold">
							{role === ROLES.MISTER
								? 'Tu es Mister White'
								: role === ROLES.UNDERCOVER
									? words?.undercover
									: words?.civil}
						</span>
					</>
				)}
			</div>

			<Divider />

			{!reveal ? (
				<Button
					label="Voir mon mot"
					style="light"
					disabled={!canValidate}
					action={() => setReveal(true)}
				/>
			) : (
				<Button label="Terminé, je passe" style="dark" action={next} />
			)}
		</>
	)
}
