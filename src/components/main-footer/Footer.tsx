// src/components/Footer.tsx
import React from 'react';

const footerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 0,
  width: '100vw',
  height: '50px',
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'center'
};

const navStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  margin: '0% 20% 0% 20%'
}

const ulStyle: React.CSSProperties = {
  width: '100%',
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems:  'center',
  justifyContent: 'space-around',
  padding: 0,
  margin: 0
}

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li>
            © 2024 TabNews
          </li>
          <li>
            <a href="">
              Linkendin
            </a>
          </li>
          <li>
            <a href="">
              You Tube
            </a>
          </li>
          <li>
            <a href="">
              Instagram
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
