import React from 'react';

export const Progressbar = ({ progressPercentage }) => {
	return (
		<div className='h-1 w-1/5 bg-gray-300 ml-6 mt-10'>
			<div
				style={{ width: `${progressPercentage}%` }}
				className={`h-1/5 ${
					progressPercentage < 70 ? 'bg-[#AEAEAE]' : 'bg-green-600'
				}`}
			></div>
		</div>
	);
};
