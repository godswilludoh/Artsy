import React from 'react';
import { NavData } from '../../data/NavData';
import NavPage from './NavPage';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const activeLink = 'underline';
	const normalLink = '';
	return (
		<>
			<nav className='flex text-pri-black justify-between items-center p-4 px-14'>
				<div className='space-x-11 middle'>
					<div className='items-center'>
						<img src='/images/logo.png' alt='artsy logo' />
					</div>
				</div>

				<div className='font-normal text-2xl flex gap-10 items-center '>
					{NavData.map((item, key) => (
						<h1 className='centered' key={key}>
							<NavLink
								to={item.link}
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								{item.text}
							</NavLink>
						</h1>
					))}
				</div>

				<div className='flex gap-10'>
					<img src='/images/search.png' alt='search icon' />
					<img src='/images/cart.png' alt='cart icon' />
					<img src='/images/bell.png' alt='notification icon' />
				</div>
			</nav>
			<NavPage />
		</>
	);
};

export default Navbar;
