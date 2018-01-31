//Base
import React, { Component } from 'react';

//Component
import Header from '../../../molecules/Header';

class HomepageHeader extends Component {
  render() {
    let words = [
      {
        word: "Creator"
      },
      {
        word: "Builder"
      },
      {
        word: "Leader"
      },
      {
        word: "Dreamer"
      },
      {
        word: "Maker"
      },
      {
        word: "Achiever"
      }
    ]

    return (
      <Header
      heroText = "Ashley Street"
      heroClass = "homepage-hero"
      heroSub = "homepage-hero-sub"
      heroType="homepage-container"
      containerClass="hero-content"
      heroWords = {words}
      />
    )
  }
}

export default HomepageHeader;
