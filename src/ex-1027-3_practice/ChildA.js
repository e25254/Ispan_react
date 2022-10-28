function ChildA(props) {
	return (
		<>
			<h1>ChildA</h1>
			<p>來自Parent:{props.dataToAll}</p>
			<p>parent傳過來的：{props.b_Data}</p>
		</>
	);
}

export default ChildA;
