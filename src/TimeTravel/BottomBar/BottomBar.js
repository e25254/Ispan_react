import React from 'react';
import './BottomBar.scss';
import moment from 'moment/moment';
import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import BuyButton from '../BuyButton/BuyButton';
import ComputerLikeAdd from '../ComputerLikeAdd/ComputerLikeAdd';
function BottomBar() {
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
	return (
		<div className="BottomBar">
			<div className="BottomBar_BtnGroup">
				<div>
					<input
						className="BottomBar_inputDate"
						type="Date"
						value={pickDate.startTime !== today ? pickDate.startTime : today}
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
							console.log(pickDate);
						}}
					/>
				</div>
				<div>
					<input
						className="BottomBar_inputDate"
						type="Date"
						value={pickDate.endTime !== tomorrow ? pickDate.endTime : tomorrow}
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
							console.log(pickDate);
							// setPickDate({ startTime: start });
						}}
					/>
				</div>
				<div>
					<select
						className="BottomBar_inputDate"
						style={{
							width: '60px',
							textAlign: 'center',
						}}
					>
						<option style={{}}>????????????</option>
					</select>
					{/* <button
						className="BottomBar_inputDate"
						style={{ width: '60px', padding: '0px' }}
					>
						?????????
					</button> */}
				</div>
				<div>
					<select
						className="BottomBar_inputDate"
						style={{
							width: '60px',
							padding: '0px 8px',
							textAlign: 'center',
						}}
					>
						<option style={{}}>?????????</option>
					</select>
				</div>
			</div>
			<div className="BottomBar_Buy">
				<ComputerLikeAdd />
				<BuyButton />
			</div>
		</div>
	);
}

export default BottomBar;
