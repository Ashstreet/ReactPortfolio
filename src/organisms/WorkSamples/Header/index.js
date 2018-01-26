//Base
import React, { Component } from 'react';

//Component
import Header from '../../../molecules/Header';

class WorkHeader extends Component {
    render() {
      return (
        <div>
            <Header heroClass='page-title' heroText='Work' position='center' />
        </div>
      )
    }
  }

  export default WorkHeader;