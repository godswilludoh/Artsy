import React from 'react';
import { ExploreData } from '../../../data/ExploreData';

const Explore = () => {
	return (
		<div className='border-t-4'>
			{ExploreData.map((item, key) => {
				return (
					<div
						key={key}
						className='flex py-8 justify-around items-center font-bold text-2xl border-b-2'
					>
						<div> {item.text}</div>
						<div>
							<img src={item.image} alt='arrow3' />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Explore;
