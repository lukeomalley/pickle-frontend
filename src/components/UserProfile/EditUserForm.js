import React, { useState } from 'react';
import styled from 'styled-components';

import { setRem, sizes } from '../../styles';
import { PrimaryButton } from '../globals/Buttons';
import { useQuery } from '@apollo/react-hooks';
import ME_QUERY from '../../queries/ME_QUERY';

const EditUserForm = ({ toggleShowEdit, showEdit }) => {
  const { data, loading, error } = useQuery(ME_QUERY);
  const { me } = data;

  const [name, setName] = useState(me.name);
  const [bio, setBio] = useState(me.bio);
  const [imgUrl, setImgUrl] = useState(me.imgUrl);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <EditUserFormWrapper onSubmit={handleSubmit}>
      <hr />
      <h3>Edit Profile</h3>

      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={e => setName(e.target.name)} />

      <label htmlFor="name">Bio:</label>
      <input type="text" name="bio" value={bio} onChange={e => setBio(e.target.value)} />

      <label htmlFor="name">Profile Image Url:</label>
      <input type="text" name="imgUrl" value={imgUrl} onChange={e => setImgUrl(e.target.value)} />

      <div className="buttons">
        <PrimaryButton>Save</PrimaryButton>
        <PrimaryButton onClick={() => toggleShowEdit(!showEdit)}>Cancel</PrimaryButton>
      </div>
    </EditUserFormWrapper>
  );
};

const EditUserFormWrapper = styled.form`
  display: grid;
  grid-gap: ${setRem(20)};
  grid-template-columns: 1fr;
  width: 50%;
  margin: ${setRem(20)} auto;

  .buttons {
    display: grid;
    width: 50%;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
  }

  input[type='text'],
  input[type='password'] {
    padding: ${setRem(16)};
    border: none;
    width: 100%;
    font-family: ${props => props.theme.primaryFont};
    font-size: ${setRem(16)};
  }

  input[type='text']:focus,
  input[type='password']:focus {
    outline: none;
    border: 1px solid ${props => props.theme.accentColor};
  }

  h3 {
    text-align: center;
  }

  @media (max-width: ${sizes.desktop}px) {
    width: 50%;
  }

  @media (max-width: ${sizes.tablet}px) {
    width: 70%;
  }
`;

export default EditUserForm;
