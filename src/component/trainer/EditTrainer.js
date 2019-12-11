import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditTrainer extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            lastName: '',
        }
        this.saveTrainer = this.saveTrainer.bind(this);
        this.loadTrainer = this.loadTrainer.bind(this);
    }

    componentDidMount() {
        this.loadTrainer();
    }

    loadTrainer() {
        ApiService.fetchTrainerById(window.localStorage.getItem("trainerId"))
            .then(res => {
                let trainer = res.data.result;
                this.setState({
                id: trainer.id,
                username: trainer.username,
                firstName: trainer.firstName,
                lastName: trainer.lastName,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveTrainer = (e) => {
        e.preventDefault();
        let trainers = {id: this.state.id, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName};
        ApiService.editTrainer(trainers)
            .then(res => {
                this.setState({message : 'Trainer added successfully.'});
                this.props.history.push('/trainer');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Trainer</h2>
                <form>
									
                    <div className="form-group">
                        <label>Trainer Name:</label>
                        <input type="text" placeholder="username" name="username" className="form-control" readonly="true" defaultValue={this.state.username}/>
                    </div>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveTrainer}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditTrainer;