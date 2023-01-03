import React from 'react';
import HomeHeader from '../components/home/components/HomeHeader';
import { SliderImage } from '../components/home/components/SliderImage';

const Home = () => {
	return (
		<>
			<HomeHeader />
			<section>
				<SliderImage />
			</section>
		</>
	);
};

export default Home;
