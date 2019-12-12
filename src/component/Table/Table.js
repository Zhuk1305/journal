import React,{Component} from 'react';
import './Table.css';

const data = {
	student: [
		{
			id:1,
			firstName: "ivan",
			lastName: "zhuk",
			contact: "+37529 666 66 66",
			yb:2013,
			payment:"yes",
			comment:"good"
		}
	]
}
class Table extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: data
		}
	}
	render() {
	return (
		<div>
			<h2 className="text-center">group1, вт19</h2>
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Contact</th>
      <th scope="col">YoB</th>
      <th scope="col">Payment</th>
      <th scope="col">Comment</th>
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
      <th>{item.comment}</th>
			</tr>
		))}
		</tbody>
</table>
</div>
	)}
}

export default Table;