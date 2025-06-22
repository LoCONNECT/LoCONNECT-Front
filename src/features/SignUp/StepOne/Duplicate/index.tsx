import { ChangeEvent } from "react";
import { FieldInputProps, FieldMetaProps } from "formik";
import clsx from "clsx";

interface DuplicateProps {
  type: string;
  placeholder: string;
  field: FieldInputProps<any>;
  handleChange: (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void,
    fieldName: string
  ) => void;
  setFieldValue: (field: string, value: any) => void;
  handleCheck: () => void;
  showError: boolean;
  meta: FieldMetaProps<any>;
  checkMessage: string;
  isDuplicate: boolean;
}

const Duplicate = ({
  type,
  placeholder,
  field,
  handleChange,
  setFieldValue,
  handleCheck,
  showError,
  meta,
  checkMessage,
  isDuplicate,
}: DuplicateProps) => {
  const isFormValid = field.value.trim() && !showError;

  return (
    <div className="StepOne_userInfo">
      <p className="SignUp_font">{type}</p>

      <div className="SignUp_inputDiv">
        <div className="SignUp_check">
          <input
            className="SignUp_input"
            type="text"
            placeholder={placeholder}
            {...field}
            onChange={(e) => handleChange(e, setFieldValue, field.name)}
            {...(type === "전화번호" ? { maxLength: 13 } : {})}
          />

          <button
            className="SignUp_checkBtn"
            onClick={handleCheck}
            type="button"
            disabled={!isFormValid}
          >
            중복 확인
          </button>
        </div>

        {showError && <p className="SignUp_error">{meta.error}</p>}
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

export default Duplicate;
