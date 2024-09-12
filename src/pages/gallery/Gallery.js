import React from 'react'
import Banner from '../../components/Banner'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
  const galleryLengh = 15;
  const images = [];

  for (let i = 1; i <= galleryLengh; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  return (
    <>
      <Banner title="Our Gallery" image={HeaderImage}>
        Fruga  itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi culpa nobis nemo natus doloremque?
      </Banner>
      <section className='gallery'>
        <div className='container gallery__container'>
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery