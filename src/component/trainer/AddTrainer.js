import React, {Component} from 'react';


class AddTrainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: '',
			lastName: '',
			phone:'',
			email:'',
			birthday:'' 
		}
		this.saveTrainer = this.saveTrainer.bind(this)
	}
	saveTrainer = (e) => {
		e.preventDefault();
		 let trainer = {firstName: this.state.firstName, lastName: this.state.lastName, phone: this.state.phone, email: this.state.email, birthday: this.state.birthday};
		fetch('http://localhost:8080/trainer', {method:'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type':'application/json'}, 
			body: JSON.stringify(trainer)})
		 .then(res => {
			this.props.history.push('/trainers')
		 },
		 (error) => {
			this.setState({
				error
			});
		})
		}
	onChange = (e) =>
				this.setState({ [e.target.name]: e.target.value })

	render() {
	return(
			<div>
					<h2 className="text-center">Add Trainer</h2>
					<form>
					<div className="form-group">
							<label>First Name:</label>
							<input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>Last Name:</label>
							<input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>Phone:</label>
							<input placeholder="Phone" name="phone" className="form-control" value={this.state.phone} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>Email:</label>
							<input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>Birthday:</label>
							<input placeholder="Birthday" name="birthday" className="form-control" value={this.state.birthday} onChange={this.onChange}/>
					</div>

					<button className="btn btn-success" onClick={this.saveTrainer}>Save</button>
			</form>
	</div>
		);
	}
}
export default AddTrainer;