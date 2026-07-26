import React from 'react'
import "./BottomFooter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'
import { useLocale } from '../../../i18n/LocaleContext'

const BottomFooter = () => {
  const { t } = useLocale();

  return (
    <div className='mainBottom'>
      <div className='bottom_button'>
        <div className='bText'>
          {t('footer.joinUsOn')}
        </div>
        <a href='https://www.facebook.com/profile.php?id=61563359894758' target='_blank' rel="noreferrer" className="text-white">
            <FontAwesomeIcon icon={faFacebook} size='xl' />
          </a>
          <a href='https://www.linkedin.com/company/kawaii-group-bd' target='_blank' rel="noreferrer" className="text-white">
            <FontAwesomeIcon icon={faLinkedin} size='xl' />
          </a>
      </div>
      <div className='bCopyright'>{t('footer.copyright')}</div>
      <div className='lnFrame'>
        <div className='lnButton'>
          <LanguageSwitcher isNavbar={false}/>
        </div>
      </div>
    </div>
  )
}

export default BottomFooter
