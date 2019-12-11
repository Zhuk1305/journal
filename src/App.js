import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Loader from './component/Loader/Loader';
import Table from './component/Table/Table.js';
import AddTrainer from './component/trainer/AddTrainer';
import EditTrainer from './component/trainer/EditTrainer';
import ListTrainer from './component/trainer/ListTrainer';
import Navbar from './component/NavbarTrainer/Navbar';

function App() {
  return (
		<div className="container">
			<Navbar />
			<Router>
					<div className="wrapper">
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


export default App;