import alt from '../../../alt';

class SignInActions {
	constructor() {
		this.generateActions(
			'findInSuccess',
			'findInFail'
		);
	}


	findIns(){
    $.ajax( {url: '/ins' })
    .done((inData) => {
      this.actions.findInSuccess(inData)
    })
    .fail((injqXhr) => {
      this.actions.findInFail(injqXhr)
    })
  }
}


export default alt.createActions(SignInActions);
