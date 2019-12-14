import React,{Component} from 'react';
import './Group.css';

const data = {
	student: [
		{
			id:1,
			firstName: "ivan",
			lastName: "zhuk",
			contact: "Alexander: +37529 666 66 66",
			yb:2013,
			payment:"yes",
			comment:"good"
		}
	]
}
class Group extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: data
		}
	}
	addStudent() {
		this.props.history.push('/add-student');
	}
	render() {
	return (
		<div>
			<h2 className="text-center">group1, вт19</h2>
	<button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addStudent()}> Add Student</button>
<table class="table table-bordered">
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
		{ this.state.data.student.map(item =>(
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
		))}
		</tbody>
</table>

</div>
	)}
}

export default Group;