import React,{Component} from 'react';
import './Main.css';

class Main extends Component {
	
addTrainer() {
		this.props.history.push('/add-trainer');
}
addGroup() {
	this.props.history.push('/add-group');
}
addStudent() {
	this.props.history.push('/add-student');
}
showTrainerList() {
	this.props.history.push('/trainers')
}
showStudentList() {
	this.props.history.push('/students')
}
render () {
	
	return (
		<div className="main__container">
 

  <h2 className="text-center">Welcome to hell!</h2>
		<div className="btn__main-wrapper">
			<button className="btn btn-danger" onClick={() => this.addTrainer()}> Add Trainer</button>
			<button className="btn btn-danger" onClick={() => this.addGroup()}> Add Group</button>
			<button className="btn btn-danger" onClick={() => this.addStudent()}> Add Student</button>
			<button className="btn btn-danger" onClick={() => this.showTrainerList()}> Trainer List</button>
			<button className="btn btn-danger" onClick={() => this.showStudentList()}> Student List</button>
		</div>
		<img className="main__img" src="https://miro.medium.com/max/2800/0*MAzzaAq2S2oYMn_6.jpg"/>
 </div>
)
}
}

export default Main;