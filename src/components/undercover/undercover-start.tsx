import { useNavigate } from 'react-router-dom'

import { undercoverStore } from '@/store/undercover.store'

import { compute } from '@/utils/undercover'

import Divider from '@/components/divider'
import Button from '@/components/button'

export default function UndercoverStart() {
	const navigate = useNavigate()

	const { start, nbPlayers, setNbPlayers } = undercoverStore()

	return (
		<>
			<h1 className="w-full text-center text-2xl font-bold">Undercover</h1>

			<Divider />

			<div className="flex flex-1 flex-col gap-8">
				<div className="flex flex-row items-center justify-center gap-4">
					<button
						className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-white p-3 disabled:opacity-50"
						disabled={nbPlayers === 4}
						onClick={() => setNbPlayers(nbPlayers - 1)}
					>
						<i className="fa-solid fa-minus"></i>
					</button>

					<span className="text-xl font-semibold">{nbPlayers}</span>

					<button
						className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-white p-3 disabled:opacity-50"
						disabled={nbPlayers === 20}
						onClick={() => setNbPlayers(nbPlayers + 1)}
					>
						<i className="fa-solid fa-plus"></i>
					</button>
				</div>

				<div className="flex flex-row flex-wrap items-center justify-center gap-4">
					{Object.entries(compute(nbPlayers)).map(([key, value], index) => (
						<div
							className="rounded-2xl border border-(--border) bg-white p-3"
							key={index}
						>
							{value} {key === 'mister' ? 'Mister White' : key}
						</div>
					))}
				</div>
			</div>

			<Divider />

			<Button label="Jouer" style="light" action={start} />

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
