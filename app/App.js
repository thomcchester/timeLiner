import React from 'react';
import Navbar from './components/Nav/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="outerCheck">
          <Navbar history={this.props.history} />
          {this.props.children}
      </div>
    );
  }
}

export default App;
