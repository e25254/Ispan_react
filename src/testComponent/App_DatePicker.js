import { DatePicker, Space } from 'antd';
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
	return (
		<>
			<Space direction="vertical" size={12}>
				<RangePicker
					locale={locale}
					bordered
					onChange={(e) => {
						moment.locale('zh-tw');
						let start = moment(e[0]._d).format('YYYY/MM/DD');
						let end = moment(e[1]._d).format('YYYY/MM/DD');
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
		</>
	);
};
export default App_DatePicker;
