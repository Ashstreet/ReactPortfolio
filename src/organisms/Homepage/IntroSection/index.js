//Base
import React, { Component } from 'react';

//Component
import Intro from '../../../molecules/Intro';
import Header from '../../../molecules/Header';

class IntroSection extends Component {
  render() {
    let linkArray = [
        {
          id: 0, 
          title: 'Work', 
          url: "/Work",
          el: 'a',
          style: 'nav-link',
          icon: 'fas fa-code'
        },
        {
          id: 1,
          title: 'Contact',
          url: '/Contact',
          el: 'a',
          style: 'nav-link',
          icon: 'far fa-envelope'
        },
        {
          id: 2,
          title: 'Library',
          url: '/Library',
          el: 'a',
          style: 'nav-link',
          icon: 'fas fa-book'
        },
      ],
      imageArray = [
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
        <Header
          heroText = "Ashley Street"
          subHeadingText = "Front-End Developer"
          heroClass = "homepage-hero"
          heroSub = "homepage-hero-sub"
          heroType="homepage-container"
        />
        <Intro
              hasLinks = {true}
              hasImages = {true}
              Constyle="intro-section"
              navLinkStyle="nav-holder"
              paraClass="intro"
              paragraph1="Experienced Frontend Developer with a demonstrated history of working in the marketing and advertising industry. Skilled in Scrum, User Experience, Web Applications, Agile Methodologies, and Front-end Development."
              links= {linkArray}
              images = {imageArray}
        />
      </div>
    )
  }
}

export default IntroSection;
