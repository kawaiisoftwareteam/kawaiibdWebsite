import React from 'react'
import HeaderContact from '../../Components/HeaderContact/HeaderContact'
import Cta from '../../Components/CTA/Cta'
import CorporateProfileSection from '../../Components/CorporateProfileSection/CorporateProfileSection'

const CorporateProfile = () => {
  return (
    <>
    <HeaderContact text="Corporate Profile"
    backgroundImage={require('../../Assets/kg_corporateProfile.png')}/>
    <CorporateProfileSection/>
    <Cta title="Join the Kawaii Journey" text={<>
    Whether you're a business looking for innovative solutions, a student dreaming of global education, or an individual seeking to make a difference – Kawaii Group is your partner in progress.
    <br /><br />
    Together, let's build a future where borders are just lines on a map, and opportunities are limitless.
  </>}
              backgroundImage={require('../../Assets/bonding.png')}
              marginY="mb-10 md:mb-0"/>
    </>
  )
}

export default CorporateProfile
