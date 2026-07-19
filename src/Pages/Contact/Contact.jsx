import React from 'react'
import Map from '../../Components/Map/Map'
import HeaderContact from '../../Components/HeaderContact/HeaderContact'
import ContactForm from '../../Components/ContactForm/ContactForm'

const Contact = () => {
  return (
    <>
    <HeaderContact text="Get in Touch"
    backgroundImage={require('../../Assets/location.png')} 
    />
    <ContactForm/>
    <Map/>
    </>
  )
}

export default Contact
