import { undercoverStore } from '@/store/undercover.store'

import UndercoverStart from '@/components/undercover/undercover-start'

export default function Undercover() {
	const { status } = undercoverStore()

	if (!status) {
		return <UndercoverStart />
	}

	return <>UNDERCOVER</>
}
