import React from 'react'
import NavHead from '../NavHead/NavHead'
import MainNav from '../MainNav/MainNav'

const Navbar = () => {
  return (
    <div  style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '125%',
      zIndex: 1000,
      backgroundColor: '#fff',
      transform: 'scale(0.8)',
      transformOrigin: 'top left',
    }}>
    <NavHead />
    <MainNav/>
    </div>
  )
}

export default Navbar
