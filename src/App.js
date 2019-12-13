import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import Loader from './component/Loader/Loader';
import Group from './component/Group/Group';
import AddTrainer from './component/Trainer/AddTrainer';
import EditTrainer from './component/Trainer/EditTrainer';
import ListTrainer from './component/Trainer/ListTrainer';
import Navbar from './component/NavbarTrainer/Navbar';
import Header from './component/Header/Header.js';
import Main from './component/Main/Main';
import AddGroup from './component/Group/AddGroup';
function App() {

	return (
		<div className="containers">
		
			<Router>
			<div className="header">
			<Header />
			</div>
			<div className="main">
			<Navbar />
					<div className="wrapper">
								<Switch>
									
									<Route path="/" exact component={Main} />
									<Route path="/main" exact component={Main} />
									<Route path="/groups" component={Group} />
									<Route path="/add-group" component={AddGroup} />
									<Route path="/trainers" component={ListTrainer} />
									<Route path="/add-trainer" component={AddTrainer} />
									<Route path="/edit-trainer" component={EditTrainer} />
							</Switch>
					</div>
			</div>
			</Router>
		</div>
 		);
}


export default App;