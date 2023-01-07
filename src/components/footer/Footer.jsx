import React from 'react';
import { NavData } from '../../data/NavData';
import { NavLink } from 'react-router-dom';
import { FooterData } from '../../data/FooterData';
import { FaRegEnvelope } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

const Footer = () => {
	return (
		<footer>
			<div className='flex gap-4 justify-evenly text-sec-black '>
				<div className='mt-14'>
					<img src='/images/logo.png' alt='artsy logo' />
				</div>
				<div>
					{NavData.map((item, key) => (
						<h1 className='pb-4' key={key}>
							<NavLink to={item.link}>{item.text}</NavLink>
						</h1>
					))}
				</div>
				<div>
					{FooterData.map((item, key) => (
						<h1 className='pb-4' key={key}>
							<NavLink to={item.link}>{item.text}</NavLink>
						</h1>
					))}
				</div>
				<div>
					<div className='flex gap-4'>
						<FaRegEnvelope className='text-2xl' />
						<p className='pb-8'>artsystudios@gmail.com</p>
					</div>
					<div className='flex gap-4'>
						<GoLocation className='text-2xl' />
						<p>Lagos, Nigeria.</p>
					</div>
				</div>
			</div>
			<p className='text-center font-footer text-sec-black font-medium text-base opacity-50 mt-10'>
				Artsystudios © 2022. All Rights Reserved.
			</p>
		</footer>
	);
};

export default Footer;
