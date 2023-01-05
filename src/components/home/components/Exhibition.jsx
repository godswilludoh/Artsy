import React from 'react';

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
				<div className='bg-exhibition-Img bg-no-repeat bg-cover bg-center bg-fixed'>
					<div className='w-full flex text-pri-white px-56 pt-56 pb-20'>
						<p>01</p>
						<div>
							<p>MONALISA REDEFINED IN STYLE.</p>
							<p>Start on : 08:00 GTS . Monday </p>
							<p>
								GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
								INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
								HIGHEST AND LOWEST BIDS.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Exhibition;
