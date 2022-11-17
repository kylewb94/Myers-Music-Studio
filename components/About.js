import Image from 'next/image'
import profile from '../public/profile.jpg'

export default function About() {
	return (
		<div className='bg-slate-300/40 dark:bg-black/40 py-16 md:py-24'>
			<div className='max-w-7xl mx-auto px-4 sm:px-3 md:px-5 flex flex-col items-center sm:flex-row sm:justify-evenly'>
				<div className='flex sm:basis-1/4 md:basis-1/4 p-12 sm:p-0'>
					<Image
						src={profile}
						alt='Daniel Myers'
						className='rounded-full'
					/>
				</div>
				<div className='flex flex-col flex-nowrap sm:basis-1/2 md:basis-1/3'>
					<h2 className='mb-3 text-slate-900 dark:text-slate-50'>Daniel Myers</h2>
					<h3 className='mb-5 text-slate-800 dark:text-slate-200'>I&apos;m invested in your potential</h3>
					<ul role='list' className='space-y-4 text-slate-500 dark:text-slate-300'>
						<li className='flex space-x-2'>
							<span className="before:content-['\1F3EB'] before:mr-2">Supportive, personalized teaching</span>
						</li>
						<li className='flex space-x-2'>
							<span className="before:content-['\1F3B6'] before:mr-2">Healthy &amp; expressive technique</span>
						</li>
						<li className='flex space-x-2'>
							<span className="before:content-['\1F4D2'] before:mr-2">Structured lesson plans</span>
						</li>
						<li className='flex space-x-2'>
							<span className="before:content-['\2728'] before:mr-2">LGBTQIA+ affirming</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}