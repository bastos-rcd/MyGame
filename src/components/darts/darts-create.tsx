import { useState } from 'react'

import { dartsStore } from '@/store/darts.store'

import Button from '@/components/button'

export default function DartsCreate() {
	const { players, addPlayer } = dartsStore()

	const [name, setName] = useState<string>('')

	const handleSubmit = () => {
		if (name.trim().length === 0) {
			return
		}

		if (
			players.some(
				(player) => player.name.toLowerCase() === name.trim().toLowerCase(),
			)
		) {
			alert('Ce joueur existe déjà')
			return
		}

		addPlayer(name.trim())
		setName('')
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleSubmit()
			}}
			className="flex flex-row gap-4"
		>
			<input
				className="w-full rounded-2xl border border-(--border) bg-white px-4 py-3 outline-none"
				type="text"
				placeholder="Nom du joueur"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<Button label="Ajouter" style="default" type="submit" />
		</form>
	)
}
