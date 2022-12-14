import React from 'react';
import Footer from '../components/footer/Footer';
import Exhibition from '../components/home/components/Exhibition';
import Explore from '../components/home/components/Explore';
import HomeHeader from '../components/home/components/HomeHeader';
import Products from '../components/home/components/Products';
import { SliderImage } from '../components/home/components/SliderImage';
import Subscribe from '../components/home/components/Subscribe';
import TopCreators from '../components/home/components/TopCreators';

const Home = () => {
	return (
		<div className='my-8'>
			<HomeHeader />
			<section>
				<SliderImage />
				<Products />
				<Exhibition />
				<Explore />
				<TopCreators />
				<Subscribe />
				<Footer />
			</section>
		</div>
	);
};

export default Home;
