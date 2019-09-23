import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaAlignRight } from 'react-icons/fa';

import links from '../../lib/navLinks';
import { setRem } from '../../lib/styles';

export default function Nav() {
  const [isOpen, setNav] = useState(false);

  const toggleNav = () => {
    setNav(isOpen => !isOpen);
  };

  return (
    <NavWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link href="/">
            <a>
              <h4>🥒 Pickle</h4>
            </a>
          </Link>
          <button type="button" className="logo-btn" onClick={toggleNav}>
            <FaAlignRight className="logo-icon" />
          </button>
        </div>

        <ul className={isOpen ? `nav-links show-nav` : `nav-links`}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path}>
                  <a>{item.text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  margin-bottom: ${setRem(20)};
  background: ${props => props.theme.mainWhite};
  border-bottom: 1px solid ${props => props.theme.lightGrey};

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
    height: 125px;
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
