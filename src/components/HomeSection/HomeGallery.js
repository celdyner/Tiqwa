import React from 'react'
import GalleryCard from '../gallery/GalleryCard'
import GalleryData from '../gallery/GalleryData'

const HomeGallery = () => {
  return (
    <div>
            <section className='homeabout'>
                <div className='container top'>

                    <GalleryCard />
                    <GalleryData />
                </div>
            </section>


    </div>
  )
}

export default HomeGallery