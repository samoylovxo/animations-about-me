import { useSpring } from 'react-spring';
import Bounce from 'react-reveal/Bounce';
import cubeBlue from '../../images/block1.svg';
import cubeOrange from '../../images/block2.svg';
import cubeGreen from '../../images/block3.svg';
import { ClickNext } from './ClickNext/ClickNext';
import { calc, trans } from '../helpers';
import s from './Welcome.module.css';

export const Welcome = () => {
  const [xy, set] = useSpring(() => ({ xy: [0, 0] }));

  return (
    <div className={s.root}>
      <Bounce mirror duration={1000} delay={250}>
        <div
          className={s.welcome}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <img className={s.cubeBlue} src={cubeBlue} alt="cubeBlue" />
          <img className={s.cubeOrange} src={cubeOrange} alt="cubeOrange" />
          <img className={s.cubeGreen} src={cubeGreen} alt="cubeGreen" />
          <ClickNext
            pageInfo="/info"
            styleAnimation={{ transform: xy.xy.to(trans) }}
            text="Кликни сюда!"
          />
        </div>
      </Bounce>
    </div>
  );
};
