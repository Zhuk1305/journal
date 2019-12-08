import React from 'react';
import './Table.css';

const Table = (props) => {
	return (
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Contact</th>
      <th scope="col">Вторник, 03</th>
      <th scope="col">Вторник, 10</th>
      <th scope="col">Вторник, 17</th>
      <th scope="col">Вторник, 24</th>
    </tr>
  </thead>
  <tbody>
		{ props.data.map(item =>(
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.First}</td>
      <td>{item.Last}</td>
			<td>{item.Contact}</td>
			<td>{item.isHere1}</td>
			<td>{item.isHere2}</td>
			<td>{item.isHere3}</td>
			<td>{item.isHere4}</td>
			</tr>
		))}
		</tbody>
</table>
	)}

export default Table;