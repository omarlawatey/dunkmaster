import React from 'react';
import { Container } from 'react-bootstrap';
import { FaYoutube, FaDiscord, FaTwitch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Footer.scss';

const Footer = ({ setActiveIndex }) => {
  return (
    <div className="footer">
      <div className="upper-footer">
        <div className="footer-logo">
          <Link to="/" onClick={() => setActiveIndex(0)}>
            <img
              src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="social-media">
          <ul>
            <li className="youtube-icon">
              <a
                href="https://www.youtube.com/channel/UCCLnQIRBkqnsRAqpp-6s91g"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </li>
            <li className="discord-icon">
              <a
                href="https://discord.gg/dunks"
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord />
              </a>
            </li>
            <li className="twitch-icon">
              <a
                href="https://www.twitch.tv/lucife_ae"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitch />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Container>
        <hr />
      </Container>
      <p className="copy-rights">Copyright 2022 ©.All Rights Reserved</p>
    </div>
  );
};

export default Footer;
