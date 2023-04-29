import React from 'react';
import './Canvas.css';
import Ground from '../Ground/Ground';
import Cat from '../Cat/Cat';

function Canvas() {
  return (
    <div className="canvas">
      <h1 className="canvas__title">Pixel cat</h1>
      <Cat />
      <Ground />
    </div>
  );
}

export default Canvas;
