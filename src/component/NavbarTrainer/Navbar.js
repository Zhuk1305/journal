import React,{Component} from 'react';
import './Navbar.css';

const data = {
	nodes: [
		{
			id: 1,
			name: "trainer1",
			group:[
				{
					id:1,
					name:"group1",
				},
				{
					id:2,
					name:"group2",
				},
				{
					id:3,
					name:"group3",
				},
			]
		},
		{
			id: 2,
			name: "trainer2",
			group:[
				{
					id:4,
					name:"group1",
				},
				{
					id:5,
					name:"group2",
				},
				{
					id:6,
					name:"group3",
				},
			]
		},
		{
			id: 3,
			name: "trainer3",
			group:[
				{
					id:7,
					name:"group1",
				},
				{
					id:8,
					name:"group2",
				},
				{
					id:9,
					name:"group3",
				},
			]
		},
		{
			id: 4,
			name: "trainer4",
			group:[
				{
					id:1,
					name:"group1",
				},
				{
					id:2,
					name:"group2",
				},
				{
					id:3,
					name:"group3",
				},
			]
		}
	]
}

class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: data,
			isOpened:false
		};
	}

	toggleState() {
		this.setState({ 
			isOpened: !this.state.isOpened
		})
	}
	
	
	render() {
	
	return (
		<div className="nav__wrapper">
				<ul>{this.state.data.nodes.map(item=>
					<li key={item.id} className="nav__trainer">
						{item.name}
						{item.group ? item.group.map(group => 
							<li key={group.id} className="nav__group">
								{group.name}
							</li>
							) : undefined }
							</li>
						)}
				</ul>
			</div>
	);
	}
}

export default Navbar;