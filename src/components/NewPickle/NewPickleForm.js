import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import Title from '../globals/Title';
import { setRem, fadeIn, setTransition, sizes } from '../../styles';
import CREATE_PICKLE from '../../mutations/CREATE_PICKLE';
import ALL_PICKLE_QUERY from '../../queries/ALL_PICKLE_QUERY';

const NewPickleForm = ({ categories, history }) => {
  const [description, setDescription] = useState('');
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [optionThree, setOptionThree] = useState('');
  const [optionFour, setOptionFour] = useState('');
  const [categoryId, setCategoryId] = useState(categories[0].id);

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
            pickles: [data.createPickle.pickle, ...pickles],
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
        required
      />

      <p>Category</p>
      <div className="categories">
        <select name="category" value={categoryId} onChange={e => setCategoryId(e.target.value)}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <p>Options</p>
      <input
        type="text"
        name="option"
        value={optionOne}
        placeholder="Option"
        maxLength="40"
        onChange={e => {
          setOptionOne(e.target.value);
        }}
      />
      <input
        type="text"
        name="option"
        value={optionTwo}
        placeholder="Option"
        maxLength="40"
        onChange={e => {
          setOptionTwo(e.target.value);
        }}
      />
      <input
        type="text"
        name="option"
        value={optionThree}
        placeholder="Option"
        maxLength="40"
        onChange={e => {
          setOptionThree(e.target.value);
        }}
      />
      <input
        type="text"
        name="option"
        value={optionFour}
        placeholder="Option"
        maxLength="40"
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
    padding: ${setRem(16)};
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

  select {
    display: block;
    font-size: inherit;
    color: #444;
    padding: ${setRem(12)} ${setRem(16)};
    max-width: 100%;
    margin: 0;
    border: 1px solid #aaa;
    border-radius: 0.5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
  }

  h3 {
    text-align: center;
  }

  .categories {
    display: grid;

    input[type='radio'] {
    }
  }

  @media (max-width: ${sizes.desktop}px) {
    width: 80%;
  }

  @media (max-width: ${sizes.desktop}px) {
    width: 90%;
  }
`;

export default withRouter(NewPickleForm);
