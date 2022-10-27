import Child from './Child';

function Parent_PropTypes() {
	return (
		<>
			<Child increment={2} />
			<Child increment={5} />
			<Child />
		</>
	);
}

export default Parent_PropTypes;
