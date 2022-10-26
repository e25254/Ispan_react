import { data } from './data/student.js';
//  json檔案導入時會自動轉成js的資料類型值
// import jsonData from './data/student.json';

// console.log(data);
// console.log(jsonData);
function StudentList() {
	return (
		<>
			<h1>學生資料清單</h1>
			<ul>
				{/* key值的選擇
                    1.  資料來自資料庫，優先使用資料庫中的 key（主鍵 / 外鍵 ）當 key值
                    2.  資料並非來自資料庫，可在資料初始化時使用 uuid或 nanoid等函式庫產生 key值，注意不要寫在 return中產生
                    3.  資料為靜態資料（意指在應用程式中完全不會更動）時，才能使用索引值當 key值
                 */}
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
