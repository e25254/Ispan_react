import { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';
function ParentFlow_Practice() {
	const [dataToAll, setDataToAll] = useState('全部都收得到資料');
	const [b_Data, setB_Data] = useState('');
	return (
		<>
			<h1>Parent</h1>
			<p>發送給ChildA&ChildB:全部都收得到資料</p>
			<p>B傳回來的：{b_Data}</p>
			<hr></hr>
			<ChildA dataToAll={dataToAll} b_Data={b_Data} />
			<hr></hr>
			<ChildB dataToAll={dataToAll} setB_Data={setB_Data} b_Data={b_Data} />
		</>
	);
}

export default ParentFlow_Practice;
