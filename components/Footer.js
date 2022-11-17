import Image from 'next/future/image'
import logo from '../public/logo.svg'

export default function Footer() {
	return (
		<footer className='max-w-7xl mx-auto p-4 sm:p-6 mt-24 md:mt-36'>
			<div className='md:flex md:justify-between'>
				<div className='mb-6 md:mb-0'>
					<a href='#'>
						<span className='sr-only'>Myers Music Studio</span>
						<Image
							alt='Myers Music Studio Logo'
							className='h-8 w-auto sm:h-10 fill-indigo-400 stroke-indigo-400'
							src={logo}
							width={100}
							height={100}
						/>
					</a>
				</div>
				<div className='grid grid-cols-2 gap-8'>
					<div>
						<h2 className='mb-6 text-sm uppercase text-slate-800 dark:text-slate-200'>Resources</h2>
						<ul className='text-slate-600 dark:text-slate-400'>
							<li className='mb-4'>
								<a href='https://www.halleonard.com/search/editor/68464/joan-frey-boytim?dt=item#products' target='_blank' rel='noreferrer' className='hover:underline'>Boytim Vocal Collections</a>
							</li>
							<li>
								<a href='https://www.alfred.com/alfreds-basic-piano-library/' target='_blank' rel='noreferrer' className='hover:underline'>Alfred&apos;s Basic Piano Library</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='mb-6 text-sm uppercase text-slate-800 dark:text-slate-200'>Leave a review</h2>
						<ul className='text-slate-600 dark:text-slate-400'>
							<li className='mb-4'>
								<a href='https://g.page/r/CUn7KXaudZJ3EBI/review' target='_blank' rel='noreferrer' className='hover:underline'>Google</a>
							</li>
							<li className='mb-4'>
								<a href='https://www.facebook.com/myersmusicstudio/reviews/' target='_blank' rel='noreferrer' className='hover:underline'>Facebook</a>
							</li>
							<li>
								<a href='https://www.yelp.com/biz/myers-music-studio-tigard?osq=Myers+Music+Studio' target='_blank' rel='noreferrer' className='hover:underline'>Yelp</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className='my-6 sm:mx-auto lg:my-8 border-slate-300' />
			<div className='sm:flex sm:items-center sm:justify-between'>
				<span className='text-sm text-slate-500 sm:text-center dark:text-slate-400'>© {new Date().getFullYear()} <a href='https://myersmusiclessons.com/' target='_blank' rel='noreferrer' className='hover:underline'>Myers Music Studio</a>. All Rights Reserved.
				</span>
				<div className='flex sm:justify-center mt-4 sm:mt-0'>
					<a href='https://www.facebook.com/myersmusicstudio' target='_blank' rel='noreferrer' className='text-slate-500 hover:text-slate-900 dark:hover:text-white'>
						<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'><path fill-rule='evenodd' d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' clip-rule='evenodd'></path></svg>
						<span className='sr-only'>Facebook page</span>
					</a>
				</div>
			</div>
		</footer>
	)
}