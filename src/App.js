import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bottom: '20px',
          right: '20px',
          padding: '20px',
          backgroundColor: 'red',
          borderRadius: isCollapsed ? '70px' : '4px',
          color: 'white',
          width: isCollapsed ? '30px' : '300px',
          height: isCollapsed ? '30px' : '400px',
          fontSize: isCollapsed ? '15px' : '30px',
          transition: '0.4s',
        }}
        onClick={() => {
          if (isCollapsed) {
            setIsCollapsed(!isCollapsed);
          }
        }}
      >
        {isCollapsed ? (
          <i className="fa fa-plus" aria-hidden="true"></i>
        ) : (
          <>
            <div className="cardText">Chandan HR </div>
            <div
              className="mini"
              onClick={() => {
                setIsCollapsed(!isCollapsed);
              }}
            >
              -
            </div>
          </>
        )}
      </div>
    </>
  );
}
