// src/components/Header.tsx
import React from 'react';
import { FiAlignJustify } from "react-icons/fi";
import '../main-header/header.style.css';

const headerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  height: '40px',
  width: '100%',
  color: '#fff',
  backgroundColor: '#24292F',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  verticalAlign: 'baseline',
  zIndex: 1000,
};

const divNavStyle: React.CSSProperties = {
  marginLeft: '30px',
  marginTop: '10px',
  textDecoration: 'none'
}

const divBtnStyle: React.CSSProperties = {
  marginRight: '50px',
  marginTop: '4px'
}

const aStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#fff'
}

const btnStyle: React.CSSProperties = {
  backgroundColor: '#24292F',
  border: 'none',
}

const iconStyle: React.CSSProperties = {
  fontSize: '30px',
  color: '#fff',
}


export default function MainHeader() {
  return (
    <header style={headerStyle}>
    <nav style={divNavStyle}>
      <div>
        <a className='logo' style={aStyle} href="">
          Walisson Mariano
        </a>
      </div>
    </nav>
    <div style={divBtnStyle}>
        <button style={btnStyle}>
          <FiAlignJustify style={iconStyle} />
        </button>
    </div>
    </header>
  );
};

