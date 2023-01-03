import React from 'react';
import { motion } from 'framer-motion';
import { ImageData } from '../../../data/ImageData';

export const SliderImage = () => {
	return (
		<div>
			<motion.div>
				<motion.div drag='x' className='flex gap-10 mx-32 my-32'>
					{ImageData.map((item, key) => {
						return (
							<motion.div key={key} className='flex'>
								<img src={item.image} alt='carousel images' />
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
};
