
import { faBars, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NavBar = () => {
  return (
    <div>
      Navbar
      <FontAwesomeIcon style={{width:'30px'}} icon={faThumbsUp} />
      <FontAwesomeIcon icon={faBars}  style={{width:'30px'}}/>
    </div>
  )
}

export default NavBar
