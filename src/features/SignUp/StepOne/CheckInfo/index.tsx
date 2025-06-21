import { useState } from "react";
import clsx from "clsx";
import { checkDuplication } from "@/utill/signUp/checkDuplication ";
import { FieldHookConfig, useField } from "formik";

interface CheckInputFieldProps {
  field: {
    name: string;
    value: any;
    onChange: (e: React.ChangeEvent<any>) => void;
    onBlur: (e: React.FocusEvent<any>) => void;
  };
  name: string;
  type: "id" | "phone";
  placeholder: string;
  showError: boolean;
  errorMessage?: string;
  formatOnChange?: (value: string, setValue: (v: string) => void) => void;
}

const CheckInputField = ({
  field,
  name,
  type,
  placeholder,
  showError,
  errorMessage,
  formatOnChange,
}: CheckInputFieldProps) => {
  const [checkMessage, setCheckMessage] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formatOnChange) {
      formatOnChange(e.target.value, (v) => helpers.setValue(v));
    } else {
      helpers.setValue(e.target.value);
    }
  };

  const handleCheck = async () => {
    const rawValue = field.value.replace(/\D/g, ""); // 숫자만
    const res = await checkDuplication(type, rawValue);
    setCheckMessage(res.message);
    setIsDuplicate(res.isDuplicate);
  };

  console.log(showError, errorMessage);

  return (
    <div className="SignUp_userInfo">
      <p className="SignUp_font">{type === "id" ? "아이디" : "전화번호"}</p>

      <div className="SignUp_inputDiv">
        <div className="SignUp_check">
          <input
            className="SignUp_input"
            type="text"
            placeholder={placeholder}
            value={field.value}
            onChange={handleChange}
            maxLength={type === "phone" ? 13 : 20}
          />
          <button
            type="button"
            className="SignUp_checkBtn"
            onClick={handleCheck}
          >
            중복 확인
          </button>
        </div>

        {showError && <p className="SignUp_error">{errorMessage}</p>}
        {!showError && checkMessage && (
          <p
            className={clsx({
              SignUp_checkMessage: !isDuplicate,
              SignUp_error: isDuplicate,
            })}
          >
            {checkMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckInputField;
