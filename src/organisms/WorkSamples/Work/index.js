//Base
import React, { Component } from 'react';

//Component
import Brand from '../../../molecules/BrandCard';

class WorkCard extends Component {
    render() {
    let workExamples = [
        {
            id: 0,
            linkTitle: 'Lexus', 
            url: 'https://www.lexus.co.uk',
            el: 'a',
            style: 'btn',
            icon: "fas fa-car",
            headingStyle: 'article-heading--work',
            paragraphStyle: 'brand-paragraph',
            headingLevel: '1',
            title: 'Lexus',
            imageClass: 'brand-image',
            largeImage: 'http://thewallpaper.co/wp-content/uploads/2016/02/intro-hd-car-images-tires-lexus-gs-widescreen-lexus-photos-lexus-motor-wallpaper-of-lexus-free-lexus-images-hd-lexus-photos-1920x1080-1366x768.jpg',
            tabletImage: 'https://www.placehold.it/600x400',
            smallImage: 'http://www.lexus.com/cm-img/gallery/2016/RX/Lexus-RX-fsport-full-line-gallery-thumbnail-476x357-LEXFLNMY160005.jpg',
            content: 'This high profile international project was a rebuild, I worked as part of the team that developed and implemented the web, my area of focus was homepage and the discover page. The Front-End technologies used to create this was Backbone, SASS, Nunjucks and Node.js configured with the Tridion CMS'
        },
        {
            id: 1,
            linkTitle: 'Takumi Cats', 
            url: 'https://www.lexus.eu/discover-lexus/craftsmanship/takumi-cats/',
            el: 'a',
            style: 'btn',
            icon: "fas fa-terminal",
            headingStyle: 'article-heading--work',
            paragraphStyle: 'brand-paragraph',
            headingLevel: '1',
            title: 'Takumi Cats',
            imageClass: 'brand-image',
            largeImage: 'http://moving-picture.com/UmbracoMedia/7680/lexus-global_product_film-takumi_cats-50sec_7.png?anchor=center&mode=crop&width=1423&height=668&rnd=131352877550000000',
            tabletImage: 'http://moving-picture.com/UmbracoMedia/7680/lexus-global_product_film-takumi_cats-50sec_7.png?anchor=center&mode=crop&width=1423&height=668&rnd=131352877550000000',
            smallImage: 'http://dzag5wgsqu6mr.cloudfront.net/wp-content/uploads/2015/04/lexus-origami.jpg',
            content: 'This innovative peice of work created an interactive tool which allows user to build a Origami Cat. This project for Lexus really allowed me to expand my skills. The project uses Three.js, CSS3DRenderer, Nunjucks, Backbone and Node.js all configured with Tridion CMS.'
        },
        {
            id: 2,
            linkTitle: 'Toyota', 
            url: 'https://www.toyota.co.uk/index.json#',
            el: 'a',
            style: 'btn',
            icon: "fas fa-car",
            headingStyle: 'article-heading--work',
            paragraphStyle: 'brand-paragraph',
            headingLevel: '1',
            title: 'Toyota',
            imageClass: 'brand-image',
            largeImage: 'https://postandparcel.info/wp-content/uploads/2017/09/Toyota2.jpg',
            tabletImage: 'https://postandparcel.info/wp-content/uploads/2017/09/Toyota2.jpg',
            smallImage: 'https://media.caranddriver.com/images/media/331369/toyota-says-turbo-and-hybrid-c-hr-wont-come-to-us-admits-faster-version-is-possible-photo-673122-s-450x274.jpg',
            content: "Toyota required some A/B Testing for there new website which had been developed by a different company, originally they requested that we used a tool called 'Vwo'. This was new tool for me, which is fairly restrictive, but I rose to the challenge learnt the tool and implemented what they had requested. The second task they asked for was using Google's own AB testing tool 'optimize' this tool was also new to me, but I learnt fast and delivered within 3 days"
        },
        {
            id: 3,
            linkTitle: 'Renault', 
            url: 'https://www.renault.co.uk/',
            el: 'a',
            style: 'btn',
            icon: "fas fa-car",
            headingStyle: 'article-heading--work',
            paragraphStyle: 'brand-paragraph',
            headingLevel: '1',
            title: 'Renault',
            imageClass: 'brand-image',
            largeImage: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/clio-rs-200-008.jpg',
            tabletImage: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/clio-rs-200-008.jpg',
            smallImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Renault_sport_RS_01_-_2014_Paris_Motor_Show_01.jpg/220px-Renault_sport_RS_01_-_2014_Paris_Motor_Show_01.jpg',
            content: 'Renault remit for their new web platform was tricky one, they wanted a website they could roll out worldwide and was entirely data driven, where I came in here was to build components for this platform, my main focus for this project was Release Preperation which meant I was the gate keeper of new releases of code, this allowed me to work on just about everything on the site. The Front-End stack for this project was Handlebars, SCSS, Grunt, Backbone and jQuery with Adobe Experience Manager being the CMS platform',
        },
        {
            id: 4,
            linkTitle: 'Nissan', 
            url: 'https://www.nissan.co.uk/',
            el: 'a',
            style: 'btn',
            icon: "fas fa-car",
            headingStyle: 'article-heading--work',
            paragraphStyle: 'brand-paragraph',
            headingLevel: '1',
            title: 'Nissan',
            imageClass: 'brand-image',
            largeImage: 'https://www.nissan-cdn.net/content/dam/Nissan/za/Homepage/Y62Gallery5.zoom.jpg.ximg.l_full_m.smart.jpg',
            tabletImage: 'https://www.nissan-cdn.net/content/dam/Nissan/za/Homepage/Y62Gallery5.zoom.jpg.ximg.l_full_m.smart.jpg',
            smallImage: 'https://i2-prod.chroniclelive.co.uk/incoming/article14062520.ece/ALTERNATES/s615/Nissan-Qashqai-1.jpg',
            content: 'Nissan similar to renault had the same remit, roll out a web platform that could localise to any country and for it to be content editable across all sites via AEM. The Front-End Stack for this was Handlebars, SCSS, Grunt, Backbone and jQuery. My focus here was the car configurator, which is prodominetly Backbone.'
        },
        {
            id: 5,
            linkTitle: 'Infiniti', 
            url: 'https://www.Infiniti.co.uk/',
            el: 'a',
            style: 'btn',
            icon: "fas fa-car",
            headingStyle: 'article-heading--work',
            paragraphStyle: 'brand-paragraph',
            headingLevel: '1',
            title: 'Infiniti',
            imageClass: 'brand-image',
            largeImage: 'https://media.ed.edmunds-media.com/infiniti/q50/2014/oem/2014_infiniti_q50_sedan_q50-sport_fq_oem_1_1280.jpg',
            tabletImage: 'https://media.ed.edmunds-media.com/infiniti/q50/2014/oem/2014_infiniti_q50_sedan_q50-sport_fq_oem_1_1280.jpg',
            smallImage: 'https://img2.carmax.com/img/vehicles/15309819/1/320.jpg',
            content: 'Infiniti are owned by Nissan and sold as their premium brand. For this project I was tasked with reskinning the website to the new colours, over 200 components and just 3 weeks to deliver, it was tight and involved weekend work but the end result was worth it. The technology used here was just Grunt and SCSS',
        },
        {
            id: 6,
            linkTitle: 'Dacia', 
            url: 'https://www.dacia.ie/',
            el: 'a',
            style: 'btn',
            icon: "fas fa-car",
            headingStyle: 'article-heading--work',
            paragraphStyle: 'brand-paragraph',
            headingLevel: '1',
            title: 'Dacia',
            imageClass: 'brand-image',
            largeImage: 'https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/cars-car/image/2016/07/new_dacia_duster.jpg?itok=g_hoJ9x1',
            tabletImage: 'https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/cars-car/image/2016/07/new_dacia_duster.jpg?itok=g_hoJ9x1',
            smallImage: 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/DACIA/SANDERO/5DR/15DacSanAmb5drSilFR1_800.jpg',
            content: 'Dacia are owned by Renault, so they wanted the same thing as Renault. At the point we developed there sites all that was required was to put new assets in and create different styles, Dacia was nice project which involved SCSS, Grunt and Handlebars',
        },
        {
            id: 7,
            linkTitle: 'Datsun', 
            url: 'https://www.datsun.com/',
            el: 'a',
            style: 'btn',
            icon: "fas fa-car",
            headingStyle: 'article-heading--work',
            paragraphStyle: 'brand-paragraph',
            headingLevel: '1',
            title: 'Datsun',
            imageClass: 'brand-image',
            largeImage: 'http://www.kindigit.com/wp-content/uploads/2015/10/72_Datsun_Intro_1_1495x992.jpg',
            tabletImage: 'http://www.kindigit.com/wp-content/uploads/2015/10/72_Datsun_Intro_1_1495x992.jpg',
            smallImage: 'https://upload.wikimedia.org/wikipedia/en/2/21/Datsun_brand_logo.png',
            content: 'Datsun was a reskin project, they are owned by Nissan so the template had already been completed all that was required was changing the CSS. The stack for this project was SCSS and Grunt',
        }
    ]
      return (
        <div>
            <Brand content = {workExamples} />
        </div>
      )
    }
  }

  export default WorkCard;