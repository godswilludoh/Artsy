import React from 'react';
import Exhibition from '../components/home/components/Exhibition';
import Explore from '../components/home/components/Explore';
import HomeHeader from '../components/home/components/HomeHeader';
import Products from '../components/home/components/Products';
import { SliderImage } from '../components/home/components/SliderImage';
import TopCreators from '../components/home/components/TopCreators';

const Home = () => {
	return (
		<>
			<HomeHeader />
			<section>
				<SliderImage />
				<Products />
				<Exhibition />
				<Explore />
				<TopCreators />
			</section>
		</>
	);
};

export default Home;
