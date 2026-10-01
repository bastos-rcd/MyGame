interface Props {
	label: string
	style: 'default' | 'light' | 'dark'
	action: () => void
}

export default function Button(props: Props) {
	return (
		<button
			className="rounded-2xl border p-3 font-bold uppercase"
			style={{
				color:
					props.style === 'default'
						? 'var(--text)'
						: props.style === 'light'
							? 'var(--text)'
							: props.style === 'dark'
								? 'white'
								: '',
				backgroundColor:
					props.style === 'default'
						? 'var(--surface)'
						: props.style === 'light'
							? 'white'
							: props.style === 'dark'
								? 'var(--text)'
								: '',
				borderColor:
					props.style === 'default'
						? 'var(--border)'
						: props.style === 'light'
							? 'var(--border)'
							: props.style === 'dark'
								? 'var(--text)'
								: '',
			}}
			onClick={() => props.action()}
		>
			{props.label}
		</button>
	)
}
