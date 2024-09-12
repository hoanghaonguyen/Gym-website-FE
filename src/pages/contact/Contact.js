import React from 'react'
import Banner from '../../components/Banner'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './ contact.css'

const Contact = ()=> {
  return (
    <>
    <Banner title="Get In Touch" image={HeaderImage}>
      Fruga  itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi culpa nobis nemo natus doloremque?
    </Banner>
    <section className='contact'>
      <div className='container contact__container'>
        <div className='contact__wrapper'>
          <a href='example@gmail.com' target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href='#' target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href='0123456789' target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>  
      </div>
    </section> 
    </>
  )
}

export default Contact