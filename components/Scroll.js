import { useEffect } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

export default function Scroll() {
	return (
		<button
			onClick={() => {
				window.scrollTo({ top: 0, left: 0 });
			}}
			className='z-10 inline-flex items-center justify-center fixed right-6 bottom-6 p-2 sm:p-4 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-50 border border-slate-300 dark:border-slate-100/5 hover:shadow-lg hover:shadow-indigo-500/40'
		>
			<ChevronUpIcon className='h-4 w-4 sm:h-6 sm:w-6' />
		</button>
	)
}