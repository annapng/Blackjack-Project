import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../../utils/mutations';
import '../../pages/profile.css';
import '../../App.css'

const EditProfile = ({username}) => {

    const [profileText, setProfile] = useState('');
    const [toggle, setToggle] = useState(false)

    const [addProfile] = useMutation(ADD_PROFILE);

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log("profile:", profileText)
      try {
        const {data} = await addProfile({
          variables: { username, profileText },
        });
       setProfile('');
       window.location.reload()
        setToggle(!toggle)
      } catch (err) {
        console.error(err);
      }
    };

    const onClick = () => {
      setToggle(!toggle)
    }
   
    if (toggle) {
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
 )} else {
  return <button onClick={onClick}className="btnProfile" type="submit">
  Add/Edit Profile Info
</button>
 }
 };

 export default EditProfile;
