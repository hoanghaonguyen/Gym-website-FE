import React from 'react'
import Banner from '../../components/Banner'
import HeaderImage from '../../images/header_bg_1.jpg' 
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'
const About = () => {
  return (
    <>
     <Banner title="About Us" image={HeaderImage}>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id explicabo debitis quas obcaecati nemo cupiditate assumenda dolore suscipit provident nam.
      </Banner> 

      <section className='about__story'>
        <div className='container about__story-container'>
          <div className='about__section-image'>
            <img src={StoryImage} alt='Our Story Image'/>
          </div>
          <div className='about__section-content'>
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum eligendi at, explicabo harum velit iure sunt quae enim, nemo mollitia obcaecati ea incidunt suscipit maxime accusantium provident et! Explicabo!</p>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis obcaecati, est nam cumque error quaerat harum, exercitationem voluptatum fuga quis sunt vel voluptates atque placeat!</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quod aperiam tempora! Magnam voluptatibus molestiae doloremque nostrum.</p>


          </div>
        </div>
      </section>

      <section className='about__vision'>
        <div className='container about__vision-container'>
          <div className='about__section-image'>
            <img src={VisionImage} alt='Our Vision Image'/>
          </div>
          <div className='about__section-content'>
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum eligendi at, explicabo harum velit iure sunt quae enim, nemo mollitia obcaecati ea incidunt suscipit maxime accusantium provident et! Explicabo!</p>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis obcaecati, est nam cumque error quaerat harum, exercitationem voluptatum fuga quis sunt vel voluptates atque placeat!</p>

          </div>

          <div className='about__section-image'>
            <img src={VisionImage} alt='Our Vision Image'/>
          </div>
        </div>
      </section>

      <section className='about__mission'>
        <div className='container about__mission-container'>
          <div className='about__section-image'>
            <img src={MissionImage} alt='Our Mission Image'/>
          </div>
          <div className='about__section-content'>
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum eligendi at, explicabo harum velit iure sunt quae enim, nemo mollitia obcaecati ea incidunt suscipit maxime accusantium provident et! Explicabo!</p>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis obcaecati, est nam cumque error quaerat harum, exercitationem voluptatum fuga quis sunt vel voluptates atque placeat!</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quod aperiam tempora! Magnam voluptatibus molestiae doloremque nostrum.</p>


          </div>
        </div>
      </section>
    </>
  )
}

export default About