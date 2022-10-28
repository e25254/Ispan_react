function testArray() {
	const my_array = [
		{
			sid: 1,
			name: '程式設計',
			parent_sid: 0,
		},
		{
			sid: 2,
			name: '繪圖軟體',
			parent_sid: 0,
		},
		{
			sid: 3,
			name: '網際網路應用',
			parent_sid: 0,
		},
		{
			sid: 4,
			name: 'PHP',
			parent_sid: 1,
		},
		{
			sid: 5,
			name: 'JavaScript',
			parent_sid: 1,
		},
		{
			sid: 7,
			name: 'PS',
			parent_sid: 2,
		},
		{
			sid: 8,
			name: 'Chrome',
			parent_sid: 3,
		},
		{
			sid: 9,
			name: '騙錢的',
			parent_sid: 3,
		},
		{
			sid: 10,
			name: 'C++',
			parent_sid: 1,
		},
		{
			sid: 16,
			name: '椅拉',
			parent_sid: 2,
		},
		{
			sid: 17,
			name: 'Figma',
			parent_sid: 16,
		},
	];
	const my_array2 = [
		{
			sid: 1,
			name: '程式設計',
			parent_sid: 0,
			children: [
				{
					sid: 4,
					name: 'PHP',
					parent_sid: 1,
				},
				{
					sid: 5,
					name: 'JavaScript',
					parent_sid: 1,
				},
				{
					sid: 10,
					name: 'C++',
					parent_sid: 1,
				},
			],
		},
		{
			sid: 2,
			name: '繪圖軟體',
			parent_sid: 0,
			children: [
				{
					sid: 7,
					name: 'PS',
					parent_sid: 2,
				},
				{
					sid: 16,
					name: '椅拉',
					parent_sid: 2,
					children: [
						{
							sid: 17,
							name: 'Figma',
							parent_sid: 16,
						},
					],
				},
			],
		},
		{
			sid: 3,
			name: '網際網路應用',
			parent_sid: 0,
			children: [
				{
					sid: 8,
					name: 'Chrome',
					parent_sid: 3,
				},
				{
					sid: 9,
					name: '騙錢的',
					parent_sid: 3,
				},
			],
		},
	];
	console.log(my_array2);
	return (
		<>
			{my_array.map((v, i) => {
				return (
					<ul>
						<li>{v.name}</li>
					</ul>
				);
			})}
		</>
	);
}
export default testArray;
