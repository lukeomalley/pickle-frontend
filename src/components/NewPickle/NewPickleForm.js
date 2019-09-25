import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import Title from '../globals/Title';
import { setRem, fadeIn, setTransition } from '../../styles';
import CREATE_PICKLE from '../../mutations/CREATE_PICKLE';
import ALL_PICKLE_QUERY from '../../queries/ALL_PICKLE_QUERY';

const NewPickleForm = ({ categories, history }) => {
  const [description, setDescription] = useState('');
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [optionThree, setOptionThree] = useState('');
  const [optionFour, setOptionFour] = useState('');
  const [categoryId, setCategoryId] = useState(0);

  const [createPickle, { error, loading }] = useMutation(CREATE_PICKLE, {
    onCompleted({ createPickle: { pickle } }) {
      history.push(`/${pickle.user.username}`);
    },
  });

  const handleSubmit = e => {
    e.preventDefault();
    let cat = parseInt(categoryId, 10);
    createPickle({
      variables: { categoryId: cat, description, optionOne, optionTwo, optionThree, optionFour },
      update: (store, { data }) => {
        const { pickles } = store.readQuery({ query: ALL_PICKLE_QUERY });
        store.writeQuery({
          query: ALL_PICKLE_QUERY,
          data: {
            pickles: [...pickles, data.createPickle.pickle],
          },
        });
      },
    });
  };

  if (loading) return null;
  if (error) return <div>Error</div>;
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

      <p>Options</p>
      <input
        type="text"
        name="option"
        value={optionOne}
        placeholder="Option"
        onChange={e => {
          setOptionOne(e.target.value);
        }}
      />
      <input
        type="text"
        name="option"
        value={optionTwo}
        placeholder="Option"
        onChange={e => {
          setOptionTwo(e.target.value);
        }}
      />
      <input
        type="text"
        name="option"
        value={optionThree}
        placeholder="Option"
        onChange={e => {
          setOptionThree(e.target.value);
        }}
      />
      <input
        type="text"
        name="option"
        value={optionFour}
        placeholder="Option"
        onChange={e => {
          setOptionFour(e.target.value);
        }}
      />
      <button type="submit">Post Pickle</button>
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
    padding: ${setRem(12)} ${setRem(32)};
    cursor: pointer;
    background: ${props => props.theme.mainBlack};
    color: ${props => props.theme.mainWhite};
    ${setTransition()};
    ${fadeIn('0%', '0%', '0%', 0.8)}

    &:hover {
      background: ${props => props.theme.accentColor};
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
