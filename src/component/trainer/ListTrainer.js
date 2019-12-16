import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import "./trainer.css"

class ListTrainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
					trainers : []
            // trainers: [{
						// 	id:1,
						// 	firstName: "ivan",
						// 	lastName: "zhuk",
						// 	phone: "+37529 666 66 66",
						// 	email: "vaneczhuk@gmail.com",
						// 	birthday: "13.05.1999"
						// }]
        }
        this.deleteTrainer = this.deleteTrainer.bind(this);
        this.editTrainer = this.editTrainer.bind(this);
        this.addTrainer = this.addTrainer.bind(this);
        this.reloadTrainerList = this.reloadTrainerList.bind(this);
    }

    componentDidMount() {
        this.reloadTrainerList();
    }

    reloadTrainerList() {
			
        ApiService.fetchTrainers()
            .then((res) => {
                this.setState({trainers: res.data.result})
				    });
    }

    deleteTrainer(trainerId) {
        ApiService.deleteTrainer(trainerId)
           .then(res => {
               this.setState({trainer: this.state.trainers.filter(trainer => trainer.id !== trainerId)});
								
							})
					 
    }

    editTrainer(id) {
        window.localStorage.setItem("trainerId", id);
        this.props.history.push('/edit-trainer');
    }

    addTrainer () {
      window.localStorage.removeItem("trainerId");
			this.props.history.push('/add-trainer');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Trainer Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addTrainer()}> Add Trainer</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
														<th>Phone</th>
														<th>Email</th>
                            <th>Birthday</th>
														<th>Delete</th>
														<th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.trainers.map(
                        trainer =>
                                    <tr key={trainer.id}>
																				<td>{trainer.id}</td>
                                        <td>{trainer.firstName}</td>
                                        <td>{trainer.lastName}</td>
                                        <td>{trainer.phone}</td>
 
                                        <td>{trainer.email}</td>
                                        <td>{trainer.birthday}</td>
																				 <td>
                                            <button className="btn btn-success" onClick={() => this.deleteTrainer(trainer.id)}> Delete</button>
                                           </td>
																					 <td>
																						 <button className="btn btn-success" onClick={() => this.editTrainer(trainer.id)}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ListTrainer;