import { DatePicker, Space, Calendar } from 'antd';
import './App_DatePicker.css';
import React, { useState } from 'react';
import moment from 'moment/moment';
import locale from 'antd/es/date-picker/locale/zh_TW';
const { RangePicker } = DatePicker;
const App_DatePicker = () => {
	const [pickDate, setPickDate] = useState({
		startTime: '',
		endTime: '',
		days: '',
	});
	const onPanelChange = (value, mode) => {
		console.log(value.format('YYYY-MM-DD'), mode);
	};
	return (
		<>
			<Space direction="vertical" size={12}>
				<RangePicker
					locale={locale}
					bordered
					onChange={(e) => {
						moment.locale('zh-tw');
						let start = moment(e[0]._d).format('YYYY-MM-DD');
						let end = moment(e[1]._d).format('YYYY-MM-DD');
						let howLong =
							(+new Date(end) - +new Date(start)) / 86400000;
						console.log(howLong);
						setPickDate({
							startTime: start,
							endTime: end,
							days: howLong,
						});
					}}
				/>
			</Space>
			<input value={pickDate.startTime} readOnly />
			<input value={pickDate.endTime} readOnly />
			<input value={pickDate.days + '晚'} readOnly />
			<Space direction="vertical" size={12} className={'hiddenBox'}>
				<RangePicker
					open={true}
					className={'noShow'}
					locale={locale}
					bordered
					onChange={(e) => {
						moment.locale('zh-tw');
						let start = moment(e[0]._d).format('YYYY-MM-DD');
						let end = moment(e[1]._d).format('YYYY-MM-DD');
						let howLong =
							(+new Date(end) - +new Date(start)) / 86400000;
						console.log(howLong);
						setPickDate({
							startTime: start,
							endTime: end,
							days: howLong,
						});
					}}
				/>
			</Space>
			{/* TODO: 新增一個大日曆 兩個日曆能夠連動 */}
			{/* <div className="site-calendar-demo-card">
				<Calendar
					fullscreen={false}
					onPanelChange={onPanelChange}
					value={moment('2022-03-03')}
				/>
			</div> */}
		</>
	);
};
export default App_DatePicker;
