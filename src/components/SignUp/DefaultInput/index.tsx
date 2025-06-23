import { FieldInputProps, FieldMetaProps } from "formik";

interface defaultInputProps {
  type: string;
  placeholder: string;
  field: FieldInputProps<string>;
  showError: boolean;
  meta: FieldMetaProps<string>;
}

const DefaultInput = ({
  type,
  placeholder,
  field,
  showError,
  meta,
}: defaultInputProps) => {
  return (
    <div className="StepOne_userInfo">
      <p className="SignUp_font">{type}</p>
      <div className="SignUp_inputDiv">
        <input className="SignUp_input" placeholder={placeholder} {...field} />

        {showError && <p className="SignUp_error">{meta.error}</p>}
      </div>
    </div>
  );
};

export default DefaultInput;
