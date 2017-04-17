import alt from '../../../alt';
import SignInActions from './SignInActions';

 class SignInStore {
	constructor() {
		this.bindActions(SignInActions);
    this.inHold=[];
	}
  onFindInSuccess(inData) {
    this.inHold=inData;

  }
}

export default alt.createStore(SignInStore);
