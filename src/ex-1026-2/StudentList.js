import { data } from './data/student.js';
console.log(data);
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
