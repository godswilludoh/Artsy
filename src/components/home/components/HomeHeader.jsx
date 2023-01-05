import React from 'react';
import { motion } from 'framer-motion';

const HomeHeader = () => {
	return (
		<header className='w-full mx-auto text-center text-pri-black '>
			<motion.h1
				animate={{ y: 30 }}
				className='font-display font-semibold text-6xl leading-relaxed'
			>
				Photography is poetry & <br /> beautiful untold stories
			</motion.h1>
			<p className='text-xl font-medium leading-normal'>
				Flip through more than 10,000 vintage shots, old photographs, historic{' '}
				<br />
				images and captures seamlessly in one place. Register to get top access.
			</p>
		</header>
	);
};

export default HomeHeader;
