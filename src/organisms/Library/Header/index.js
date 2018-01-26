//Base
import React, { Component } from 'react';

//Component
import Header from '../../../molecules/Header';

class WorkHeader extends Component {
    render() {
      return (
        <div>
            <Header heroClass='page-title' heroText='Component Library' position='center' subHeadingText='React Component Library' heroSub='homepage-hero-sub'/>
        </div>
      )
    }
  }

  export default WorkHeader;