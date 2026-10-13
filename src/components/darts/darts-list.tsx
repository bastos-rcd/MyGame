import { dartsStore } from '@/store/darts.store'

export default function DartsList() {
	const { players, removePlayer } = dartsStore()

	const handleDelete = (id: string) => {
		removePlayer(id)
	}

	return (
		<>
			<h2 className="self-end text-lg font-bold">{players.length} joueur(s)</h2>

			<div className="flex-1 overflow-y-auto">
				<div className="grid w-full grid-cols-2 gap-4">
					{players.map((player) => (
						<div
							key={player.id}
							className="flex w-full items-center gap-2 rounded-2xl border border-(--border) bg-(--surface) p-3"
							onClick={() => {
								if (confirm(`Voulez-vous vraiment retirer ${player.name} ?`)) {
									handleDelete(player.id)
								}
							}}
						>
							<span className="w-full font-bold">{player.name}</span>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
