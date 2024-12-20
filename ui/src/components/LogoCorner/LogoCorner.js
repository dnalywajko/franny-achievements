import React from 'react';
import './LogoCorner.css';

function LogoCorner({ position, logo }) {
  return (
    <div className={`logo-corner ${position}`}>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default LogoCorner;
