import React, {Component} from 'react';

class ListStudent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			students: [],
			isLoaded: false,
			error: null
		}
		this.deleteStudent = this.deleteStudent.bind(this);
		this.editStudent = this.editStudent.bind(this);
		this.addStudent = this.addStudent.bind(this);
		this.reloadStudentList = this.reloadStudentList.bind(this);
	}
	componentDidMount() {
		this.reloadStudentList();
	}
	reloadStudentList() {
		fetch("http://localhost:8080/student")
		.then(res => res.json())
		.then(students => { 
			this.setState({
				isLoaded: true,
				students
			})},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			})
	}

	deleteStudent(studentId) {
		fetch("http://localhost:8080/student/" + studentId,
		{method: 'DELETE',
		headers: {
			'Accept':'application/json',
			'Content-Type':'application/json'
		}})
		.then(res => {
			this.setState({
			students: this.state.students.filter(student => student.id !== studentId)})
		})
	}
	editStudent(id) {
		window.localStorage.setItem("studentId", id);
		this.props.history.push('/edit-student');
	}

	addStudent() {
		this.props.history.push('/add-student');
	}
	render() {
		const { error, isLoaded, students } = this.state;
			if (error) {
				return <div>Ошибка: {error.message}</div>;
			} else if (!isLoaded) {
				return <div>Загрузка...</div>;
			} else {
		return(
			<div>
				<h2 className="text-center">Student Details</h2>
				<button className="btn btn-danger" onClick={() => this.addStudent()}>Add Student</button>
				<table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Contact</th>
      <th scope="col">Birthday</th>
      <th scope="col">Subscription</th>
			<th scope="col">Group</th>
			<th>Delete</th>
			<th>Edit</th>
    </tr>
  </thead>
  <tbody>
		{ 
		students.map(
			student =>
    <tr key={student.id}>
      <td>{student.id}</td>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
			<td>{student.contact}</td>
			<th>{student.birthday}</th>
      <th>{student.subscription}</th>
      <th>{student.group}</th>
			<td>
          <button className="btn btn-success" onClick={() => this.deleteStudent(student.id)}> Delete</button>
          </td>
					<td>
					<button className="btn btn-success" onClick={() => this.editStudent(student.id)}> Edit</button>
        </td>
			</tr>
		)}
		</tbody>
</table>
			</div>
		)
	}
}
}

export default ListStudent;