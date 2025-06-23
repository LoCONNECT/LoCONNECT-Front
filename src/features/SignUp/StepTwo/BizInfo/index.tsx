import DefaultInput from "@/components/SignUp/DefaultInput";
import UploadInput from "@/components/SignUp/UploadInput";
import { useFormField } from "@/utill/signUp/formField";
import { handlePhoneChange } from "@/utill/signUp/phoneChange";
import { postCode } from "@/utill/signUp/postCodeFunc";
import { useFormikContext } from "formik";

const BizInfo = () => {
  const { setFieldValue } = useFormikContext<any>();

  const {
    field: bizNameField,
    meta: bizNameMeta,
    showError: showBizNameError,
  } = useFormField("bizName");

  const { meta: bizLicenseMeta, showError: showBizLicenseError } =
    useFormField("bizLicense");

  const {
    field: bizCategoryField,
    meta: bizCategoryMeta,
    showError: showBizCategoryError,
  } = useFormField("bizCategory");

  const {
    field: bizPostcodeField,
    meta: bizPostcodeMeta,
    showError: showBizPostcodeError,
  } = useFormField("bizPostcode");

  const {
    field: bizAddresseField,
    meta: bizAddresseMeta,
    showError: showBizAddressError,
  } = useFormField("bizAddress");

  const { field: bizAddressDetailField } = useFormField("bizAddressDetail");

  const {
    field: bizPhoneField,
    meta: bizPhoneMeta,
    showError: showBizPhoneError,
  } = useFormField("bizPhone");

  return (
    <div className="StepTwo_wrap">
      <DefaultInput
        type="업체명"
        placeholder="업체명을 작성해주세요."
        field={bizNameField}
        showError={!!showBizNameError}
        meta={bizNameMeta}
      />

      <UploadInput
        type="bizLicense"
        title="사업자 등록증 파일 업로드"
        showError={!!showBizLicenseError}
        meta={bizLicenseMeta}
      />

      <DefaultInput
        type="업종"
        placeholder="예) 서비스직"
        field={bizCategoryField}
        showError={!!showBizCategoryError}
        meta={bizCategoryMeta}
      />

      <div className="StepOne_userInfo">
        <p className="SignUp_font">업체주소</p>
        <div className="SignUp_inputDiv">
          <div className="SignUp_check">
            <input
              type="text"
              id="postcode"
              className="SignUp_input"
              placeholder="우편번호"
              {...bizPostcodeField}
              disabled
            />

            <button
              type="button"
              className="SignUp_checkBtn"
              onClick={() => postCode(setFieldValue)}
            >
              주소찾기
            </button>
          </div>

          {showBizPostcodeError && (
            <p className="SignUp_error">{bizPostcodeMeta.error}</p>
          )}
        </div>

        <div className="SignUp_inputDiv">
          <input
            type="text"
            className="SignUp_input"
            id="address"
            placeholder="주소"
            {...bizAddresseField}
            disabled
          />

          {showBizAddressError && (
            <p className="SignUp_error">{bizAddresseMeta.error}</p>
          )}
        </div>

        <input
          type="text"
          className="SignUp_input"
          id="detailAddress"
          placeholder="상세주소"
          {...bizAddressDetailField}
        />
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">업체 전화번호</p>
        <div className="SignUp_inputDiv">
          <input
            type="text"
            className="SignUp_input"
            placeholder="예) 01012345678"
            {...bizPhoneField}
            onChange={(e) =>
              handlePhoneChange(e, setFieldValue, bizPhoneField.name)
            }
            {...{ maxLength: 13 }}
          />

          {showBizPhoneError && (
            <p className="SignUp_error">{bizPhoneMeta.error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BizInfo;
