import React from 'react'
import "./KawaiiAnatomy.css"
import kawaiiLeftTitle from "../../Assets/kawaiiLeftBond.webp"
import kawaiiRightTitle from "../../Assets/bonding.webp"
import { useLocale } from '../../i18n/LocaleContext'

const KawaiiAnatomy = () => {
  const { t } = useLocale();
  const anatomyData = t('about.anatomy.items') || [];

  return (
    <div className='anatomyMain'>
      <div className='anatomyHeadBox'>
        <div className='anatomyLeftBox'>
          <div className='anatomyLeftTitleBox'>
            <svg xmlns="http://www.w3.org/2000/svg" width="93" height="80" viewBox="0 0 93 80" fill="none">
              <path d="M69.3128 0H23.1033L0 39.9986L23.1033 80H69.3128L92.4242 39.9986L69.3128 0ZM28.8426 7.27298H61.5981C58.2495 13.7526 53.6195 19.4843 47.9889 24.1204C42.3582 28.7566 35.8444 32.2005 28.8426 34.2431V7.27298ZM28.8426 45.7515C35.8442 47.7946 42.3578 51.2386 47.9884 55.8747C53.619 60.5108 58.2492 66.2423 61.5981 72.7216H28.8426V45.7515ZM42.7409 43.6297H81.9239L67.5622 68.489C61.894 57.9638 53.2718 49.3257 42.7572 43.6378L42.7409 43.6297ZM42.7409 36.3567C53.2597 30.6726 61.8845 22.0337 67.5514 11.5056L81.9131 36.3649H42.7409V36.3567ZM21.5669 17.2123V62.8012L8.39752 40.0122L21.5669 17.2367V17.2123Z" fill="#BE1E2D" />
            </svg>
            <div className='anatomyLeftTitle'>{t('about.anatomy.title')}</div>
          </div>
          <div className='anatomyLeftBonding'>
            <img src={kawaiiLeftTitle} alt="" />
          </div>
        </div>
        <div className='anatomyRightBonding'>
          <img src={kawaiiRightTitle} alt="" className='anatomyRightBondingImg' />
        </div>
      </div>
      {anatomyData.map((item, index) => (
        <div className='anatomySmallCard' key={`${item.letter}-${index}`}>
          <div className='shapeAnatomyBg'>
            <div className='shapeAnatomyLetter'>{item.letter}</div>
          </div>
          <div className='anatomyDescriptionBox'>
            <div className='anatomyTitle'>{item.title}</div>
            <div className='anatomyDescriptionText'>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default KawaiiAnatomy
