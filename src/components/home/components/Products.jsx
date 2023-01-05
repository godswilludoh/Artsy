import React from 'react';
import { ProductsData } from '../../../data/ProductsData';

const Products = () => {
	return (
		<div className='w-10/12 mx-32 my-32 text-sec-black'>
			<p className='font-medium text-4xl mb-8 '>Featured products</p>
			<div className=''>
				{ProductsData.map((item, key) => {
					return (
						<div key={key} className='border-t-4 mb-8'>
							{item.reverse}
							<div className='flex gap-8 mt-8'>
								<img src={item.image} alt='boolean images' />
								<div className='font-heading'>
									<h1 className='font-bold text-2xl mb-4'>{item.title}</h1>
									<p className='font-normal mb-4'>{item.text}</p>
									<div className='flex gap-4 align-middle items-center'>
										<img src={item.avatar} alt='avatar images' />
										<p className='font-medium text-lg'>{item.creators}</p>
										<img src={item.arrow} alt='text arrow' />
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Products;
