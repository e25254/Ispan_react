import LogoImage from './logo.svg';

import { imgUrl } from '../config';

function ImageDemo() {
	return (
		<>
			<h1>圖片使用說明</h1>
			<hr />
			<p>1. 直接用`import`放在src目錄</p>
			<img src={LogoImage} alt="" width="100" height="100" />
			<p>2. 放在public目錄中，用絕對網址存取</p>
			<img
				// 套用config/index.js中的設定值
				src={`${imgUrl}/logo192.png`}
				alt=""
				width="100"
				height="100"
			/>
			<img
				//  套用 .env檔中的設定值
				src={`${process.env.REACT_APP_DEV_URL}/logo192.png`}
				alt=""
				width="100"
				height="100"
			/>
		</>
	);
}

export default ImageDemo;
