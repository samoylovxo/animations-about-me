import ReactFullpage from '@fullpage/react-fullpage';
import { StepOne } from './Steps/StepOne/StepOne';
import { StepTwo } from './Steps/StepTwo/StepTwo';
import s from './InfoContent.module.css';

export const InfoContent = () => (
  <div className={s.infoContent}>
    <ReactFullpage
      scrollingSpeed={2000}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <StepOne />
          </div>
          <div className="section">
            <StepTwo />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  </div>
);
