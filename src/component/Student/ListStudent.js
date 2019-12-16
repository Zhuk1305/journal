import React, {Component} from 'react';

class ListStudent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			student: [{
				id:1,
				firstName: "ivan",
				lastName: "zhuk",
				contact: "Alexander: +37529 666 66 66",
				yb:2013,
				payment:"yes",
				comment:"good"
			}]
		}
	}
	addStudent() {
		this.props.history.push('/add-student');
	}
	render() {
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
      <th scope="col">YoB</th>
      <th scope="col">Payment</th>
			<th>Delete</th>
			<th>Edit</th>
    </tr>
  </thead>
  <tbody>
		{ 
		this.state.student.map(
			item =>
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
			<td>{item.contact}</td>
			<th>{item.yb}</th>
      <th>{item.payment}</th>
			<td>
          <button className="btn btn-success"> Delete</button>
          </td>
					<td>
					<button className="btn btn-success"> Edit</button>
        </td>
			</tr>
		)}
		</tbody>
</table>
			</div>
		)
	}
}

export default ListStudent;