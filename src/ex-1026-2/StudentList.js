import { data } from './data/student.js';
//  json檔案導入時會自動轉成js的資料類型值
import jsonData from './data/student.json';

console.log(data);
console.log(jsonData);
function StudentList() {
	return (
		<>
			<h1>學生資料清單</h1>
			<ul>
				{data.map((v, i) => {
					return (
						<li key={v.id}>
							{v.id} {v.name} {v.birth}
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default StudentList;
