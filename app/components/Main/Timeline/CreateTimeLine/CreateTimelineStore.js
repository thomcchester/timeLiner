import alt from '../../../../alt';
import CreateTimelineActions from './CreateTimelineActions';

class CreateTimelineStore {
  constructor() {
    this.bindActions(CreateTimelineActions);
  }

}

export default alt.createStore(CreateTimelineStore);
