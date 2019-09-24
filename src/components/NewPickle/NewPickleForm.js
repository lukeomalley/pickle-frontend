import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import Title from '../globals/Title';
import { setRem, fadeIn } from '../../styles';
import CREATE_PICKLE from '../../mutations/CREATE_PICKLE';

const NewPickleForm = ({ categories, history }) => {
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [createPickle, { data, loading }] = useMutation(CREATE_PICKLE, {
    onCompleted({ createPickle: { pickle } }) {
      setDescription('');
      setCategoryId(0);
      history.push(`/pickle/edit/${pickle.id}`);
    },
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(categoryId, description);
    let cat = parseInt(categoryId, 10);
    createPickle({ variables: { categoryId: cat, description } });
  };

  return (
    <NewPickleFormWrapper onSubmit={handleSubmit}>
      <Title title="In A Pickle " subtitle="Again, Are We?" />
      <input
        type="text"
        placeholder="Whats your pickle..?"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <div className="categories">
        <p>Category</p>
        {categories.map(category => (
          <label key={category.id}>
            <input
              type="radio"
              name="category"
              value={category.id}
              checked={categoryId === category.id}
              onChange={() => setCategoryId(category.id)}
            />
            {category.name}
          </label>
        ))}
      </div>
      <button type="submit">
        Continue <FaArrowRight />
      </button>
    </NewPickleFormWrapper>
  );
};

const NewPickleFormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${setRem(20)};
  width: 50%;
  margin: 0 auto;

  input[type='text'] {
    padding: ${setRem(8)};
    border: none;
    width: 100%;
    font-family: ${props => props.theme.primaryFont};
    font-size: ${setRem(16)};
  }

  input[type='text']:focus {
    outline: none;
  }

  button {
    width: 50%;
    margin: 0 auto;
    font-size: ${setRem(12)};
    border: 1px solid ${props => props.theme.lightGrey};
    padding: ${setRem(12)} ${setRem(32)};
    cursor: pointer;
    ${fadeIn('0%', '0%', '0%', 0.8)}

    &:hover {
      background: ${props => props.theme.lightGrey};
    }
  }

  h3 {
    text-align: center;
  }

  .categories {
    display: grid;

    input[type='radio'] {
    }
  }
`;
export default withRouter(NewPickleForm);
