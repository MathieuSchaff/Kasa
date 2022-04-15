import React from 'react'
import BannerAbout from '../../components/banner/BannerAbout'
import Accordion from '../../components/Accordion/Accordion'
import {content} from '../../assets/about/mockedContentAbout'
import './about.scss'
const About = () => {
  return (
    <div>
      <BannerAbout />
      <div className="accordion-about-container">
        {content.map((about, index) => (
          <Accordion title={about.title} content={about.content} key={index} />
        ))}
      </div>
    </div>
  )
}

export default About
