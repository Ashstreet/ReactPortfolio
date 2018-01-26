//Base
import React, { Component } from 'react';
import './index.css';

//Component
import Link from '../../atoms/Links';

class Navigation extends Component {
    render () {
        let navLinks;

        navLinks = this.props.links.map((link)=>
            <Link icon={link.icon} isNavLink={link.isNavLink} key={link.id} linkProp={link.el} linktype={link.style} linkurl={link.url} linkName={link.title} />
        )

        return (
            <nav> 
                <ul className={this.props.navClass}>
                    {navLinks}
                </ul>
            </nav>
        )
    }
}

export default Navigation;