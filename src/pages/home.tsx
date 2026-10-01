import HomeCard from '@/components/home/home-card'

const GAMES = [
	{
		name: 'Buzzer',
		cover: 'buzzer.webp',
		link: '/buzzer',
	},
	{
		name: 'Undercover',
		cover: 'undercover.webp',
		link: '/undercover',
	},
]

export default function Home() {
	return (
		<div className="no-scrollbar grid grid-cols-2 gap-4 overflow-y-auto">
			{GAMES.map((game, index) => (
				<HomeCard
					key={index}
					name={game.name}
					cover={game.cover}
					link={game.link}
				/>
			))}
		</div>
	)
}
