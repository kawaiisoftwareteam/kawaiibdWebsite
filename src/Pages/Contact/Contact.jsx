import React from 'react'
import Map from '../../Components/Map/Map'
import HeaderContact from '../../Components/HeaderContact/HeaderContact'
import ContactForm from '../../Components/ContactForm/ContactForm'
import { useLocale } from '../../i18n/LocaleContext'

const Contact = () => {
  const { t } = useLocale();

  return (
    <>
    <HeaderContact text={t('contact.header')}
    backgroundImage={require('../../Assets/location.png')} 
    />
    <ContactForm/>
    <Map/>
    </>
  )
}

export default Contact
