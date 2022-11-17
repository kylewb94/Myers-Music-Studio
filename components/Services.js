export default function Services() {
	return (
		<div id='services' className='p-4 md:p-8 bg-slate-300/70 dark:bg-slate-800/30 border border-slate-300 dark:border-slate-100/5'>
			<dl className='grid grid-cols-2 md:grid-cols-4 gap-8 p-4 sm:p-8 mx-auto max-w-screen-xl  text-slate-900 dark:text-slate-50'>
				<div className='flex flex-col justify-center items-center'>
					<dt className='mb-2 text-3xl font-extrabold'>30-60m</dt>
					<dd className='text-slate-600 dark:text-slate-400'>Lessons</dd>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<dt className='mb-2 text-3xl font-extrabold'>All</dt>
					<dd className='text-slate-600 dark:text-slate-400'>Experience levels</dd>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<dt className='mb-2 text-3xl font-extrabold'>5y+</dt>
					<dd className='text-slate-600 dark:text-slate-400'>Teaching Portland</dd>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<dt className='mb-2 text-3xl font-extrabold'>10y+</dt>
					<dd className='text-slate-600 dark:text-slate-400'>Professional experience</dd>
				</div>
			</dl>
		</div>
	)
}