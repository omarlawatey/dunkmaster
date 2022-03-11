import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdAccountBox } from 'react-icons/md';

import '../Styles/Header.scss';

const Header = ({ ActiveIndex, setActiveIndex, pages }) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="navbar-brand" onClick={() => setActiveIndex(0)}>
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
                <Link
                  role="button"
                  className={`nav-link ${
                    ActiveIndex === index + 1 ? 'active' : ''
                  }`}
                  tabIndex="0"
                  key={index}
                  onClick={() => setActiveIndex(index + 1)}
                  to={item.path}
                >
                  {item.name}
                </Link>
              );
            })}
          </Nav>
          <Link
            className={`login-icon align-left ${
              ActiveIndex === pages.length + 2 ? 'active' : ''
            }`}
            role={'button'}
            onClick={() => setActiveIndex(pages.length + 2)}
            to="/login"
          >
            <MdAccountBox width="2em" height="2em" color="white" />
          </Link>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
