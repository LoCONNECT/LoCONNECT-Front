import { useState } from "react";
import { StepOneStyle } from "./styled";
import { useFormikContext } from "formik";
import { useFormField } from "@/utill/signUp/formField";
import { handlePhoneChange } from "@/utill/signUp/phoneChange";
import { checkDuplication } from "@/utill/signUp/checkDuplication ";
import clsx from "clsx";
import Agree from "./Agree";
import Email from "./Email";
import Duplicate from "./Duplicate";
import { handleIdChange } from "@/utill/signUp/idChange";
import DefaultInput from "@/components/SignUp/DefaultInput";

interface StepOneProps {
  type: "biz" | "media" | "influ";
  onNext: () => void;
}

const StepOne = ({ type, onNext }: StepOneProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const [isDuplicate, setIsDuplicate] = useState(false);
  const [idCheckMessage, setIdCheckMessage] = useState("");
  const [phoneCheckMessage, setPhoneCheckMessage] = useState("");

  const [isVerified, setIsVerified] = useState(false);

  const { values, setFieldValue } = useFormikContext<any>();
  const togglePassword = () => setShowPassword((prev) => !prev);

  const {
    field: nameField,
    meta: nameMeta,
    showError: showNameError,
  } = useFormField("name");

  const {
    field: idField,
    meta: idMeta,
    showError: showIdError,
  } = useFormField("id");

  const {
    field: passwordField,
    meta: passwordMeta,
    showError: showPwError,
  } = useFormField("password");

  const {
    field: confirmPasswordField,
    meta: confirmPasswordMeta,
    showError: showConfirmPwError,
  } = useFormField("confirmPassword");

  const {
    field: phoneField,
    meta: phoneMeta,
    showError: showPhoneError,
  } = useFormField("phone");

  const {
    field: emailField,
    meta: emailMeta,
    showError: showEmailError,
  } = useFormField("email");

  const handleCheckId = async () => {
    const res = await checkDuplication("id", idField.value);
    setIdCheckMessage(res.message);
    setIsDuplicate(res.isDuplicate);
  };

  const handleCheckPhone = async () => {
    // 하이픈 제거
    const rawPhone = phoneField.value.replace(/\D/g, "");
    const res = await checkDuplication("phone", rawPhone);
    setPhoneCheckMessage(res.message);
    setIsDuplicate(res.isDuplicate);
  };

  const isFormValid =
    (nameField.value || "").trim() &&
    (idField.value || "").trim() &&
    (passwordField.value || "").trim() &&
    (confirmPasswordField.value || "").trim() &&
    (phoneField.value || "").trim() &&
    (emailField.value || "").trim() &&
    !isDuplicate &&
    idCheckMessage &&
    phoneCheckMessage &&
    !showConfirmPwError &&
    values.agreeRequired &&
    isVerified;

  return (
    <StepOneStyle className="StepOne_wrap">
      <DefaultInput
        type="이름"
        placeholder="이름을 입력해주세요."
        field={nameField}
        showError={!!showNameError}
        meta={nameMeta}
      />

      <Duplicate
        type="아이디"
        placeholder="아이디를 입력해주세요."
        handleChange={handleIdChange}
        setFieldValue={setFieldValue}
        field={idField}
        handleCheck={handleCheckId}
        showError={!!showIdError}
        meta={idMeta}
        checkMessage={idCheckMessage}
        isDuplicate={isDuplicate}
      />

      <div className="StepOne_userInfo">
        <p className="SignUp_font">비밀번호</p>

        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요."
            {...passwordField}
          />
          <div onClick={togglePassword} className="SignUp_toggle">
            {showPassword ? "숨김" : "표시"}
          </div>
          {showPwError && <p className="SignUp_error">{passwordMeta.error}</p>}
        </div>
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">비밀번호 확인</p>

        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요."
            {...confirmPasswordField}
            value={confirmPasswordField.value || ""}
          />
          <div onClick={togglePassword} className="SignUp_toggle">
            {showPassword ? "숨김" : "표시"}
          </div>
          {showConfirmPwError && (
            <p className="SignUp_error">{confirmPasswordMeta.error}</p>
          )}
        </div>
      </div>

      <Duplicate
        type="전화번호"
        placeholder="예) 01012345678"
        field={phoneField}
        handleChange={handlePhoneChange}
        setFieldValue={setFieldValue}
        handleCheck={handleCheckPhone}
        showError={!!showPhoneError}
        meta={phoneMeta}
        checkMessage={phoneCheckMessage}
        isDuplicate={isDuplicate}
      />

      <Email
        type={type}
        emailField={emailField}
        emailMeta={emailMeta}
        showEmailError={!!showEmailError}
        isVerified={isVerified}
        setIsVerified={setIsVerified}
      />

      <Agree
        oneAgree={values.agreeRequired}
        twoAgree={values.agreeOptional}
        setOneAgree={(val) => setFieldValue("agreeRequired", val)}
        setTwoAgree={(val) => setFieldValue("agreeOptional", val)}
      />

      <button
        type="button"
        className={clsx("SignStep_btn", { SignStep_activeBtn: isFormValid })}
        onClick={onNext}
        // disabled={!isFormValid}
      >
        다음
      </button>
    </StepOneStyle>
  );
};

export default StepOne;
