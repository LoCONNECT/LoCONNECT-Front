import { StepOneStyle } from "./styled";
import { useField } from "formik";

interface StepOneProps {
  type: "biz" | "media" | "influ";
  step: 1 | 2;
  setStep: React.Dispatch<React.SetStateAction<1 | 2>>;
  onNext: () => void;
}

const StepOne = ({ type, step, setStep, onNext }: StepOneProps) => {
  const [nameField] = useField("name");
  const [usernameField] = useField("username");
  const [passwordField] = useField("password");

  return (
    <StepOneStyle className="StepOne_wrap">
      <div className="StepOne_userInfo">
        <p className="SignUp_font">이름</p>
        <input
          className="SignUp_input"
          type="text"
          placeholder="이름을 작성해주세요."
          {...nameField}
        />
      </div>
      <button className="SignStep_btn" onClick={onNext}>
        다음
      </button>
    </StepOneStyle>
  );
};

export default StepOne;
