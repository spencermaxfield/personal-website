import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {

    // TODO: should we even have links? If we do a single page that scrolls with all the content, then there
    // really isn't a "nav bar." Just a header.
    return (
      <header>
        <div className="name">Spencer Maxfield</div>
        <div id="headerButtons">
          <span className="navButton"><Link to="">Home</Link></span>
          <span className="navButton"><Link to="">Mixing</Link></span>
          <span className="navButton"><Link to="">Music</Link></span>
          <span className="navButton"><Link to="">Contact</Link></span>
        </div>
      </header>
    )
  }
}

export default NavBar;