import { DatePicker, Space } from 'antd';
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

	const [startValue, setStartValue] = useState(null);
	const [endValue, setEndValue] = useState(null);
	const [endOpen, setEndOpen] = useState(false);

	const disabledStartDate = (startDate) => {
		if (!startDate || !endValue) {
			return false;
		}
		return startDate.valueOf() > endValue.valueOf();
	};
	const disabledEndDate = (endDate) => {
		if (!endDate || !startValue) {
			return false;
		}
		return endDate.valueOf() <= startValue.valueOf();
	};
	const handleStartOpenChange = (open) => {
		if (!open) {
			setEndOpen(true);
		}
	};
	const handleEndOpenChange = (open) => {
		setEndOpen(open);
	};
	// const onPanelChange = (value, mode) => {
	// 	console.log(value.format('YYYY-MM-DD'), mode);
	// };
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
						let howLong = (+new Date(end) - +new Date(start)) / 86400000;
						console.log(howLong);
						setPickDate({
							startTime: start,
							endTime: end,
							days: howLong,
						});
					}}
					value={
						pickDate.startTime !== ''
							? [moment(pickDate.startTime), moment(pickDate.endTime)]
							: ''
					}
				/>
			</Space>
			<input value={pickDate.startTime} readOnly />
			<input value={pickDate.endTime} readOnly />
			<input value={pickDate.days + '晚'} readOnly />
			<div>
				<div className="range_picker">
					<h3>日期</h3>
				</div>

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
							let howLong = (+new Date(end) - +new Date(start)) / 86400000;
							console.log(howLong);
							setPickDate({
								startTime: start,
								endTime: end,
								days: howLong,
							});
						}}
						value={
							pickDate.startTime !== ''
								? [moment(pickDate.startTime), moment(pickDate.endTime)]
								: ''
						}
						popupClassName={'hiddenBox'}
					/>
				</Space>
			</div>
			<div>
				<Space>
					<DatePicker
						disabledDate={disabledStartDate}
						showTime
						format="YYYY-MM-DD HH:mm:ss"
						value={startValue}
						placeholder="Start"
						onChange={setStartValue}
						onOpenChange={handleStartOpenChange}
					/>
					<DatePicker
						disabledDate={disabledEndDate}
						showTime
						format="YYYY-MM-DD HH:mm:ss"
						value={endValue}
						placeholder="End"
						onChange={setEndValue}
						open={endOpen}
						onOpenChange={handleEndOpenChange}
					/>
				</Space>
			</div>
			{/* TODO: 新增一個大日曆 兩個日曆能夠連動 */}
		</>
	);
};
export default App_DatePicker;
