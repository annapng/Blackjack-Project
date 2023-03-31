import { faPencilSquare, faSignOut, faUsd, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'

const Header = () => (
  <div className='nav-bar'>
        <nav>
           {/* <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
           </NavLink> */}
           <NavLink exact="true" activeclassname="active" className="rules-link" to="/rules">
                <FontAwesomeIcon icon={faPencilSquare} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="coins-link" to="/coins">
                <FontAwesomeIcon icon={faUsd} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="profile-link" to="/profile/:username">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="logout-link" to="/logout">
                <FontAwesomeIcon icon={faSignOut} color="#4d4d4e" />
           </NavLink>
        </nav>
    </div>

    
    //header stuff
)

export default Header;