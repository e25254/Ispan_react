function JsxValue() {
	return (
		<>
			<h1>JSX中的值與表達式</h1>
			<hr></hr>
			<h2>Number</h2>
			{123 - 99}
			<br></br>
			{NaN}
			<br></br>
			{'a' / 0}
			<h2>String</h2>
			{'abc'}
			<br></br>
			{`total = ${100 - 5}`}
			<h2>Boolean</h2>
			{true}
			{false}
			<h2>null</h2>
			{null}
			<h2>undefinded</h2>
			{undefined}
			<h2>Array</h2>
			{[1, 2, 3, 4]}
			<h2>Object</h2>
			{/* {會有中斷錯誤} */}
			{/* {{ a: 1, b: 2, c: 3 }} */}
			<h2>Function</h2>
			{/* {() => {}} */}
		</>
	);
}

export default JsxValue;
