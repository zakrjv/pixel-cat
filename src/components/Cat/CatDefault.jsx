import React from 'react';
import './Cat.css';

// eslint-disable-next-line react/prop-types
function CatDefault({ right }) {
  return (
    <div className={right ? 'cat cat--right' : 'cat'}>
      <div className="cat__ears">
        <div className="cat__ears--left" />
        <div className="cat__ears--right" />
      </div>

      <div className="cat__head-body">
        <div className="cat__eyes">
          <div className="cat__eyes--left" />
          <div className="cat__eyes--right" />
        </div>

        <div className="cat__mouth" />

        <div className="cat__whiskers">
          <svg width="67" height="26" viewBox="0 0 67 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="19.0732" y1="8.57968" x2="0.796945" y2="0.456908" stroke="#606060" />
            <line y1="-0.5" x2="20" y2="-0.5" transform="matrix(-0.913812 0.406138 0.406138 0.913812 19.5525 17.1228)" stroke="#606060" />
            <line x1="19.2762" y1="12.6228" x2="1.27625" y2="12.6228" stroke="#606060" />
            <line y1="-0.5" x2="20" y2="-0.5" transform="matrix(0.913812 -0.406138 -0.406138 -0.913812 48.2762 8.12277)" stroke="#606060" />
            <line x1="48.2031" y1="16.6659" x2="66.4793" y2="24.7886" stroke="#606060" />
            <line y1="-0.5" x2="18" y2="-0.5" transform="matrix(1 8.74228e-08 8.74228e-08 -1 48.2762 12.1228)" stroke="#606060" />
          </svg>
        </div>
      </div>

      <div className="cat__tail" />
    </div>
  );
}

export default CatDefault;
