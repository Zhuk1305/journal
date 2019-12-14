import React, {Component} from 'react';
import ApiService from "../../service/ApiService";

class AddGroup extends Component {
	constructor(props) {
		super(props)
		this.state= {
			name: '',
			nameTrainer:'',
		}
		this.saveGroup = this.saveGroup.bind(this)
	}
	saveGroup = (e) => {
		e.preventDefault();
		 let group = {name: this.state.name, nameTrainer:this.state.nameTrainer}
		// ApiService.addGroup(group)
		// 				.then(res => {
							this.props.history.push('/groups')
						// })
	}
	onChange = (e) =>
	this.setState({[e.target.name]: e.target.value});
	
	render() {
		return (
			<div>
				<h2 className="text-center">Add Group</h2>
				<from>
					<div className="from-group">
						<label>Group Name:</label>
						<input type="text" placeholder="Group Name" name="group name" className="form-control" value={this.state.name} onChange={this.onChange}/>
					</div>
					<div className="from-group">
						<label>Trainer name:</label>
						<input type="text" placeholder="Trainer name" name="trainer name" className="form-control" value={this.state.name} onChange={this.onChange}/>
					</div>
					<button className="btn-saveGroup" onClick={this.saveGroup}>Save</button>
				</from>
			</div>
		);
	}
}

export default AddGroup;