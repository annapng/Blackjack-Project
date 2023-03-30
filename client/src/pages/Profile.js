import React, { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
//import Auth from '../utils/Auth';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import { ADD_PROFILE } from '../utils/mutations';
import './profile.css';

import EditProfile from '../components/Profile/index';

const Profile = () => {   
      /*const { username } = useParams();

    const { loading, data } = useQuery(
      username ? QUERY_SINGLE_USER : QUERY_ME,
      {
        variables: { username: username },
      }
    );
  
     const user = data?.me || data?.user || {};

     if (Auth.loggedIn() && Auth.getProfile().data.username === username) {
        return <Navigate to="/profile/:username" />;
      }
    
    if (loading) {
      return <div>Loading...</div>;
    }

    if (user?.user) {
        return (
          <h4>
            You need to be logged in to see your profile page. Use the navigation
            links above to sign up or log in!
          </h4>
        );
      }*/
  
    
    const { loading, data} = useQuery(QUERY_ME);  

    const user = data?.me || [];

    if(loading){
        return (
            <h1>Loading...</h1>
        )
    };

    return (
        <section className='App-header'>
            <div className="profile">
                <h2 className="card-header">
                   Welcome {user.username}!
                </h2>
               <div>
                {user.profileText}
               </div>
               <div className="editProfile">
                <EditProfile username = {user.username} />
               </div>
                <ul className='unstyled'>
                    <li>Games Played: {user.gamesPlayed}</li>
                    <li>Games Won: {user.wins}</li>
                    <li>Games Lost: {user.losses}</li>
                </ul>
                <div className="card-footer text-center m-3">
                    <Link to="/game">
                        <button className="btnProfile">Play!</button>
                    </Link>
                </div>
            </div>
        </section>
    )
};


export default Profile