import BizInfo from "./BizInfo";
import { StepTwoStyle } from "./styled";

interface StepTwoProps {
  type: "biz" | "media" | "influ";
  onPrev: () => void;
}

const StepOne = ({ type, onPrev }: StepTwoProps) => {
  return (
    <StepTwoStyle className="StepTwo_wrap">
      {type === "biz" ? (
        <BizInfo />
      ) : type === "media" ? (
        <div>media</div>
      ) : (
        <></>
      )}

      <div className="SignStep_btns">
        <button className="SignStep_btn" onClick={onPrev}>
          이전
        </button>
        <button type="submit" className="SignUp_submitBtn">
          회원가입
        </button>
      </div>
    </StepTwoStyle>
  );
};

export default StepOne;
