import React from 'react';
import './TimeTravel_Hotel.css';
import Navbar from './NavBar/NavBar';
import Carousel from './Carousel/Carousel';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Rate from './Rate/Rate';
import IconBar from './IconBar/IconBar';
import ShowPic from './ShowPic/ShowPic';

function TimeTravel_Hotel() {
	return (
		<>
			<Navbar />

			<div className="container">
				<Carousel />
				<Breadcrumb />
				<h2 style={{ color: '#4D4D4D', marginBottom: '20px' }}>
					{/* TODO:拿到真實名稱 */}路境行旅(Finders Hotel)
				</h2>
				<Rate />
				<IconBar />
				<h4 style={{ color: '#59d8a1' }}>{/* TODO:拿到真實價格 */}TWD$599</h4>
				<h4 style={{ color: '#4D4D4D', margin: '20px 0px' }}>房型介紹</h4>
				<ShowPic />
			</div>
		</>
	);
}

export default TimeTravel_Hotel;
