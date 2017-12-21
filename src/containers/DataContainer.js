import React, {Component} from 'react'; 


 
class DataContainer extends Component {
	constructor(props) {
	super(props);

		this.state = {
			text: ""

		}

	}
	GetTitle() {
		console.log(this.props);
		
	}


};

export default DataContainer;