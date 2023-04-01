import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REMOVE_USER } from '../../utils/mutations';
import '../../pages/profile.css';

const RemoveUser = ({_id}) => {

    const [removeUser] = useMutation(REMOVE_USER);

    const handleRemoveSubmit = async (event) => {
      event.preventDefault();
      try {
        const {data} = await removeUser({
          variables: { _id },
        });
      } catch (err) {
        console.error(err);
      }
    };

 return (
  <Link to="/">
  <button onChange={handleRemoveSubmit}className="btnProfile" type="submit">
  Delete User
</button>
</Link>
 )
 };

 export default RemoveUser;
