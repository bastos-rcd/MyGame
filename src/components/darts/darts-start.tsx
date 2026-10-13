import { useNavigate } from 'react-router-dom'

import { dartsStore } from '@/store/darts.store'

import Button from '@/components/button'
import Divider from '@/components/divider'

import DartsCreate from '@/components/darts/darts-create'
import DartsList from '@/components/darts/darts-list'

export default function DartsStart() {
	const navigate = useNavigate()

	const { start, players } = dartsStore()

	return (
		<>
			<h1 className="w-full text-center text-2xl font-bold">Fléchettes</h1>

			<Divider />

			<DartsCreate />

			<DartsList />

			<Divider />

			<Button
				label="Jouer"
				style="light"
				action={start}
				disabled={players.length < 2}
			/>

			<Button
				label="Quitter"
				style="dark"
				action={() => {
					navigate('/')
				}}
			/>
		</>
	)
}
