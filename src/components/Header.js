import React, { useEffect, useMemo, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdAccountBox } from 'react-icons/md';

import '../Styles/Header.scss';

const Header = () => {
  const [ActiveIndex, setActiveIndex] = useState(0);

  const pages = useMemo(
    () => [
      {
        name: 'Roles',
        path: '/roles'
      },
      {
        name: 'Pets',
        path: '/pets'
      },
      {
        name: 'About-us',
        path: '/about-us'
      }
    ],
    []
  );

  useEffect(() => {
    let pathname = window.location.pathname;

    pages.forEach((item, index) => {
      if (pathname === item.path) {
        setActiveIndex(index);
      }
    });

    if (pathname === '/login') {
      setActiveIndex(pages.length + 1);
    }
  }, [pages]);

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="navbar-brand">
            <Link to="/">
              <span>
                <img
                  src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png"
                  alt="logo"
                />
              </span>
            </Link>
          </div>
          <Nav className="me-auto">
            {pages.map((item, index) => {
              return (
                <div
                  role="button"
                  className={`nav-link ${
                    ActiveIndex === index ? 'active' : ''
                  }`}
                  tabIndex="0"
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                  <Link to={item.path}>{item.name}</Link>
                </div>
              );
            })}
          </Nav>
          <div
            className={`login-icon align-left ${
              ActiveIndex === pages.length + 1 ? 'active' : ''
            }`}
            role={'button'}
            onClick={() => setActiveIndex(pages.length + 1)}
          >
            <Link to="/login">
              <MdAccountBox width="2em" height="2em" color="white" />
            </Link>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
