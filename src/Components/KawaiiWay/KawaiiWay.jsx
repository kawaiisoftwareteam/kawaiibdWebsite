import React from 'react'
import "./KawaiiWay.css"
import kawaiiWay from '../../Assets/kawaiiWay.svg'
import icon1 from '../../Assets/wayIcon1.png'
import icon2 from '../../Assets/wayIcon2.png'
import icon3 from '../../Assets/wayIcon3.png'
import icon4 from '../../Assets/wayIcon4.png'
import cornerKg from "../../Assets/kg_left_corner_bottom.svg"
import { useLocale } from '../../i18n/LocaleContext'

const wayIcons = [icon1, icon2, icon3, icon4];

const KawaiiWay = () => {
  const { t } = useLocale();
  const beliefs = t('about.way.beliefs') || [];

  return (
    <div className='kawaii_way_main'>
      <div className='kawaii_sub_way'>
        <img src={kawaiiWay} alt="" className='svgpattern' />
        <img src={cornerKg} alt="" className='corner_kg_icon' />
        <div className='left_img_frame_kg'>
          <div className='left_img_bg'> </div>
        </div>
        <div className='kawaii_way_content'>
          <div className='kawaii_way_content_title'>{t('about.way.title')}</div>
          <div className='kawaii_way_content_sub'>{t('about.way.subtitle')}</div>
          <div className='kawaii_way_icon_box'>
            {beliefs.slice(0, 2).map((belief, index) => (
            <div className='kawaii_way_icon_col' key={index}>
              <div className='kawaii_way_icon_inside'>
                <div className='kawaii_way_icon_frame'>
                  <div className='kawaii_way_circle'>
                    <div className='kawaii_way_circle_bg'>
                      <img src={wayIcons[index]} alt="" />
                    </div>
                  </div>
                </div>
                <div className='kawaii_way_icon_title'>{belief.title}</div>
                <div className='kawaii_way_icon_description'>{belief.desc}</div>
              </div>
            </div>
            ))}
          </div>
          <div className='kawaii_way_icon_box'>
            {beliefs.slice(2, 4).map((belief, index) => (
            <div className='kawaii_way_icon_col' key={index + 2}>
              <div className='kawaii_way_icon_inside'>
                <div className='kawaii_way_icon_frame'>
                  <div className='kawaii_way_circle'>
                    <div className='kawaii_way_circle_bg'>
                      <img src={wayIcons[index + 2]} alt="" />
                    </div>
                  </div>
                </div>
                <div className='kawaii_way_icon_title'>{belief.title}</div>
                <div className='kawaii_way_icon_description'>{belief.desc}</div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KawaiiWay
