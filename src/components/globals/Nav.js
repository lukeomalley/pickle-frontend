import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaAlignRight } from 'react-icons/fa';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import ME from '../../queries/ME_QUERY';
import links from '../../constants/navLinks';
import { setRem } from '../../styles';

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
  } = useQuery(ME);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
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

        <ul className={isOpen ? `nav-links show-nav` : `nav-links`}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          })}
          {me && <Link to={`/${me.username}`}>{me.username}</Link>}
          {me && <Link to={`/new/pickle`}>New Pickle</Link>}
          {me && <a onClick={handleLogout}>Logout</a>}
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

  a {
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

  .nav-links a {
    display: grid;
    padding: 1rem 1.25rem;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    font-weight: bold;
    letter-spacing: var(--mainSpacing);
  }
  .nav-links a:hover {
    color: var(--primaryColor);
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
