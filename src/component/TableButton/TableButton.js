import React from 'react';

class TableButton extends React.Component {
	constructor() {
		super()

		this.state = {
			newId: ''
	}
}

	onChangeId = (event) => {
		this.setState({newId : event.target.value})
	}

	onAddId = () => {
		this.props.addId(this.state.newId)
		this.setState({newId: ''})

	}

	render() {
		return (
		<div>
			<input
				value={this.state.newId}
				onChange={this.onChangeId}
			/>

			<button onClick={this.onAddId}>add</button>
		</div>
		)}
}
 
export default TableButton