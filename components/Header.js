import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/future/image'
import logo from '../public/logo.svg'

const navigation = [
	{ name: 'Services', href: '#services' },
	{ name: 'Testimonials', href: '#testimonials' },
	{ name: 'FAQ', href: '#questions' },
	{ name: 'Free Lesson', href: '#contact' },
]

export default function Header() {
	return (
		<div className='relative overflow-hidden'>
			<div className='mx-auto max-w-7xl'>
				<div className='relative z-10 bg-slate-50 dark:bg-slate-900 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32'>
					<svg
						className='absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform lg:block fill-slate-50 dark:fill-slate-900'
						viewBox='0 0 100 100'
						preserveAspectRatio='none'
						aria-hidden='true'
					>
						<polygon points='50,0 100,0 50,100 0,100' />
					</svg>

					<Popover>
						<div className='relative px-4 pt-6 sm:px-6 lg:px-8'>
							<nav className='relative flex items-center justify-between sm:h-10 lg:justify-start' aria-label='Global'>
								<div className='flex flex-shrink-0 flex-grow items-center lg:flex-grow-0'>
									<div className='flex w-full items-center justify-between md:w-auto'>
										<a href='#'>
											<span className='sr-only'>Myers Music Studio</span>
											<Image
												alt='Myers Music Studio Logo'
												className='h-8 w-auto sm:h-10'
												src={logo}
												width={100}
												height={100}
											/>
										</a>
										<div className='-mr-2 flex items-center md:hidden'>
											<Popover.Button className='inline-flex items-center justify-center p-2 text-slate-700 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-900 dark:focus:ring-slate-400'>
												<span className='sr-only'>Open main menu</span>
												<Bars3Icon className='h-6 w-6' aria-hidden='true' />
											</Popover.Button>
										</div>
									</div>
								</div>
								<div className='hidden md:ml-10 md:block md:space-x-8 md:pr-4'>
									{navigation.map((item) => (
										<a key={item.name} href={item.href} className='text-lg text-slate-500 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-400'>
											{item.name}
										</a>
									))}
								</div>
							</nav>
						</div>

						<Transition
							as={Fragment}
							enter='duration-150 ease-out'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='duration-100 ease-in'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Popover.Panel
								focus
								className='absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden'
							>
								<div className='overflow-hidden bg-slate-50 dark:bg-slate-800 shadow-md ring-1 ring-slate-900 ring-opacity-5'>
									<div className='flex items-center justify-between px-5 pt-4'>
										<div>
											<Image
												alt='Myers Music Studio Logo'
												className='h-8 w-auto stroke-indigo-400'
												src={logo}
												width={100}
												height={100}
											/>
										</div>
										<div className='-mr-2'>
											<Popover.Button className='inline-flex items-center justify-center p-2 text-slate-700 hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-900 dark:focus:ring-slate-400'>
												<span className='sr-only'>Close main menu</span>
												<XMarkIcon className='h-6 w-6' aria-hidden='true' />
											</Popover.Button>
										</div>
									</div>
									<div className='space-y-1 px-2 pt-2 pb-3'>
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className='block px-3 py-2 font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-200 dark:text-slate-50 dark:hover:text-slate-400 dark:hover:bg-slate-700'
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>

					<div className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 sm:text-center lg:text-left'>
						<h1 className='font-display font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-slate-50'>
							Personalized lessons<br />for voice &amp; piano
						</h1>
						<p className='sm:max-w-xl mt-3 sm:mt-5 md:mt-5 sm:mx-auto lg:mx-0 sm:text-lg md:text-xl'>
							Myers Music Studio offers private voice and piano lessons for all ages, ability levels, and needs. From kindergarten to hobbyist, Myers Music Studio will help you grow into the musician you want to be.
						</p>
						<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
							<div className='rounded shadow'>
								<a
									href='#contact'
									className='flex w-full items-center justify-center md:py-4 md:px-10 px-8 py-3 rounded md:text-lg bg-indigo-700 hover:bg-indigo-900 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-indigo-50'
								>
									Free Lesson
								</a>
							</div>
							<div className='mt-3 sm:mt-0 sm:ml-3'>
								<a
									href='#questions'
									className='flex w-full items-center justify-center px-8 py-3 md:py-4 md:px-10 md:text-lg text-slate-900 dark:text-slate-50 hover:underline'
								>
									Questions?
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
				<Image
					className='h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full drop-shadow-xl'
					src='https://images.unsplash.com/photo-1475275166152-f1e8005f9854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80'
					alt='Person playing piano'
					width={2400}
					height={1596}
					priority
				/>
			</div>
		</div>
	)
}
