import React from 'react'
import "./MeetTeam.css"
import meetPattern from "../../Assets/meet_team_pattern.svg"
import { useLocale } from '../../i18n/LocaleContext'

const MeetTeam = () => {
  const { t } = useLocale();

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
          <div className='meet_team_title'>{t('about.team.title')}</div>
          <div className='meet_team_description'>{t('about.team.body')}</div>
        </div>
      </div>
    </div>
  )
}

export default MeetTeam
