import axios from 'axios';
import { useEffect, useState } from 'react';

function User() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const [errorMessage, setErrorMessage] = useState('');
	const getUsers = async () => {
		try {
			const response = await axios.get(
				'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
			);
			console.log(response);

			setUsers(response.data);
		} catch (e) {
			console.error(e.message);
			setErrorMessage(e.message);
		}
	};

	useEffect(() => {
		// 先開啟載入指示器
		setIsLoading(true);

		getUsers();

		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	const snipper = (
		<button className="btn btn-primary" type="button" disabled>
			<span
				className="spinner-grow spinner-grow-sm"
				role="status"
				aria-hidden="true"
			></span>
			Loading...
		</button>
	);
	const displayTable = errorMessage ? (
		errorMessage
	) : (
		<table className="table table-striped table-hover">
			<thead>
				<tr>
					<th>ID</th>
					<th>姓名</th>
					<th>生日</th>
				</tr>
			</thead>

			<tbody>
				{users.map((v, i) => {
					return (
						<tr>
							<td>{v.id}</td>
							<td>{v.name}</td>
							<td>{v.birth}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
	return (
		<>
			<h1>會員資料</h1>
			<hr></hr>
			{isLoading ? snipper : displayTable}
		</>
	);
}
export default User;
