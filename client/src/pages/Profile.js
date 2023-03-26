import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/Auth';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import { ADD_PROFILE } from '../utils/mutations';

const Profile = () => {
    const { username: userParam } = useParams();

    const { data } = useQuery(userParam ? QUERY_SINGLE_USER : QUERY_ME, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.singleUser || {};

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

            // update me object's cache
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
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
    };

    return (
        <section>
            <div>
                <h2 class name="card-header">
                    Welcome {userParam ? `${user.username}'s` : 'you'}
                </h2>
                <p
                    className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
                        }`}
                >
                    Character Count: {characterCount}/280
                </p>
                <form
                    className="flex-row justify-center justify-space-between-md align-center"
                    onSubmit={handleFormSubmit}
                >
                    <div className="col-12 col-lg-9">
                        <textarea
                            name="ProfileText"
                            placeholder="About your playing style..."
                            value={profileText}
                            className="form-input w-100"
                            style={{ lineHeight: '1.5', resize: 'vertical' }}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="col-12 col-lg-3">
                        <button className="btn btn-primary btn-block py-3" type="submit">
                            Add Profile Info
                        </button>
                    </div>
                    {error && (
                        <div className="col-12 my-3 bg-danger text-white p-3">
                            {error.message}
                        </div>
                    )}
                </form>

                <ul>
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