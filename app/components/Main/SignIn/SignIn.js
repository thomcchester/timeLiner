import React from 'react';
import {Link} from 'react-router';
import SignInStore from './SignInStore.js';
import SignInActions from './SignInActions.js';

class SignIn extends React.Component {

	constructor(props) {
		super(props);
		this.state = SignInStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		SignInStore.listen(this.onChange);
		SignInActions.findIns();
	}


	componentWillUnmount() {
		SignInStore.listen(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}
render() {
		return (
			<div className="inBody">
			</div>
		);
	}
}

 export default SignIn
