import React, {Component} from 'react';

class AddStudent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: '',
			lastName: '',
			group: '',
			birthday: '',
			payment: '',
		}
	this.saveStudent = this.saveStudent.bind(this)
	this.loadStudent = this.loadStudent.bind(this)
}

componentDidMount() {
	this.loadStudent();
}
loadStudent() {
	fetch('http://localhost:8080/student/'+ 
	window.localStorage.getItem("studentId"))
	.then(res => res.json())
	.then(res => {
			
		this.setState({
			id: res.id,
			firstName: res.firstName,
			lastName: res.lastName,
			contact: res.contact,
			birthday:res.birthday
	
			})
		},
		// Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
		// чтобы не перехватывать исключения из ошибок в самих компонентах.
		(error) => {
			this.setState({
				error
			});
		}
	)
}
	saveStudent = (e) => {
		e.preventDefault();
		let student = {firstName: this.state.firstName, lastName: this.state.lastName, contact: this.state.contact, birthday: this.state.birthday};
		fetch('http://localhost:8080/student/'+
		window.localStorage.getItem("studentId"), 
		{method:'PUT',
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
							<label>Birthday:</label>
							<input placeholder="Birthday" name="birthday" className="form-control" value={this.state.birthday} onChange={this.onChange}/>
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