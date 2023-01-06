import React from 'react';
import { Progressbar } from './Progressbar';

const Exhibition = () => {
	return (
		<div className='w-full h-5/6 bg-exhibition-gradient'>
			<div className='w-10/12 mx-32 my-32'>
				<div className='my-6'>
					<h1 className='text-pri-white font-medium text-2xl mb-2 pt-6'>
						See Upcoming Auctions and Exhibitions
					</h1>
					<img src='images/arrow2.png' alt='arrow' />
				</div>
				<div className='bg-exhibition-Img bg-no-repeat bg-auto bg-center'>
					<div className='w-full flex gap-4 text-pri-white px-20 pt-64 pb-20'>
						<div className='grid'>
							<span className='ml-8 mt-1'>
								<img className='block' src='/images/ellipse.png' />
							</span>
							<p className='font-exhibition font-normal text-5xl mt-2 text-[#E1E1E1]'>
								01
							</p>
						</div>

						<div>
							<div className='flex gap-2 content-start items-start font-exhibition text-xl font-extralight mb-2'>
								<span>
									MONALISA REDEFINED
									<br /> IN STYLE.
								</span>
							</div>
							<p className='font-exhibition2 mb-2 text-xs font-extralight uppercase'>
								Start on : 08:00 GTS . Monday{' '}
							</p>
							<p className='text-xs font-normal'>
								GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH{' '}
								<br />
								INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR <br />
								HIGHEST AND LOWEST BIDS.
							</p>
						</div>

						<div className='flex items-center gap-5 mt-24 ml-32'>
							<div>
								<button className='underline'>See more</button>
							</div>
							<div>
								<button className='border-solid border-2 border-pri-white rounded-lg w-32 h-12'>
									Set a reminder
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='flex justify-between my-4'>
					<Progressbar bgcolor='orange' progress='30' height={30} />
					<img src='/images/exhibitarrow.png' />
				</div>
			</div>
		</div>
	);
};

export default Exhibition;
