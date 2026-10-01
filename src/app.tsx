import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '@/pages/home'

import Buzzer from '@/pages/buzzer'
import Undercover from '@/pages/undercover'

export default function App() {
	return (
		<Router>
			<main className="pt-safe pb-safe pl-safe pr-safe mx-auto flex h-dvh w-full max-w-lg flex-col">
				<div className="flex flex-1 flex-col gap-4 overflow-hidden p-4">
					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/buzzer" element={<Buzzer />} />
						<Route path="/undercover" element={<Undercover />} />
					</Routes>
				</div>
			</main>
		</Router>
	)
}
