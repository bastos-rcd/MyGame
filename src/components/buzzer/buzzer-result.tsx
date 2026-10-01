import { useNavigate } from 'react-router-dom'

import { buzzerStore } from '@/store/buzzer.store'

const Button = (props: { label: string; click: () => void }) => {
	return (
		<button
			className="rounded-xl border border-(--border) bg-white p-3 text-xl font-bold uppercase"
			onClick={() => props.click()}
		>
			{props.label}
		</button>
	)
}

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
			<Button label="Rejouer" click={() => setWinner(null)} />
			<Button label="Quitter" click={() => navigate('/')} />
		</div>
	)
}
