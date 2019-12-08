import React,{Component} from 'react';
import Loader from './component/Loader/Loader';
import Table from './component/Table/Table.js';
import TableButton from './component/TableButton/TableButton.js';

class App extends Component {
	constructor() {
		super()

		this.state = {
			data: [
				{"id":123,"First":"Leroy","Last":"Jaques","Contact":"TSteele@ipsum.ly", "isHere1":"н", "isHere2":"н", "isHere3":"н", "isHere4":"+"},
				]
		}
	}

	addId = (id) => {
		this.setState ({
			data: [
				...this.state.data,
				{"id":id,"first":"first","last":"last","contact":"TSteele@ipsum.ly", "isHere1":"н", "isHere2":"н", "isHere3":"н", "isHere4":"+"}
			]
		})
	}
	render() {
  	return (
   		<div className="container">
					
				<Loader />
				<Table
				data={this.state.data}/>
				<TableButton 
					addId={this.addId}
				/>
  		</div>
 		);
	}
}

export default App;