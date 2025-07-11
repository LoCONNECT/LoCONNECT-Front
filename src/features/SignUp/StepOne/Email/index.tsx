import { useState } from "react";
import { FieldInputProps, FieldMetaProps } from "formik";
import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";
import clsx from "clsx";

interface EmailProps {
  type: "media" | "biz" | "influ";
  emailField: FieldInputProps<string>;
  emailMeta: FieldMetaProps<string>;
  showEmailError: boolean;
  isVerified: boolean;
  setIsVerified: (val: boolean) => void;
}

function isAxiosError(error: unknown): error is AxiosError {
  return typeof error === "object" && error !== null && "isAxiosError" in error;
}

const Email = ({
  type,
  emailField,
  emailMeta,
  showEmailError,
  isVerified,
  setIsVerified,
}: EmailProps) => {
  const [codeSent, setCodeSent] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = emailField.value.trim() && !showEmailError;

  const handleSendCode = async () => {
    setMessage("");
    setIsLoading(true);

    try {
      const res = await axiosInstance.post("/mail/send-code", {
        email: emailField.value,
      });

      console.log(res.data);

      if (res.data.message) {
        setMessage("이미 등록된 이메일입니다.");
        setMessageType("error");
      } else {
        setCodeSent(true);
        setMessage("인증번호가 이메일로 발송되었습니다.");
        setMessageType("success");
      }
    } catch (e) {
      if (isAxiosError(e) && e.response?.status === 404) {
        setMessage("등록되지 않은 이메일입니다.");
        setMessageType("error");
      } else {
        setMessage("인증번호 발송에 실패했습니다.");
        setMessageType("error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const res = await axiosInstance.post("/mail/check-code", {
        email: emailField.value,
        code: inputCode,
      });

      console.log(res.data);

      if (res.data.result) {
        setIsVerified(true);
        setMessage("이메일 인증이 완료되었습니다.");
        setMessageType("success");
      } else {
        setMessage("인증번호가 일치하지 않습니다.");
        setMessageType("error");
      }
    } catch (e) {
      if (isAxiosError(e) && e.response?.status === 400) {
        setMessage("인증번호가 일치하지 않습니다.");
        setMessageType("error");
      } else {
        setMessage("오류가 발생했습니다. 다시 시도해주세요.");
        setMessageType("error");
      }
    }
  };

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
            disabled={!isFormValid || isVerified || isLoading}
            onClick={handleSendCode}
          >
            {isLoading ? "전송 중..." : "이메일 인증"}
          </button>
        </div>

        {showEmailError && <p className="SignUp_error">{emailMeta.error}</p>}
      </div>

      {codeSent && !isVerified && (
        <div className="StepOne_userInfo">
          <label className="SignUp_font" htmlFor="inputCode">
            인증번호 입력
          </label>

          <div className="SignUp_check">
            <input
              id="inputCode"
              type="text"
              className="SignUp_input"
              placeholder="인증번호를 입력하세요"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
            />
            <button
              type="button"
              className="SignUp_checkBtn"
              onClick={handleVerifyCode}
              disabled={!inputCode}
            >
              확인
            </button>
          </div>
        </div>
      )}

      {message && (
        <p
          className={clsx(
            messageType === "error" && "SignUp_error",
            messageType === "success" && "SignUp_success"
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Email;
