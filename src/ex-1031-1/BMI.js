import { useState } from 'react';

function BMI() {
	const [myHeight, setMyHeight] = useState(0);
	const [myWeight, setMyWeight] = useState(0);

	// 當直接運算差異很大時，另外用一個state儲存運算後的值
	const [myBmi, setMyBmi] = useState(0);

	return (
		<>
			<h1>BMI線上計算</h1>
			<div>
				身高:
				<input
					type="number"
					value={myHeight === 0 ? '' : myHeight}
					placeholder="請輸入身高(cm)"
					onChange={(e) => {
						//保持state的資料類型一致是數字
						setMyHeight(Number(e.target.value));
					}}
				/>
			</div>
			<div>
				體重:
				<input
					type="number"
					value={myWeight === 0 ? '' : myWeight}
					placeholder="請輸入體重(kg)"
					onChange={(e) => {
						setMyWeight(Number(e.target.value));
					}}
				/>
			</div>
			<button
				onClick={() => {
					if (myWeight < 10 || myHeight < 100) {
						alert('身高或體重有錯誤，請重新輸入');
						return;
					}

					setMyBmi(myWeight / Math.pow(myHeight / 100, 2));
				}}
			>
				計算
			</button>
			<button
				onClick={() => {
					setMyWeight(0);
					setMyHeight(0);
					setMyBmi(0);
				}}
			>
				清除
			</button>
			<hr />
			{/* toFixed格式化數字用，保留一位小數之後四捨五入 */}
			<p>你的BMI值為: {myBmi !== 0 && myBmi.toFixed(1)}</p>
		</>
	);
}

export default BMI;
