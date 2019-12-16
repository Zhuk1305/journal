import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditTrainer extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
						lastName: '',
						phone:'',
						email:'',
						birthday:''
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
                firstName: trainer.firstName,
								lastName: trainer.lastName,
								phone: trainer.phone,
								email: trainer.email,
								birthday: trainer.birthday
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveTrainer = (e) => {
        e.preventDefault();
         let trainers = {id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, phone: this.state.phone, email: this.state.email, birthday: this.state.birthday};
         ApiService.editTrainer(trainers)
             .then(res => {
                this.props.history.push('/trainers');
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Trainer</h2>
                <form>
									
								<div className="form-group">
							<label>First Name:</label>
							<input placeholder="First Name" name="firstName" className="form-control" value={this.state.username} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>Last Name:</label>
							<input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>Phone:</label>
							<input placeholder="Phone" name="phone" className="form-control" value={this.state.phone} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>Email:</label>
							<input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
					</div>

					<div className="form-group">
							<label>Birthday:</label>
							<input placeholder="Birthday" name="birthday" className="form-control" value={this.state.birthday} onChange={this.onChange}/>
					</div>


                    <button className="btn btn-success" onClick={this.saveTrainer}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditTrainer;