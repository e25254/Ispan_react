import { DatePicker, Space } from 'antd';
import './App_DatePicker.css';
import React, { useState } from 'react';
import moment from 'moment/moment';
import locale from 'antd/es/date-picker/locale/zh_TW';
const { RangePicker } = DatePicker;
const App_DatePicker = () => {
	let today = moment(new Date()).format('YYYY-MM-DD');
	let tomorrow = new Date(today);
	tomorrow = moment(tomorrow.setDate(tomorrow.getDate() + 1)).format('YYYY-MM-DD');
	// console.log(today);
	// console.log(tomorrow);
	const [pickDate, setPickDate] = useState({
		startTime: today,
		endTime: tomorrow,
		days: 1,
	});
	// const onPanelChange = (value, mode) => {
	// 	console.log(value.format('YYYY-MM-DD'), mode);
	// };
	// console.log(today);
	return (
		<>
			<Space direction="vertical" size={12}>
				<RangePicker
					locale={locale}
					bordered
					format="YYYY-MM-DD"
					onChange={(e) => {
						moment.locale('zh-tw');
						let start = moment(e[0]._d).format('YYYY-MM-DD');
						let end = moment(e[1]._d).format('YYYY-MM-DD');
						let howLong = (+new Date(end) - +new Date(start)) / 86400000;
						// console.log(howLong);
						setPickDate({
							startTime: start,
							endTime: end,
							days: howLong,
						});
					}}
					value={[moment(pickDate.startTime), moment(pickDate.endTime)]}
				/>
			</Space>
			<input value={pickDate.startTime} readOnly />
			<input value={pickDate.endTime} readOnly />
			<input value={pickDate.days + '晚'} readOnly />
			<div className="DatePicker_BigBox">
				<div className="range_picker">
					<h3>日期</h3>
				</div>
				<Space direction="vertical" size={12} className={'hiddenBox'}>
					<RangePicker
						open={true}
						className={'noShow'}
						locale={locale}
						bordered
						format="YYYY-MM-DD"
						onChange={(e) => {
							moment.locale('zh-tw');
							let start = moment(e[0]._d).format('YYYY-MM-DD');
							let end = moment(e[1]._d).format('YYYY-MM-DD');
							let howLong = (+new Date(end) - +new Date(start)) / 86400000;
							// console.log(howLong);
							setPickDate({
								startTime: start,
								endTime: end,
								days: howLong,
							});
						}}
						value={[moment(pickDate.startTime), moment(pickDate.endTime)]}
						popupClassName={'hiddenBox'}
					/>
				</Space>
			</div>
			<div>
				<input
					type="date"
					onChange={(e) => {
						// console.log(e.target.value);
						let start = e.target.value;
						// console.log('start', +new Date(start));
						// console.log('end', +new Date(pickDate.endTime));
						if (+new Date(pickDate.endTime) >= +new Date(start)) {
							let howLong =
								(+new Date(pickDate.endTime) - +new Date(start)) / 86400000;
							setPickDate({
								startTime: start,
								endTime: pickDate.endTime,
								days: howLong,
							});
						} else if (+new Date(pickDate.endTime) < +new Date(start)) {
							let howLong =
								(+new Date(start) - +new Date(pickDate.endTime)) / 86400000;
							setPickDate({
								startTime: pickDate.endTime,
								endTime: start,
								days: howLong,
							});
						}
						// setPickDate({ startTime: start });
					}}
					// placeholder={'請選擇日期'}
					value={pickDate.startTime !== today ? pickDate.startTime : today}
				/>
				<input
					type="date"
					onChange={(e) => {
						// console.log(e.target.value);
						let end = e.target.value;
						// console.log('start', +new Date(start));
						// console.log('end', +new Date(pickDate.endTime));
						if (+new Date(end) >= +new Date(pickDate.startTime)) {
							let howLong =
								(+new Date(end) - +new Date(pickDate.startTime)) / 86400000;
							setPickDate({
								startTime: pickDate.startTime,
								endTime: end,
								days: howLong,
							});
						} else if (+new Date(end) < +new Date(pickDate.startTime)) {
							let howLong =
								(+new Date(pickDate.startTime) - +new Date(end)) / 86400000;
							setPickDate({
								startTime: end,
								endTime: pickDate.startTime,
								days: howLong,
							});
						}
						// setPickDate({ startTime: start });
					}}
					value={pickDate.endTime !== tomorrow ? pickDate.endTime : tomorrow}
				/>
			</div>
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta qui
					repellat quod! Nobis odit error aut quisquam commodi, molestiae, recusandae eos
					necessitatibus accusamus similique corporis eligendi culpa ea minus. Incidunt,
					repellendus delectus molestiae impedit hic neque expedita iusto illo et cumque.
					Accusantium sequi voluptas vel sunt debitis quis nihil et aut enim. Amet
					similique tempora nesciunt sunt. Iusto, deleniti? Eligendi necessitatibus odit
					asperiores quis eveniet magni nam ducimus, ab ea laudantium illo, adipisci quasi
					deleniti! Ea, totam nihil eum deleniti veniam omnis asperiores quo magnam a sunt
					cupiditate eveniet. Tenetur, iure. Ratione unde necessitatibus a magnam maxime
					consequuntur tempore sed doloribus, numquam, id amet ut. Neque quas soluta ipsam
					dignissimos minima? Omnis doloremque quia facilis consectetur placeat
					aspernatur! Ea. Commodi asperiores rem quam illum tenetur, ad similique ratione
					deleniti libero error corrupti illo, nostrum iusto incidunt in autem harum
					pariatur, repellendus consectetur? A esse facilis dicta accusamus autem
					obcaecati. Doloribus iste aliquid nam sint ut corrupti rerum, iusto est quaerat
					voluptas enim error quisquam ipsum, veritatis nemo explicabo repudiandae facere
					odio nulla. Perferendis exercitationem assumenda illum sit distinctio suscipit.
					Dolor similique adipisci saepe tenetur cupiditate itaque dolores sint
					necessitatibus. Laboriosam blanditiis, placeat laudantium doloribus accusantium
					nobis voluptatibus dolorem explicabo incidunt? Distinctio rerum aut mollitia
					velit veniam. Odit, iste libero. Asperiores, provident ullam obcaecati deleniti
					libero repellendus. Voluptatibus at, provident ea eius repellat, reprehenderit
					quasi minus delectus minima a necessitatibus ut facilis reiciendis itaque
					exercitationem, aspernatur dignissimos veritatis modi porro? Necessitatibus,
					praesentium, blanditiis reprehenderit illo cupiditate odit pariatur neque quos
					provident, repellendus harum esse cum optio non accusantium nesciunt dolores
					sapiente! Qui accusamus voluptate hic, dolorem officiis cumque eum velit? Enim
					quo vitae reiciendis possimus. Repellat accusantium, deleniti tempore cumque
					quos ratione dolor ipsum distinctio, sunt alias recusandae minima adipisci atque
					quas fugit voluptatibus aperiam sed neque molestias eveniet quia. Adipisci quo
					tempora voluptatem sed voluptate voluptatibus quibusdam, esse delectus
					perspiciatis. At unde animi voluptate consequatur, nesciunt ea autem dolorum
					possimus quaerat voluptas numquam non molestiae quidem quae illum labore. Labore
					optio pariatur molestias corrupti atque, explicabo quasi odit molestiae nobis
					reiciendis placeat deleniti cupiditate nisi aspernatur libero laboriosam
					laudantium sapiente illum a. Laboriosam quo possimus dolor illo voluptatum
					consequuntur? Libero nesciunt autem sapiente natus eveniet, corrupti dolor est
					tempora expedita molestias deleniti nemo amet consectetur enim suscipit minima
					fugit id quia? Commodi minima sit eos dolores recusandae possimus voluptates!
					Animi odio quia nihil officiis sunt esse ratione quod unde veniam laborum cum
					saepe commodi error, incidunt earum aperiam excepturi suscipit vel mollitia?
					Voluptatum, blanditiis distinctio quam accusantium sunt at. Facere beatae
					commodi suscipit iste dicta recusandae magnam id aperiam aliquid molestias
					assumenda ducimus ab magni, blanditiis consectetur repudiandae. Voluptatem
					impedit iste, inventore placeat culpa provident qui rem ipsam incidunt.
					Voluptate dignissimos deleniti consequatur ipsam provident quidem voluptatibus
					quibusdam laudantium atque non, ipsa, quam neque accusamus, id eveniet optio
					adipisci facere unde iste totam rerum doloribus. Veniam iste nobis aliquid? Aut
					provident ipsa in nisi aliquid. Nesciunt sapiente repudiandae quos quaerat
					adipisci. Voluptatum quaerat nobis eaque voluptate aliquam incidunt et vel optio
					nisi nostrum sed esse, ad quibusdam rerum accusamus! Provident dignissimos id
					laudantium eaque sapiente. Nostrum, praesentium reprehenderit! Possimus ipsa
					magnam labore laudantium distinctio maxime assumenda quis facere optio. Velit
					quae doloribus dolore nesciunt labore neque suscipit qui! Blanditiis? Impedit
					praesentium maiores architecto distinctio quos fuga saepe hic placeat repellat
					reiciendis ipsum perspiciatis dolorum veritatis eos obcaecati blanditiis
					explicabo debitis voluptatibus error nostrum dicta dolore ab, labore autem?
					Omnis! Repudiandae nihil quis fuga modi nulla laudantium ut dolor, veritatis
					possimus itaque molestiae minima facere autem? Autem exercitationem asperiores
					ad inventore voluptate accusantium possimus nemo explicabo sapiente. Optio,
					voluptas aspernatur.
				</p>
			</div>
			{/* TODO: 新增一個大日曆 兩個日曆能夠連動 */}
		</>
	);
};
export default App_DatePicker;
