import React from 'react'
import { navData } from '../../../Data/navData'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'

const DropDown = () => {
  return (
    <header className='header'>
<div className="wrapper">
    <div className="logo">
        <h1>logo</h1>
    </div>
    <ul className="navigation">
        {navData.map((menu,i)=>(
            <li key={i} className='list_menu'>
                <div className='nav_menu'>
                <Link to={menu.path}>{menu.title}</Link>
                {menu.subMenu && (
                    <span>
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </span>
                )}
                </div>
            </li>
        ))}
    </ul>
</div>
    </header>
  )
}

export default DropDown
