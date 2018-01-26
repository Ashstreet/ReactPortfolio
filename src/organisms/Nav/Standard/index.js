//Base
import React, { Component } from 'react';

//Component
import Navigation from '../../../molecules/Navigation';

class Navi extends Component {
    render() {
    let navLinks = [
        {
            id: 0, 
            title: 'Home', 
            url: "/",
            el: 'a',
            style: 'nav-link',
            isNavLink: true,
        },
        {
            id: 1, 
            title: 'Work', 
            url: "/Work",
            el: 'a',
            style: 'nav-link',
            isNavLink: true
        },
        {
            id: 2,
            title: 'Contact',
            url: '/Contact',
            el: 'a',
            style: 'nav-link',
            isNavLink: true
        },
        {
            id: 3,
            title: 'Library',
            url: '/Library',
            el: 'a',
            style: 'nav-link',
            isNavLink: true
        }
    ]

      return (
        <div>
             <Navigation navClass="nav-holder" links={navLinks}/>
        </div>
      )
    }
  }

  export default Navi;