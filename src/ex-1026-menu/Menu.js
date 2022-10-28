import { useState } from 'react';
import './Menu_css.css';
function Menu() {
	const [activeIndex, setActiveIndex] = useState(-1);
	const menuItems = ['首頁', '關於我們', '產品'];
	return (
		<>
			<ul className="Menu_ul">
				{menuItems.map((v, i) => {
					return (
						<li
							key={i}
							onClick={() => {
								setActiveIndex(i);
							}}
						>
							<a href="#/" className={`${activeIndex === i ? 'active' : ''} ${`Menu_a`}`}>
								{v}
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
}
export default Menu;
