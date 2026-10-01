import { useNavigate } from 'react-router-dom'

interface Props {
	name: string
	cover: string
	link: string
}

export default function HomeCard(props: Props) {
	const navigate = useNavigate()

	return (
		<div
			className="flex h-fit flex-col items-center justify-center gap-2 rounded-xl border border-(--border) bg-white p-2"
			onClick={() => navigate(props.link)}
		>
			<img className="rounded-t-lg" src={`/games/${props.cover}`} />

			<h1 className="text-center font-bold uppercase">{props.name}</h1>
		</div>
	)
}
