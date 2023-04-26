import React from 'react';

function CatDown() {
  return (
    <div className="cat cat--down">
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
