import { Carousel } from 'antd';
import React from 'react';
import pic1 from './pic/1-1.jpg';
import pic2 from './pic/1-2.jpg';
import pic3 from './pic/1-3.jpg';
import pic4 from './pic/1-4.jpg';
// const contentStyle = {
// 	height: '360px',
// 	color: '#fff',
// 	lineHeight: '160px',
// 	textAlign: 'center',
// 	background: '#364d79',
// };
const CarouselPic = {
	width: '100%',
	height: '360px',
	display: 'flex',
	justifyContent: 'center',
};
const App = () => (
	<Carousel autoplay>
		<div>
			<img style={CarouselPic} src={pic1}></img>
		</div>
		<div>
			<img style={CarouselPic} src={pic2}></img>
		</div>
		<div>
			<img style={CarouselPic} src={pic3}></img>
		</div>
		<div>
			<img style={CarouselPic} src={pic4}></img>
		</div>
	</Carousel>
);
export default App;
