import Image from 'next/future/image'
import { testimonialsData } from '@/utils/content'

export default function Testimonials() {
	return (
		<div id='testimonials' className='bg-light-pattern dark:bg-dark-pattern bg-fixed'>
			<div className='bg-gradient-to-t from-slate-50 dark:from-slate-900 to-slate-300/40 dark:to-black/40'>
				<div className='max-w-7xl mx-auto px-4 sm:px-3 md:px-5'>
					<ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 md:mb-28 pt-12 md:pt-20'>
						<h2 className='sr-only'>Testimonials</h2>
						{testimonialsData.map(({ profile, name, instrument, content }) => (
							<li key={name.id} className='text-sm leading-6'>
								<figure className='relative flex flex-col-reverse p-6 rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-100/5'>
									<blockquote className='mt-6 text-slate-700 dark:text-slate-300'>
										<p>{content}</p>
									</blockquote>
									<figcaption className='flex items-center space-x-4'>
										<Image
											alt='Profile picture'
											className='flex-none w-14 h-14 rounded-full object-cover'
											src={profile}
											width={100}
											height={100}
										/>
										<div className='flex-auto'>
											<div className='text-base text-slate-900 font-semibold dark:text-slate-300'>
												{name}
											</div>
											<div className='mt-0.5'>
												{instrument}
											</div>
										</div>
									</figcaption>
								</figure>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}