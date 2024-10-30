// src/components/Footer.tsx
import React from 'react';

const footerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 0,
  width: '100vw',
  height: '40px',
  backgroundColor: '#fff',
  color: '#000',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'center'
};

const navStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  borderTop: '#6E7781 1px solid',
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

const aStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#0969DA'
}

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li>
            © 2024 Walisson Mariano
          </li>
          <li>
            <a style={aStyle} href="">
              Linkendin
            </a>
          </li>
          <li>
            <a style={aStyle} href="">
              You Tube
            </a>
          </li>
          <li>
            <a style={aStyle} href="">
              Instagram
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
