import React from 'react';

const Subscribe = () => {
	return (
		<div className='w-11/12 my-24 m-auto border-solid border-2 border-[#1E1E1E] text-center py-6'>
			<p className='uppercase text-sec-black mt-10 font-subscribe text-2xl font-normal'>
				NewsLetter
			</p>
			<p className='mt-4 text-2xl font-normal'>
				Subscribe to get daily updates on new drops & exciting deals{' '}
			</p>
			<div className='flex justify-center justify-items-center content-center gap-4 my-4 '>
				<input
					className='border-solid border-2 py-2 px-14 border-sec-black uppercase outline-none'
					placeholder='Enter your Email'
				/>

				<button className='uppercase bg-sec-black text-pri-white px-6'>
					Subscribe
				</button>
			</div>
		</div>
	);
};

export default Subscribe;
