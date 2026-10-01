import { useState } from 'react'

import { undercoverStore } from '@/store/undercover.store'

import Divider from '@/components/divider'
import Exit from '@/components/exit'

export default function UndercoverStart() {
	const { players, setPlayers } = undercoverStore()

	const [name, setName] = useState<string>('')

	const handleAdd = () => {
		if (!name.trim()) {
			return
		}

		if (players.some((p) => p.name === name)) {
			alert('Ce joueur existe déjà !')
			return
		}

		setPlayers([...players, { name, role: null, die: false }])
		setName('')
	}

	return (
		<>
			<Exit action={() => {}} />

			<div className="flex flex-row items-center gap-4">
				<input
					className="w-full rounded-2xl border border-(--border) bg-white px-4 py-3 outline-none"
					type="text"
					placeholder="Nom du joueur"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<button
					className="rounded-2xl border border-(--border) bg-(--blue)/50 px-4 py-3 text-center"
					onClick={handleAdd}
					disabled={!name.trim()}
				>
					<i className="fa-solid fa-plus"></i>
				</button>
			</div>

			<Divider />
		</>
	)
}
