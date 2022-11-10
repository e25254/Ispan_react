import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function BottomBarDropDownBtn() {
	return (
		<>
			<DropdownButton
				id={`dropdown-button-drop-up`}
				drop="up"
				title={'家庭房'}
				className="BottomBar_inputDate"
				style={{
					width: '60px',
					textAlign: 'center',
					overflow: 'visible',
				}}
			>
				<Dropdown.Item eventKey="1">Action</Dropdown.Item>
				<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
				<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
			</DropdownButton>
		</>
	);
}

export default BottomBarDropDownBtn;
