import React from 'react'
import "./MeetTeam.css"
import meetPattern from "../../Assets/meet_team_pattern.svg"

const MeetTeam = () => {
  return (
    <div className='meet_team_main'>
      <div className='meet_team_box'>
        <div className='meet_team_image'>
          <div className='meet_img_1'>
        <img src={meetPattern} alt="meetPattern" />
          </div>
          <div className='meet_img_2'></div>
          <div className='meet_img_3'></div>
        </div>
        <div className='meet_teem_content'>
          <div className='meet_team_title'>Meet Our Team</div>
          <div className='meet_team_description'>Our team is the heart of the Kawaii Group. We are a collective of forward-thinking individuals from diverse fields, all united by a common goal: to create value for our clients, our communities, and the world.</div>
        </div>
      </div>
    </div>
  )
}

export default MeetTeam
