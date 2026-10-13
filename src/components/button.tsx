interface Props {
	label: string
	style: 'default' | 'light' | 'dark'
	action?: () => void
	type?: 'button' | 'submit' | 'reset'
	disabled?: boolean
}

const styles = {
	default: {
		color: 'var(--text)',
		backgroundColor: 'var(--surface)',
		borderColor: 'var(--border)',
	},
	light: {
		color: 'var(--text)',
		backgroundColor: 'white',
		borderColor: 'var(--border)',
	},
	dark: {
		color: 'white',
		backgroundColor: 'var(--text)',
		borderColor: 'var(--text)',
	},
}

export default function Button(props: Props) {
	return (
		<button
			className="rounded-2xl border p-3 font-bold uppercase disabled:opacity-50"
			type={props.type}
			style={styles[props.style]}
			disabled={props.disabled}
			onClick={props.action}
		>
			{props.label}
		</button>
	)
}
