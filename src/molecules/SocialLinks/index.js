//Base
import React, { Component } from 'react';

//Component
import Link from '../../atoms/Links';

class NavGroup extends Component {
    render() {
      return (
          <ul>
            <Link linkProp="a" linktype="nav-link" linkurl="https://www.linkedin.com/in/ashleystreet1/" linkName="LinkedIn" />
            <Link linkProp="a" linkurl="https://github.com/Ashstreet" linkName="Github" />
          </ul>
      )
    }
  }

  export default NavGroup;