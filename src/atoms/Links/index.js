//Base
import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router';

class GenLink extends Component {
    render() {
      const Tag = this.props.linkProp,
            isNavLink = this.props.isNavLink;

      let element;

      isNavLink ? element = <li><i className={this.props.icon}></i><Link to={this.props.linkurl} activeClassName="active" className={this.props.linktype}>{this.props.linkName}</Link></li>
                : element = <Tag className={this.props.linktype} href={this.props.linkurl}>{this.props.linkName}<i className={this.props.icon}></i></Tag>
      
      return (
        <item>{element}</item> 
      );
    }
  }

  export default GenLink;