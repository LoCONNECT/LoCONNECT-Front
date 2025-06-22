import clsx from "clsx";
import BizInfo from "./BizInfo";
import { StepTwoStyle } from "./styled";
import { useFormikContext } from "formik";
import MediaInfo from "./MediaInfo";
import InfluInfo from "./influInfo";

interface StepTwoProps {
  type: "biz" | "media" | "influ";
  onPrev: () => void;
}

const StepTwo = ({ type, onPrev }: StepTwoProps) => {
  const { values, errors, handleSubmit } = useFormikContext<any>();

  const requiredBizFields = [
    "bizName",
    "bizLicense",
    "bizCategory",
    "bizPostcode",
    "bizAddress",
    "bizPhone",
  ];

  const requiredMediaFields = [
    "companyName",
    "programName",
    "proofFile",
    "department",
    "purpose",
  ];

  const requiredInfluFields = [
    "representativeName",
    "influLicense",
    "influDepartment",
    "influType",
    "influPurpose",
    "promoUrl",
  ];

  const isAllFieldsFilled = (fields: string[]) =>
    fields.every((key) => {
      if (key === "bizPhone") {
        return typeof values[key] === "string" && values[key].length === 13;
      }
      return Boolean(values[key]);
    });

  const hasNoErrors = (fields: string[]) => fields.every((key) => !errors[key]);

  const isFormValid =
    (type === "biz" &&
      isAllFieldsFilled(requiredBizFields) &&
      hasNoErrors(requiredBizFields)) ||
    (type === "media" &&
      isAllFieldsFilled(requiredMediaFields) &&
      hasNoErrors(requiredMediaFields)) ||
    (type === "influ" &&
      isAllFieldsFilled(requiredInfluFields) &&
      hasNoErrors(requiredInfluFields));

  return (
    <StepTwoStyle className="StepTwo_wrap">
      {type === "biz" ? (
        <BizInfo />
      ) : type === "media" ? (
        <MediaInfo />
      ) : (
        <InfluInfo />
      )}

      <div className="SignStep_btns">
        <button className="SignStep_btn" onClick={onPrev}>
          이전
        </button>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className={clsx("SignUp_submitBtn", { active: isFormValid })}
          disabled={!isFormValid}
        >
          회원가입
        </button>
      </div>
    </StepTwoStyle>
  );
};

export default StepTwo;
