import React from 'react'
import "./KawaiiWay.css"
import kawaiiWay from '../../Assets/kawaiiWay.svg'
import icon1 from '../../Assets/wayIcon1.png'
import icon2 from '../../Assets/wayIcon2.png'
import icon3 from '../../Assets/wayIcon3.png'
import icon4 from '../../Assets/wayIcon4.png'
import cornerKg from "../../Assets/kg_left_corner_bottom.svg"

const KawaiiWay = () => {
  return (
    <div className='kawaii_way_main'>
      <div className='kawaii_sub_way'>
        <img src={kawaiiWay} alt="" className='svgpattern' />
        <img src={cornerKg} alt="" className='corner_kg_icon' />
        <div className='left_img_frame_kg'>
          <div className='left_img_bg'> </div>
        </div>
        <div className='kawaii_way_content'>
          <div className='kawaii_way_content_title'>The Kawaii Way</div>
          <div className='kawaii_way_content_sub'>Our success is built on core beliefs that guide every decision:</div>
          <div className='kawaii_way_icon_box'>
            <div className='kawaii_way_icon_col'>
              <div className='kawaii_way_icon_inside'>
                <div className='kawaii_way_icon_frame'>
                  <div className='kawaii_way_circle'>
                    <div className='kawaii_way_circle_bg'>
                      <img src={icon1} alt="" />
                    </div>
                  </div>
                </div>
                <div className='kawaii_way_icon_title'>Innovation is Limitless:</div>
                <div className='kawaii_way_icon_description'>Every challenge is an opportunity
                  to innovate.</div>
              </div>
            </div>
            <div className='kawaii_way_icon_col'>
              <div className='kawaii_way_icon_inside'>
                <div className='kawaii_way_icon_frame'>
                  <div className='kawaii_way_circle'>
                    <div className='kawaii_way_circle_bg'>
                      <img src={icon2} alt="" />
                    </div>
                  </div>
                </div>
                <div className='kawaii_way_icon_title'>Collaboration is Key:</div>
                <div className='kawaii_way_icon_description'>The best solutions emerge when diverse minds come together.</div>
              </div>
            </div>
          </div>
          <div className='kawaii_way_icon_box'>
            <div className='kawaii_way_icon_col'>
              <div className='kawaii_way_icon_inside'>
                <div className='kawaii_way_icon_frame'>
                  <div className='kawaii_way_circle'>
                    <div className='kawaii_way_circle_bg'>
                      <img src={icon3} alt="" />
                    </div>
                  </div>
                </div>
                <div className='kawaii_way_icon_title'>Quality is Non-Negotiable:</div>
                <div className='kawaii_way_icon_description'>We uphold the highest standards in everything we do.</div>
              </div>
            </div>
            <div className='kawaii_way_icon_col'>
              <div className='kawaii_way_icon_inside'>
                <div className='kawaii_way_icon_frame'>
                  <div className='kawaii_way_circle'>
                    <div className='kawaii_way_circle_bg'>
                      <img src={icon4} alt="" />
                    </div>
                  </div>
                </div>
                <div className='kawaii_way_icon_title'>People are Our Greatest Asset:</div>
                <div className='kawaii_way_icon_description'>We invest in talent and
                  nurture potential.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KawaiiWay
