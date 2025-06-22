import { FieldInputProps, FieldMetaProps } from "formik";

interface EmailProps {
  type: "media" | "biz" | "influ";
  emailField: FieldInputProps<string>;
  emailMeta: FieldMetaProps<string>;
  showEmailError: boolean;
}

const Email = ({ type, emailField, showEmailError, emailMeta }: EmailProps) => {
  const isFormValid = emailField.value.trim() && !showEmailError;

  return (
    <div className="StepOne_userInfo">
      <p className="SignUp_font">
        {type === "media" ? "회사 이메일" : "이메일"}
      </p>

      <div className="SignUp_inputDiv">
        <div className="SignUp_check">
          <input
            className="SignUp_input"
            type="email"
            placeholder="이메일을 입력해주세요."
            {...emailField}
          />

          <button
            type="button"
            className="SignUp_checkBtn"
            disabled={!isFormValid}
          >
            이메일 인증
          </button>
        </div>

        {showEmailError && <p className="SignUp_error">{emailMeta.error}</p>}
      </div>
    </div>
  );
};

export default Email;
