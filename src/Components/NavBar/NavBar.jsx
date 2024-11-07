
import { faBars, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar = () => {
  return (
    <div>
      <div>
      Navbar
      <FontAwesomeIcon style={{width:'30px'}} icon={faThumbsUp} />
      <FontAwesomeIcon icon={faBars}  style={{width:'30px'}}/>
      <p>we can</p>
    </div>
    </div>
  )
}

export default NavBar
