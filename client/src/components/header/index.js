import { faGamepad, faHome, faPencilSquare, faSignOut, faUsd, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import Logo from '../../assets/logo.png'

const Header = () => (
  <div className='nav-bar'>
        <nav>
        <img src={Logo} alt="logo"></img>
        <div className="container">
        
           <NavLink exact="true" activeclassname="active" className="rules-link" to="/rules">
                <FontAwesomeIcon icon={faPencilSquare} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="coins-link" to="/coins">
                <FontAwesomeIcon icon={faUsd} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="profile-link" to="/profile/:username">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="logout-link" to="/">
                <FontAwesomeIcon icon={faSignOut} color="#4d4d4e" />
           </NavLink>
           <NavLink exact="true" activeclassname="active" className="game-link" to="/game">
                <FontAwesomeIcon icon={faGamepad} color="#4d4d4e" />
           </NavLink>
           </div>
        </nav>
        
    </div>

    
    //header stuff
)

export default Header;