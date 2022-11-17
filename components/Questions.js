import React, { useState } from 'react'

const Questions = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-3 md:px-5'>
			<h3 id='accordion-title'>
				<button className='flex items-center justify-between w-full py-5 text-left text-slate-500 border-b border-slate-200 dark:border-slate-100/5 dark:text-slate-400 cursor-pointer' onClick={() => setIsActive(!isActive)} aria-expanded='true' aria-controls='accordion-title'>
					<span className={isActive ? 'text-indigo-600 dark:text-indigo-400' : ''}>{title}</span>
					<span className={isActive ? 'text-indigo-600 dark:text-indigo-400' : ''}>{isActive ? '-' : '+'}</span>
				</button>
			</h3>
			{isActive && <p id='accordion-body' className='px-3 py-5 bg-indigo-50 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-50 border-b border-slate-200 dark:border-slate-100/5' aria-labelledby='accordion-title'>{content}</p>}
		</div>
	);
};

export default Questions;