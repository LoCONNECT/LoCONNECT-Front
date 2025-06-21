import { useState } from "react";
import { StepOneStyle } from "./styled";
import { useFormikContext } from "formik";
import { useFormField } from "@/utill/signUp/formField";
import { handlePhoneChange } from "@/utill/signUp/phoneChange";
import { checkDuplication } from "@/utill/signUp/checkDuplication ";
import clsx from "clsx";
import Image from "next/image";

interface StepOneProps {
  type: "biz" | "media" | "influ";
  onNext: () => void;
}

const StepOne = ({ type, onNext }: StepOneProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const [isDuplicate, setIsDuplicate] = useState(false);
  const [idCheckMessage, setIdCheckMessage] = useState("");
  const [phoneCheckMessage, setPhoneCheckMessage] = useState("");

  const [oneAgree, setOneAgree] = useState(false);
  const [twoAgree, setTwoAgree] = useState(false);

  const { setFieldValue } = useFormikContext();
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
    nameField.value.trim() &&
    idField.value.trim() &&
    passwordField.value.trim() &&
    phoneField.value.trim() &&
    emailField.value.trim() &&
    !isDuplicate &&
    idCheckMessage &&
    phoneCheckMessage &&
    oneAgree;

  return (
    <StepOneStyle className="StepOne_wrap">
      <div className="StepOne_userInfo">
        <p className="SignUp_font">이름</p>

        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            type="text"
            placeholder="이름을 작성해주세요."
            {...nameField}
          />
          {showNameError && <p className="SignUp_error">{nameMeta.error}</p>}
        </div>
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">아이디</p>

        <div className="SignUp_inputDiv">
          <div className="SignUp_check">
            <input
              className="SignUp_input"
              type="text"
              placeholder="아이디를 입력해주세요."
              {...idField}
            />

            <button className="SignUp_checkBtn" onClick={handleCheckId}>
              중복 확인
            </button>
          </div>

          {showIdError && <p className="SignUp_error">{idMeta.error}</p>}
          {!showIdError && idCheckMessage && (
            <p
              className={clsx({
                SignUp_checkMessage: !isDuplicate,
                SignUp_error: isDuplicate,
              })}
            >
              {idCheckMessage}
            </p>
          )}
        </div>
      </div>

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
        <p className="SignUp_font">전화번호</p>

        <div className="SignUp_inputDiv">
          <div className="SignUp_check">
            <input
              className="SignUp_input"
              type="text"
              placeholder="예) 01012345678"
              {...phoneField}
              onChange={(e) => handlePhoneChange(e, setFieldValue)}
              maxLength={13}
            />

            <button className="SignUp_checkBtn" onClick={handleCheckPhone}>
              중복 확인
            </button>
          </div>

          {showPhoneError && <p className="SignUp_error">{phoneMeta.error}</p>}
          {!showPhoneError && phoneCheckMessage && (
            <p
              className={clsx({
                SignUp_checkMessage: !isDuplicate,
                SignUp_error: isDuplicate,
              })}
            >
              {phoneCheckMessage}
            </p>
          )}
        </div>
      </div>

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

            <button className="SignUp_checkBtn" onClick={handleCheckPhone}>
              이메일 인증
            </button>
          </div>

          {showEmailError && <p className="SignUp_error">{emailMeta.error}</p>}
        </div>
      </div>

      <div className="StepOne_agree">
        <div className="StepOne_agreeDiv">
          <div
            className="StepOne_icon"
            onClick={() => {
              if (oneAgree && twoAgree) {
                setOneAgree(false);
                setTwoAgree(false);
              } else {
                setOneAgree(true);
                setTwoAgree(true);
              }
            }}
          >
            <Image
              src={
                oneAgree && twoAgree
                  ? "/icon/checkBox_active.png"
                  : "/icon/checkBox.png"
              }
              alt="checkBox"
              fill
            />
          </div>
          <p>전체동의</p>
        </div>

        <div className="StepOne_line"></div>

        <div className="StepOne_agreeDiv">
          <div
            className="StepOne_icon"
            onClick={() => (oneAgree ? setOneAgree(false) : setOneAgree(true))}
          >
            <Image
              src={
                oneAgree ? "/icon/checkBox_active.png" : "/icon/checkBox.png"
              }
              alt="checkBox"
              fill
            />
          </div>
          <p>(필수) 서비스 이용약관 동의</p>
        </div>

        <div className="StepOne_agreeDiv">
          <div
            className="StepOne_icon"
            onClick={() => (twoAgree ? setTwoAgree(false) : setTwoAgree(true))}
          >
            <Image
              src={
                twoAgree ? "/icon/checkBox_active.png" : "/icon/checkBox.png"
              }
              alt="checkBox"
              fill
            />
          </div>
          <p>(선택) 광고성 정보 수신 동의 (SNS/MMS)</p>
        </div>
      </div>

      <button
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
