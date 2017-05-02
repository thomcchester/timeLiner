import alt from '../../alt';
import NavbarActions from './NavbarActions';

class NavbarStore {
  constructor() {
    this.bindActions(NavbarActions);
    this.defaults={};
    this.components=[];
    this.tabs=[];
    this.ajaxAnimationClass = '';
  }


  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }

  onFindDefaultsSuccess(data){
    this.defaults = data[0];
    this.components= this.defaults
  }

  onGetDefaultsFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(NavbarStore);
