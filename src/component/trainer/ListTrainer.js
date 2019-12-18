import React, { Component } from 'react'
import "./trainer.css"

class ListTrainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
					error: null,
      isLoaded: false,
					trainers : []
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
			fetch("http://localhost:8080/trainer")
      .then(res => res.json())
      .then(trainers => {
          this.setState({
            isLoaded: true,
						trainers
					         });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    deleteTrainer(trainerId) {
			fetch("http://localhost:8080/trainer/" + trainerId,
		 {method: 'DELETE',
		 headers: {
			'Accept': 'application/json',
			'Content-Type':'application/json'}
		})
			.then(res => {
			this.setState({ 
				trainers: this.state.trainers.filter(trainer => trainer.id !== trainerId)})
	}
 )
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
			const { error, isLoaded, trainers } = this.state;
			if (error) {
				return <div>Ошибка: {error.message}</div>;
			} else if (!isLoaded) {
				return <div>Загрузка...</div>;
			} else {
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
                            trainers.map(
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
}

export default ListTrainer;