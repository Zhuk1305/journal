import React, {Component} from 'react';

class AddStudent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: '',
			lastName: '',
			group: '',
			yb: '',
			payment: '',
			comment: '',
		}
	this.saveStudent = this.saveStudent.bind(this)
	}

	saveStudent = (e) => {
		e.preventDefault();
		let student = {firstName: this.state.firstName, lastName: this.state.lastName, contact: this.state.contact, birthday: this.state.birthday};
		fetch('http://localhost:8080/student/', 
		{method:'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type':'application/json'}, 
			body: JSON.stringify(student)})
		 .then(res => {
			this.props.history.push('/students')
		 },
		 (error) => {
			this.setState({
				error
			});
		})
		}

	onChange = (e) =>
				this.setState({[e.target.name]:e.target.value });
	render() {
		return(
			<div>
				<h2 className="text-center">Add Student</h2>
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
							<label>Contact:</label>
							<input placeholder="Contact" name="contact" className="form-control" value={this.state.contact} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>Year of Birth:</label>
							<input placeholder="Year of Birth" name="YoB" className="form-control" value={this.state.yb} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>Payment:</label>
							<input placeholder="Payment" name="payment" className="form-control" value={this.state.payment} onChange={this.onChange}/>
					</div>

					<button className="btn btn-success" onClick={this.saveStudent}>Save</button>
				</form>
			</div>

		)
	}
}

export default AddStudent;