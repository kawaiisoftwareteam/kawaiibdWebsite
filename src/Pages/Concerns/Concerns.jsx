import React from 'react'
import HeaderContact from '../../Components/HeaderContact/HeaderContact'
import KawaiiConcerns from '../../Components/KawaiiConcerns/KawaiiConcerns'

const Concerns = () => {
  return (
    <>
    <HeaderContact text="Sister concerns"
    backgroundImage={require('../../Assets/sisterconcernCover.png')}/>
    <KawaiiConcerns/>
    </>
  )
}

export default Concerns
