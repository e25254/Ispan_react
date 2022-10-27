// import Counter from './ex-1025-2/Counter';
// import JsxValue from './ex-1026-1/JsxValue';
// import StudentList from './ex-1026-2/StudentList';
import { example } from './examples';
import { useState } from 'react';
function App() {
	const [displayIndex, setDisplayIndex] = useState(5);
	const selection = (
		<select
			value={displayIndex}
			onChange={(e) => {
				setDisplayIndex(Number(e.target.value));
			}}
		>
			{example.map((v, i) => {
				return (
					<option key={i} value={i}>
						{v.name}
					</option>
				);
			})}
		</select>
	);

	const MyComponent = example[displayIndex].component;
	const MyPath = example[displayIndex].path;

	return (
		<>
			{selection}
			<p>路徑：{MyPath}</p>
			<hr />
			<MyComponent />
		</>
	);
}
export default App;
