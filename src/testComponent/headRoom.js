import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
function headRoom() {
	return (
		<>
			<p>12u3hfkmkqwemdkqmwe</p>
			<br />
			<p>12u3hfkmkqwemdkqmwe</p>
			<br />
			<p>12u3hfkmkqwemdkqmwe</p>
			<br />
			<p>12u3hfkmkqwemdkqmwe</p>
			<br />
			<p>12u3hfkmkqwemdkqmwe</p>
			<br />
			<p>12u3hfkmkqwemdkqmwe</p>
			<br />
			<p>12u3hfkmkqwemdkqmwe</p>
			<br />
			<p>12u3hfkmkqwemdkqmwe</p>
			<br />
			<p>12u3hfkmkqwemdkqmwe</p>
			<br />
			<p>12u3hfkmkqwemdkqmwe</p>
			<br />
			<p>12u3hfkmkqwemdkqmwe</p>
			<br />
			<p>12u3hfkmkqwemdkqmwe</p>
			<br />
			<DropdownButton
				id={`dropdown-button-drop-up`}
				drop="up"
				variant="secondary"
				title={'家庭房'}
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

export default headRoom;
