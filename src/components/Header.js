import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/pets">Pets</Link>
    </div>
  );
};

export default Header;
