import React from 'react'
import './HomePhotoGallery.css'
import MasonaryGallery from '../MasonaryGallery/MasonaryGallery'

const HomePhotoGallery = () => {
  return (
    <div className='HPgalleryMain'>
      <div className='HPGcontentBox'>
        <div className='HPGcontentText'>
        Images Gallery
        </div>
      </div>
      <MasonaryGallery/>
    </div>
  )
}

export default HomePhotoGallery
