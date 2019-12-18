import React, { Component } from 'react'

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
			fetch('http://localhost:8080/trainer/'+ 
			window.localStorage.getItem("trainerId"))
			.then(res => res.json())
      .then(res => {
					
				this.setState({
					id: res.id,
					firstName: res.firstName,
					lastName: res.lastName,
					phone: res.phone,
					email:res.email,
					birthday:res.birthday
			
					})
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            error
          });
        }
      )
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveTrainer = (e) => {
		e.preventDefault();
		 let trainer = {firstName: this.state.firstName, lastName: this.state.lastName, phone: this.state.phone, email: this.state.email, birthday: this.state.birthday};
		fetch('http://localhost:8080/trainer/'+
		window.localStorage.getItem("trainerId"), 
		{method:'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type':'application/json'}, 
			body: JSON.stringify(trainer)})
		 .then(res => {
			this.props.history.push('/trainers')
		 },
		 (error) => {
			this.setState({
				error
			});
		})
		}

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Trainer</h2>
                <form>
									
								<div className="form-group">
							<label>First Name:</label>
							<input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
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