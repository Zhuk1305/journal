import React,{Component} from 'react';
import Loader from './component/Loader/Loader';
import Table from './component/Table/Table';
class App extends Component {

	render() {
  	return (
   		<div className="container">
					
				<Loader />
				<Table />
  		</div>
 		);
	}
}

export default App;