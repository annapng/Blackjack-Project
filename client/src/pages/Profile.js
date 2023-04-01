import React, { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import './profile.css';
import Header from '../components/header';

import EditProfile from '../components/Profile/index';
import RemoveUser from '../components/RemoveUser';


// window.location.reload()

const Profile = () => {     


    const { loading, data} = useQuery(QUERY_ME);  

    const user = data?.me || [];

    useEffect(() => {
        
      }, [])

    if(loading){
        return (
            <h1>Loading...</h1>
        )
    };
   

    return (
        <>
        <Header />
        <br></br>
        
        <section className='App-header'>
            <div className="profile">
                <h2 className="card-header">
                   Welcome {user.username}!
                </h2>
                <div className='playerInfoBox'>
               <div>
                {user.profileText}
               </div>
               <div className="editProfile">
                <EditProfile username = {user.username} />
               </div>
                <ul className='gameInfo'>
                    <li>Games Played: {user.wins + user.losses}</li>
                    <li>Games Won: {user.wins}</li>
                    <li>Games Lost: {user.losses}</li>
                </ul>
                <div className="card-footer text-center m-3">
                    <Link to="/game">
                        <button className="btnProfile">Back to the game</button>
                    </Link>
                </div>
                <RemoveUser
                userId={user._id}
                />
                </div>
            </div>
        </section>
        </>
    )
};


export default Profile;