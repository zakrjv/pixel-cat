import React from 'react';
import './Cat.css';

function Cat() {
  return (
    <div className="cat">
      <div className="cat__ears">
        <div className="cat__ears--left" />
        <div className="cat__ears--right" />
      </div>

      <div className="cat__head-body">
        <div className="cat__eyes" />

        <div className="cat__muzzle">
          <div className="cat__nose" />
          <div className="cat__mouth" />
        </div>

      </div>
    </div>
  );
}

export default Cat;