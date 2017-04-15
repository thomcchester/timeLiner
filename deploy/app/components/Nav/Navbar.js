import React from 'react';
import {Link} from 'react-router';
import NavbarStore from './NavbarStore';
import NavbarActions from './NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    NavbarActions.findDefaults();

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var navItems=this.state.tabs.map(function(tab) {
      return(
      <li key={tab.name}><Link to={tab.link}>{tab.name}</Link></li>
    );
    })
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Software'>Software</Link></li>
            <li><Link to='/Resume'></Link></li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>Hobbies <span className='caret'></span></a>
              <ul className='dropdown-menu'>
                <li><Link to='/Hobbies'>Book one</Link></li>
                <li className='dropdown-submenu'>
                  <Link to='/Hobbies/Nerd'>Nerdy Stuff</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Hobbies/Nerd/Comics'>Comics</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/Hobbies/DadStuff'>Dad Stuff</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Hobbies/DadStuff/GoodLengthsOfRope'>Good Lengths of Rope</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/Hobbies/Sports'>Sports</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Hobbies/Sports/Skiing'>Skiing</Link></li>
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link to='/Hobbies/Other'>Other</Link>
                  <ul className='dropdown-menu'>
                    <li><Link to='/Hobbies/Other/Cooking'>Cooking</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to='/DailyBlog'>Blog</Link></li>
            <li><Link to='/Story'>Story</Link></li>
            <li></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
