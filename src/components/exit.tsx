import { useNavigate } from 'react-router-dom'

interface Props {
	action: () => void
}

export default function Exit(props: Props) {
	const navigate = useNavigate()

	return (
		<button
			className="rounded-xl border border-(--border) bg-white p-3 font-bold uppercase"
			onClick={() => {
				props.action()
				navigate('/')
			}}
		>
			Quitter
		</button>
	)
}
