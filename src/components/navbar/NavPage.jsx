import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auctions from '../../pages/Auctions';
import Drop from '../../pages/Drop';
import Home from '../../pages/Home';
import Marketplace from '../../pages/Marketplace';

const NavPage = () => {
	return (
		<>
			<section>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/market' element={<Marketplace />} />
					<Route path='/auctions' element={<Auctions />} />
					<Route path='/drop' element={<Drop />} />
				</Routes>
			</section>
		</>
	);
};

export default NavPage;
