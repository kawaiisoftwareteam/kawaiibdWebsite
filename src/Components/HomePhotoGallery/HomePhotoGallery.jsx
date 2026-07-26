import React from 'react'
import './HomePhotoGallery.css'
import MasonaryGallery from '../MasonaryGallery/MasonaryGallery'
import { useLocale } from '../../i18n/LocaleContext'

const HomePhotoGallery = () => {
  const { t } = useLocale();

  return (
    <div className='HPgalleryMain'>
      <div className='HPGcontentBox'>
        <div className='HPGcontentText'>
        {t('home.gallery.title')}
        </div>
      </div>
      <MasonaryGallery/>
    </div>
  )
}

export default HomePhotoGallery
