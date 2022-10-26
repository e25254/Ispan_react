import { useState } from 'react';
import './Menu.css';

function Menu() {
	const [show1, setShow1] = useState('');
	const [show2, setShow2] = useState('');
	const [show3, setShow3] = useState('');
	return (
		<>
			<ul>
				<li>
					<a
						href="#/"
						className={show1}
						onClick={(e) => {
							setShow1('active');
							setShow2('');
							setShow3('');
						}}
					>
						首頁
					</a>
				</li>
				<li>
					<a
						href="#/"
						className={show2}
						onClick={(e) => {
							setShow1('');
							setShow2('active');
							setShow3('');
						}}
					>
						關於我們
					</a>
				</li>
				<li>
					<a
						href="#/"
						className={show3}
						onClick={(e) => {
							setShow1('');
							setShow2('');
							setShow3('active');
						}}
					>
						產品
					</a>
				</li>
			</ul>
		</>
	);
}

export default Menu;
