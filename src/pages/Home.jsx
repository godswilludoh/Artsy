import React from 'react';
import Exhibition from '../components/home/components/Exhibition';
import HomeHeader from '../components/home/components/HomeHeader';
import Products from '../components/home/components/Products';
import { SliderImage } from '../components/home/components/SliderImage';

const Home = () => {
	return (
		<>
			<HomeHeader />
			<section>
				<SliderImage />
				<Products />
				<Exhibition />
			</section>
		</>
	);
};

export default Home;
