import React from 'react';

// eslint-disable-next-line react/prop-types
function CatDown({ right }) {
  return (
    <div className={right ? 'cat cat--down cat--right' : 'cat cat--down'}>
      <div className="cat__ears">
        <div className="cat__ears--left" />
        <div className="cat__ears--right" />
      </div>

      <div className="cat__head-body">
        <div className="cat__eyes">
          <div className="cat__eyes--left" />
          <div className="cat__eyes--right" />
        </div>
      </div>

      <div className="cat__tail" />
    </div>
  );
}

export default CatDown;
