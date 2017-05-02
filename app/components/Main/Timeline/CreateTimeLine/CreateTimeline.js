import React from 'react';
import {Link} from 'react-router';
import CreateTimelineStore from './CreateTimelineStore'
import CreateTimelineActions from './CreateTimelineActions';
import {first, without, findWhere} from 'underscore';

class CreateTimeline extends React.Component {

  constructor(props) {
    super(props);
    this.state = CreateTimelineStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    CreateTimelineStore.listen(this.onChange);
  }

  componentWillUnmount() {
    CreateTimelineStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <div className="asdf" >
        <p>punching</p>
      </div>
    );
  }
}

export default CreateTimeline;
