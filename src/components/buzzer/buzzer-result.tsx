import { useNavigate } from 'react-router-dom'

import { buzzerStore } from '@/store/buzzer.store'

import Button from '@/components/button'

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
			<Button label="Rejouer" style="light" action={() => setWinner(null)} />
			<Button label="Quitter" style="light" action={() => navigate('/')} />
		</div>
	)
}
