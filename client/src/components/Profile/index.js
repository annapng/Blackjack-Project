import React, { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';
import { ADD_PROFILE } from '../../utils/mutations';
import '../../pages/profile.css';

const EditProfile = ({username}) => {

    const [profileText, setProfile] = useState('');

    const [addProfile] = useMutation(ADD_PROFILE);

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log("profile:", profileText)
      try {
        const {data} = await addProfile({
          variables: { username, profileText },
        });
  
        setProfile('');
      } catch (err) {
        console.error(err);
      }
    };

 return (
    <form
    className="flex-row justify-center justify-space-between-md align-center"
    onSubmit={handleFormSubmit}
>
    <div className="profileBox">
        <textarea
            name="ProfileText"
            placeholder="About your playing style..."
            value= {profileText}
            className="form-input w-200"
            style={{ lineHeight: '1.5', resize: 'both' }}
            onChange={(event) => setProfile(event.target.value)}
        ></textarea>
    </div>
    <div className="col-12 col-lg-3">
                        <button className="btnProfile" type="submit">
                            Add/Edit Profile Info
                        </button>
                    </div>
         </form>
 )
 };

 export default EditProfile;
