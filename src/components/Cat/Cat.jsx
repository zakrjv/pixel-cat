import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import CatDown from './CatDown';
import CatDefault from './CatDefault';

function Cat() {
  const [cat, setCat] = useState({
    default: true,
    down: false,
    right: true,
    jump: false,
  });

  useHotkeys('s, ArrowDown', () => setCat({
    ...cat,
    default: false,
    down: true,
  }));
  useHotkeys('w, ArrowUp', () => setCat({
    ...cat,
    default: true,
    down: false,
  }));
  useHotkeys('a, ArrowLeft', () => setCat({
    ...cat,
    right: false,
  }));
  useHotkeys('d, ArrowRight', () => setCat({
    ...cat,
    right: true,
  }));

  return (
    cat.down ? <CatDown right={cat.right} /> : <CatDefault right={cat.right} />
  );
}

export default Cat;
