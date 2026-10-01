import { useNavigate } from 'react-router-dom'

import { buzzerStore } from '@/store/buzzer.store'

import Exit from '@/components/exit'

export default function BuzzerResult() {
	const navigate = useNavigate()

	const { winner, setWinner } = buzzerStore()

	return (
		<div
			className="flex flex-1 flex-col items-center justify-center gap-4 rounded-2xl border border-(--border)"
			style={{
				backgroundColor: winner === 'RED' ? 'var(--red)' : 'var(--blue)',
			}}
		>
			<button
				className="rounded-xl border border-(--border) bg-white p-3 font-bold uppercase"
				onClick={() => setWinner(null)}
			>
				Rejouer
			</button>

			<Exit action={() => navigate('/')} />
		</div>
	)
}
