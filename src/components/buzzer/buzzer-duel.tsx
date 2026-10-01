import { buzzerStore } from '@/store/buzzer.store'

const Color = (props: { color: 'RED' | 'BLUE'; click: () => void }) => {
	return (
		<div
			className="rounded-2xl border border-(--border) p-2"
			style={{
				backgroundColor: props.color === 'RED' ? 'var(--red)' : 'var(--blue)',
			}}
			onClick={() => props.click()}
		></div>
	)
}

export default function BuzzerDuel() {
	const { setWinner } = buzzerStore()

	return (
		<div className="grid flex-1 grid-cols-1 gap-4">
			<Color color="RED" click={() => setWinner('RED')} />

			<Color color="BLUE" click={() => setWinner('BLUE')} />
		</div>
	)
}
