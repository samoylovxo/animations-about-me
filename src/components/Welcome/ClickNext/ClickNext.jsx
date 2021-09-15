import { animated } from 'react-spring';
import { NavLink } from 'react-router-dom';
import s from './ClickNext.module.css';

export const ClickNext = (props) => {
  const { styleAnimation, pageInfo, text } = props;
  return (
    <animated.div className={s.content} style={styleAnimation}>
      <NavLink to={pageInfo} className={s.text}>
        {text}
      </NavLink>
    </animated.div>
  );
};
