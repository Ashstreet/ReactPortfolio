//Base
import React, { Component } from 'react';

//Component
import Intro from '../../../molecules/Intro';

class IntroSection extends Component {
  render() {
      let imageArray = [
        {
          id: 0,
          largeUrl: "http://oi63.tinypic.com/2w1s75y.jpg",
          smallUrl: "http://oi63.tinypic.com/2w1s75y.jpg",
          class: "portrait",
          imageAlt: "Me"
        }
      ]
      
    return (
      <div>
        <Intro
              hasLinks = {true}
              hasImages = {true}
              Constyle="intro-section"
              navLinkStyle="nav-holder"
              paraClass="intro"
              paragraph1="Experienced Frontend Developer with a demonstrated history of working in the marketing and advertising industry. Skilled User Experience, Web Applications, Agile Methodologies, and Front-end Development."
              images = {imageArray}
        />
      </div>
    )
  }
}

export default IntroSection;
