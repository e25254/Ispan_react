import React from 'react';
import './TimeTravel_Hotel.css';
import Navbar from './NavBar/NavBar';
import Carousel from './Carousel/Carousel';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Rate from './Rate/Rate';
import IconBar from './IconBar/IconBar';
import ShowPic from './ShowPic/ShowPic';
import HotelNotice from './HotelNotice/HotelNotice';
import HotelDetail from './HotelDetail/HotelDetail';
import Comment from './Comment/Comment';
import MapButton from './MapButton/MapButton';
import CommentSelector from './Comment/CommentSelector';
import BottomBar from './BottomBar/BottomBar';

function TimeTravel_Hotel() {
	return (
		<>
			<Navbar />
			<BottomBar />
			<Carousel />
			<div className="container">
				<Breadcrumb />
				<h2 style={{ color: '#4D4D4D', marginBottom: '20px' }}>
					{/* TODO:拿到真實名稱 */}路境行旅(Finders Hotel)
				</h2>
				<Rate />
				<IconBar />
				<h4 style={{ color: '#59d8a1', fontSize: '22px', marginBottom: '80px' }}>
					{/* TODO:拿到真實價格 */}TWD$599
				</h4>

				<h2 style={{ color: '#4D4D4D', margin: '30px 0px' }}>房型介紹</h2>
				<ShowPic />
				<h2 style={{ color: '#4D4D4D', margin: '30px 0px', marginTop: '80px' }}>
					注意事項
				</h2>
				<HotelNotice />
				<h2 style={{ color: '#4D4D4D', margin: '30px 0px', marginTop: '80px' }}>
					商品說明
				</h2>
				<HotelDetail />
				<MapButton />

				<div className="d-flex" style={{ alignItems: 'center' }}>
					<h2 style={{ color: '#4D4D4D', margin: '30px 0px', marginRight: 'auto' }}>
						旅客評價
					</h2>
					<CommentSelector />
				</div>
				<Comment />
			</div>
		</>
	);
}

export default TimeTravel_Hotel;
