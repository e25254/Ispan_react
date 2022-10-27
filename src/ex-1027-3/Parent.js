import { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function ParentFlow() {
	const [parentData, setParentData] = useState('parent_Data');
	// 為了接收回來的 ChildB回傳的資料使用
	const [dataFromChildB, setDataFromChildB] = useState('');
	return (
		<>
			<h1>Parent</h1>
			<p>來自ChildB的資料：{dataFromChildB}</p>
			<hr></hr>
			<ChildA parentData={parentData} dataFromChildB={dataFromChildB}/>
			<ChildB setDataFromChildB={setDataFromChildB} />
		</>
	);
}

export default ParentFlow;
