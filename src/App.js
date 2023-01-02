import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<section className='mt-4'>
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		</section>
	);
}

export default App;
