import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/Auth';
import { QUERY_SINGLE_USER, QUERY_USERS, QUERY_ME } from '../utils/queries';
import { ADD_PROFILE } from '../utils/mutations';
import './profile.css';

const Profile = () => {
    const { loading, data} = useQuery(QUERY_ME);  

    const user = data?.me || [];

    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }
    /*const [currentUser, setCurrentUser] = useState('');
    console.log({username})

    const getCurrentUser = async function () {
        const currentUser = await Parse.User.current();
        // Update state variable holding current user
        setCurrentUser(currentUser);
        return currentUser;
      };

    /*
    const [profileText, setProfileText] = useState('');

    const [characterCount, setCharacterCount] = useState(0);

    const [addProfile, { error }] = useMutation(ADD_PROFILE, {
        update(cache, { data: { addProfile } }) {
            try {
                const { profile } = cache.readQuery({ query: QUERY_SINGLE_USER });

                cache.writeQuery({
                    query: QUERY_SINGLE_USER,
                    data: { profile: [addProfile, ...profile] },
                });
            } catch (e) {
                console.error(e);
            }

            // update object's cache
            const { me } = cache.readQuery({ query: QUERY_SINGLE_USER });
            cache.writeQuery({
                query: QUERY_SINGLE_USER,
                data: { me: { ...me, profile: [...me.profile, addProfile] } },
            });
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addProfile({
                variables: {
                    profileText,
                    profileAuthor: Auth.getProfile().data.username,
                },
            });

            setProfileText('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'ProfileText' && value.length <= 280) {
            setProfileText(value);
            setCharacterCount(value.length);
        }
    };*/

    return (
        <section className='App-header'>
            <div className="profile">
                <h2 className="card-header">
                   {user.username}
                </h2>
                {/*<p
                    className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
                        }`}
                >
                    Character Count: {characterCount}/280
                    </p>*/}
                <form
                    className="flex-row justify-center justify-space-between-md align-center"
                    /*onSubmit={handleFormSubmit}*/
                >
                    <div className="profileBox">
                        <textarea
                            name="ProfileText"
                            placeholder="About your playing style..."
                            /*value= {profileText}*/
                            className="form-input w-200"
                            style={{ lineHeight: '1.5', resize: 'both' }}
                            /*onChange={handleChange}*/
                        ></textarea>
                    </div>
                    <div className="col-12 col-lg-3">
                        <button className="btnProfile" type="submit">
                            Add Profile Info
                        </button>
                    </div>
                    {/*error && (
                        <div className="col-12 my-3 bg-danger text-white p-3">
                            {error.message}
                        </div>
                    )*/}
                </form>

                <ul className='unstyled'>
                    <li>Games Played: </li>
                    <li>Games Won:</li>
                    <li>Games Lost:</li>
                </ul>
                <div className="card-footer text-center m-3">
                    <br></br>
                    <Link to="/game">
                        <button className="btn btn-lg btn-danger">Play!</button>
                    </Link>
                </div>
            </div>
        </section>
    )
};


export default Profile