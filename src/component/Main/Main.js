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
showGroupList() {
	this.props.history.push('/groups')
}
showStudentList() {
	this.props.history.push('/students')
}
render () {
	
	return (
		<div>
 

  <h2 className="text-center">Welcome to hell!</h2>
  <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addTrainer()}> Add Trainer</button>
	<button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addGroup()}> Add Group</button>
	<button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addStudent()}> Add Student</button>
  <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.showTrainerList()}> Trainer List</button>
	<button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.showGroupList()}> Group List</button>
	<button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.showStudentList()}> Student List</button>

 </div>
)
}
}

export default Main;