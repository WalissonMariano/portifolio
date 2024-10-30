// src/components/Header.tsx
import React from 'react';

const headerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 1000,
};


export default function MainHeader() {
  return (
    <header style={headerStyle}>
      <nav>
        <div>
          <a href="">
            Dev Walisson Mariano
          </a>
        </div>
        <div>
          <button>
            botao
          </button>
        </div>
      </nav>


    </header>
  );
};

