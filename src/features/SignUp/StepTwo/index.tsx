import { StepTwoStyle } from "./styled";

interface StepTwoProps {
  type: "biz" | "media" | "influ";
  onPrev: () => void;
}

const StepOne = ({ type, onPrev }: StepTwoProps) => {
  return (
    <StepTwoStyle className="StepOne_wrap">
      <button className="SignStep_btn" onClick={onPrev}>
        이전
      </button>
    </StepTwoStyle>
  );
};

export default StepOne;
