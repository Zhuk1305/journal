import React, {Component} from 'react';
import ApiService from "../../service/ApiService";

class AddTrainer extends Component {

	constructor(props) {
		super(props)
		this.state= {
			username: '',
			password: '',
			firstName: '',
			lastName: '',
		}
		this.saveTrainer = this.saveTrainer.bind(this)
	}
	saveTrainer = (e) => {
		e.preventDefault();
		let trainer = {username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName};
		ApiService.addTrainer(trainer)
				.then(res => {
						this.setState({message : 'Trainer added successfully.'});
						this.props.history.push('/trainers');
				});
	}
	onChange = (e) =>
				this.setState({ [e.target.name]: e.target.value });
	render() {
	return(
			<div>
					<h2 className="text-center">Add Trainer</h2>
					<form>
					<div className="form-group">
							<label>Trainer Name:</label>
							<input type="text" placeholder="username" name="username" className="form-control" value={this.state.username} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>Password:</label>
							<input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>First Name:</label>
							<input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>Last Name:</label>
							<input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
					</div>

					<button className="btn btn-success" onClick={this.saveTrainer}>Save</button>
			</form>
	</div>
		);
	}
}
export default AddTrainer;