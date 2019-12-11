import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListTrainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            trainers: [],
            message: null
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
               this.setState({message : 'Trainer deleted successfully.'});
               this.setState({trainer: this.state.trainers.filter(trainer => trainer.id !== trainerId)});
           })

    }

    editTrainer(id) {
        window.localStorage.setItem("trainerId", id);
        this.props.history.push('/edit-trainer');
    }

    addTrainer() {
        window.localStorage.removeItem("trainerId");
        this.props.history.push('/add-trainer');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Trainer Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addTrainer()}> Add Trainer</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.trainers.map(
                        trainer =>
                                    <tr key={trainer.id}>
                                        <td>{trainer.firstName}</td>
                                        <td>{trainer.lastName}</td>
                                        <td>{trainer.username}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteTrainer(trainer.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editTrainer(trainer.id)} style={{marginLeft: '20px'}}> Edit</button>
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