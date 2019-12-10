import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loader from './component/Loader/Loader';
import Table from './component/Table/Table.js';
import AddTrainer from './component/trainer/AddTrainer';
import EditTrainer from './component/trainer/EditTrainer';
import ListTrainer from './component/trainer/ListTrainer';

function App() {
  return (
		<div className="container">
			<Router>
					<div className="col-md-6">
							<h1 className="text-center" style={style}>React Trainer Application</h1>
							<Switch>
									<Route path="/" exact component={ListTrainer} />
									<Route path="/trainers" component={ListTrainer} />
									<Route path="/add-trainer" component={AddTrainer} />
									<Route path="/edit-trainer" component={EditTrainer} />
							</Switch>
					</div>
			</Router>
		</div>
 		);
}

const style = {
	color: 'red',
	margin: '10px'
}

export default App;