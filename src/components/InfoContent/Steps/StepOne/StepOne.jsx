import { useSpring, animated } from 'react-spring';
import Roll from 'react-reveal/Roll';
import { Cube } from '../../Cube/Cube';
import { calc, trans } from '../../../helpers';
import s from './StepOne.module.css';

export const StepOne = () => {
  const [xy, set] = useSpring(() => ({ xy: [0, 0] }));

  return (
    <div
      className={s.stepOne}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className={s.cube}>
        <Cube width={280} height={280} className="side" />
      </div>
      <Roll left duration={700}>
        <div className={s.content}>
          <animated.div style={{ transform: xy.xy.to(trans) }}>
            <h1>Йо! Привет!</h1>
            <p>Если ты тут - значит интересно кто я.</p>
          </animated.div>
        </div>
      </Roll>
    </div>
  );
};
