import React from 'react'
import HeaderContact from '../../Components/HeaderContact/HeaderContact'
import AboutFirst from '../../Components/AboutFirst/AboutFirst'
import Cta from '../../Components/CTA/Cta'
import VisionAbout from '../../Components/VisionAbout/VisionAbout'
import KawaiiAnatomy from '../../Components/KawaiiAnatomy/KawaiiAnatomy'
import KawaiiWay from '../../Components/KawaiiWay/KawaiiWay'
import MeetTeam from '../../Components/MeetTeam/MeetTeam'
import MakeDifference from '../../Components/MakeDifference/MakeDifference'

const About = () => {
  return (
    <>
    <HeaderContact text="Who we are"
    backgroundImage={require('../../Assets/aboutCover.png')}/>
    <AboutFirst/>
    <VisionAbout/>
    <KawaiiAnatomy/>
    <MakeDifference/>
    <MeetTeam/>
    <KawaiiWay/>
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

export default About
