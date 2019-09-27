import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaAlignRight } from 'react-icons/fa';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import ME_QUERY from '../../queries/ME_QUERY';
import links from '../../constants/navLinks';
import { setRem, setTransition } from '../../styles';

const Nav = ({ history }) => {
  const client = useApolloClient();
  const [isOpen, setNav] = useState(false);

  const toggleNav = () => {
    setNav(isOpen => !isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    client.clearStore();
    history.push('/login');
  };

  const {
    data: { me },
    loading,
    error,
  } = useQuery(ME_QUERY);

  const token = localStorage.getItem('token');

  if (loading) return null;
  if (error) return null;
  return (
    <NavWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h4>
              <span role="img" aria-label="pickle logo">
                🥒
              </span>{' '}
              Pickle
            </h4>
          </Link>
          <button type="button" className="logo-btn" onClick={toggleNav}>
            <FaAlignRight className="logo-icon" />
          </button>
        </div>

        <ul className={isOpen ? `nav-links ${token ? 'show-nav' : 'show-small-nav'}` : `nav-links`}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          })}
          {!me && <Link to="/login">Login</Link>}
          {me && <Link to={`/new/pickle`}>New Pickle</Link>}
          {me && <Link to={`/${me.username}`}>{me.username}</Link>}
          {me && <p onClick={handleLogout}>Logout</p>}
        </ul>
      </div>
    </NavWrapper>
  );
};

export default withRouter(Nav);

const NavWrapper = styled.nav`
  margin-bottom: ${setRem(20)};
  background: ${props => props.theme.mainWhite};
  border-bottom: 1px solid ${props => props.theme.lightGrey};

  a,
  p {
    cursor: pointer;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
  }

  .nav-header a {
    text-decoration: none;
    font-size: 28px;
    color: ${props => props.theme.mainBlack};
    cursor: pointer;
  }

  .logo-btn {
    background: transparent;
    border: none;
    outline: none;
  }

  .logo-btn:hover {
    cursor: pointer;
  }

  .logo-icon {
    color: var(--primaryColor);
    font-size: 1.5rem;
  }

  .nav-links {
    list-style-type: none;
    transition: var(--mainTransition);
    height: 0;
    overflow: hidden;
  }

  .show-nav {
    height: 210px;
  }

  .show-small-nav {
    height: 110px;
  }

  .nav-links a,
  p {
    display: grid;
    padding: 1rem 1.25rem;
    text-decoration: none;
    text-transform: capitalize;
    color: ${props => props.theme.mainBlack};
    ${setTransition}
  }
  .nav-links a:hover,
  p:hover {
    color: ${props => props.theme.accentColor};
  }

  @media screen and (min-width: 576px) {
    .navbar {
      padding: 0 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .logo-btn {
      display: none;
    }
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      height: auto;
      display: flex;
    }
  }
`;
