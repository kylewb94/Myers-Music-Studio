import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});
	const [inputs, setInputs] = useState({
		email: '',
		message: '',
	});
	const handleServerResponse = (ok, msg) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
			setInputs({
				email: '',
				message: '',
			});
		} else {
			setStatus({
				info: { error: true, msg: msg },
			});
		}
	};
	const handleOnChange = (e) => {
		e.persist();
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		axios({
			method: 'POST',
			url: 'https://formspree.io/f/xjvzodyy',
			data: inputs,
		})
			.then((response) => {
				handleServerResponse(
					true,
					'Thank you, your message has been submitted.'
				);
			})
			.catch((error) => {
				handleServerResponse(false, error.response.data.error);
			});
	};

	return (
		<div id='contact' className='max-w-7xl mx-auto px-4 sm:px-3 md:px-5 mb-24 md:mb-36'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 p-8 md:p-12 rounded-lg border-2 border-slate-200 dark:border-slate-100/5 shadow-xl hover:shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/60 transition-all motion-reduce:transition-none'>
				<div className='order-1 md:order-2'>
					<h2 className='text-slate-900 dark:text-slate-50'>Get started</h2>
					<p className='mt-4 md:mt-8 text-lg md:text-xl'>Your first half-hour lesson is free. This a chance for me to assess you skills and needs and for you to decide if you want to continue.</p>
					<hr class='my-6 sm:mx-auto lg:my-8 border-slate-300' />
					<p className='mt-2 md:mt-8 text-lg md:text-xl'>I recommend students 12 and older or intermediate and beyond opt for 1 hour lessons to facilitate more comprehensive learning.</p>
				</div>
				<form
					id='contact'
					onSubmit={handleOnSubmit}
					className='order-2 md:order-1 mt-8 md:mt-0'
				>
					{/* Honeypot */}
					<input type='text' name='_gotcha' className='hidden' />
					{/* Name */}
					<label htmlFor='name' className='block'>Full name</label>
					<input
						id='name'
						type='text'
						name='name'
						onChange={handleOnChange}
						required
						value={inputs.name}
						className='mt-0 block w-full px-0.5 bg-slate-50 dark:bg-slate-900 border-0 border-b-2 border-slate-300 dark:border-slate-700 focus:ring-0 focus:bg-slate-200 autofill:bg-slate-200 dark:focus:bg-slate-800 dark:autofill:bg-slate-800 focus:border-indigo-700 dark:focus:border-indigo-400' />
					{/* Email */}
					<label htmlFor='email' className='block mt-8'>Email address</label>
					<input
						id='email'
						type='email'
						name='email'
						onChange={handleOnChange}
						required
						value={inputs.email}
						className='mt-0 block w-full px-0.5 bg-slate-50 dark:bg-slate-900 border-0 border-b-2 border-slate-300 dark:border-slate-700 focus:ring-0 focus:bg-slate-200 autofill:bg-slate-200 dark:focus:bg-slate-800 dark:autofill:bg-slate-800 focus:border-indigo-700 dark:focus:border-indigo-400' />
					{/* Instrument */}
					<fieldset className='block mt-8'>
						<legend>Instrument</legend>
						<div className='mt-2 flex'>
							<div className='w-1/2 sm:w-1/3'>
								<input
									id='voice'
									type='checkbox'
									name='instrument[]'
									onChange={handleOnChange}
									value={inputs.voice}
									className='bg-slate-50 dark:bg-slate-400/10 text-indigo-700 dark:text-indigo-400 focus:ring-indigo-700 dark:focus:ring-indigo-400' />
								<label htmlFor='voice' className='inline-flex items-center'>
									<span className="after:content-['\1F3A4'] after:ml-2 ml-2">Voice</span>
								</label>
							</div>
							<div className='w-1/2 sm:w-1/3'>
								<input
									id='piano'
									type='checkbox'
									name='instrument[]'
									onChange={handleOnChange}
									value={inputs.piano}
									className='bg-slate-50 dark:bg-slate-400/10 text-indigo-700 dark:text-indigo-400 focus:ring-indigo-700 dark:focus:ring-indigo-400' />
								<label htmlFor='piano' className='inline-flex items-center'>
									<span className="after:content-['\1F3B9'] after:ml-2 ml-2">Piano</span>
								</label>
							</div>
						</div>
					</fieldset>
					{/* Age */}
					<label htmlFor='age' className='block mt-8'>Student&apos;s age</label>
					<input
						id='age'
						type='number'
						name='age'
						onChange={handleOnChange}
						required
						value={inputs.age}
						className='mt-0 block w-full px-0.5 bg-slate-50 dark:bg-slate-900 border-0 border-b-2 border-slate-300 dark:border-slate-700 focus:ring-0 focus:bg-slate-200 autofill:bg-slate-200 dark:focus:bg-slate-800 dark:autofill:bg-slate-800 focus:border-indigo-700 dark:focus:border-indigo-400' />
					{/* Textarea */}
					<label htmlFor='message' className="block mt-8 after:content-['\1F914'] after:ml-2">Questions, comments, concerns?</label>
					<textarea
						id='message'
						name='message'
						onChange={handleOnChange}
						required
						value={inputs.message}
						rows='3'
						className='mt-0 block w-full px-0.5 bg-slate-50 dark:bg-slate-900 border-0 border-b-2 border-slate-300 dark:border-slate-700 focus:ring-0 focus:bg-slate-200 autofill:bg-slate-200 dark:focus:bg-slate-800 dark:autofill:bg-slate-800 focus:border-indigo-700 dark:focus:border-indigo-400'>
					</textarea>
					{/* Digital check */}
					<div className='flex items-center mt-8'>
						<input
							id='digital'
							type='checkbox'
							name='digital[]'
							onChange={handleOnChange}
							value={inputs.digital}
							className='bg-slate-50 dark:bg-slate-900 text-indigo-700 dark:text-indigo-400 focus:ring-indigo-700 dark:focus:ring-indigo-400' />
						<label htmlFor='digital' className='inline-flex items-center'>
							<span className='ml-2'>Are you interested in digital lessons?</span>
						</label>
					</div>
					{/* Submit */}
					<div className='inline-flex items-center flex-wrap sm:flex-nowrap gap-4 sm:gap-0'>
						<button
							type='submit'
							disabled={status.submitting}
							className='mt-8 px-8 py-3 md:py-4 md:px-10 rounded md:text-lg bg-indigo-700 hover:bg-indigo-900 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-indigo-50'
						>
							{!status.submitting
								? !status.submitted
									? 'Submit'
									: 'Submitted'
								: 'Submitting...'}
						</button>
						{status.info.error && (
							<div className='error ml-0 sm:ml-4'>Error: {status.info.msg}</div>
						)}
						{!status.info.error && status.info.msg && <p className="ml-0 sm:ml-4 after:content-['\1F48C'] after:ml-2">{status.info.msg}</p>}
					</div>
				</form>
			</div>
		</div>
	)
}