import { useEffect, useState } from 'react';
import s from './Cube.module.css';

const cubeColors = ['#FFFF00', '#FF0000', '#FF33FF', '#6633CC', '#00FF66'];

export const Cube = (props) => {
  const { className, width, height } = props;
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const sides = document.querySelectorAll('.side');

    const interval = setInterval(() => {
      setColorIndex(colorIndex + 1);

      if (colorIndex === 4) {
        setColorIndex(0);
      }

      sides.forEach((side) => {
        side.style.borderColor = cubeColors[colorIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [colorIndex]);

  return (
    <div className={s.cubeMain}>
      <div
        className={`${s.cubeMainFront} ${className}`}
        style={{ width, height }}
      />
      <div
        className={`${s.cubeMainBack} ${className}`}
        style={{ width, height }}
      />
      <div
        className={`${s.cubeMainLeft} ${className}`}
        style={{ width, height }}
      />
      <div
        className={`${s.cubeMainRight} ${className}`}
        style={{ width, height }}
      />
      <div
        className={`${s.cubeMainTop} ${className}`}
        style={{ width, height }}
      />
      <div
        className={`${s.cubeMainBottom} ${className}`}
        style={{ width, height }}
      />
    </div>
  );
};
