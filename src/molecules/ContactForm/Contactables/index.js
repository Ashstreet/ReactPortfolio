//Base
import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';

//Component
import Heading from '../../../atoms/Heading';
import Paragraph from '../../../atoms/Paragraph';

class IntroSection extends Component {
    render() {
      let contentArray;

      contentArray = this.props.contentArray.map((content)=>
      <Row>
        <Heading headinglevel={content.headinglevel} titleStyle={content.headingStyle} title={content.headingText} />
        <Paragraph paraClass={content.Paraclass} content={content.paragraph}/>
      </Row>
      );

    return (
      <Row>
        {contentArray}
      </Row>
      )
    }
  }

  export default IntroSection;