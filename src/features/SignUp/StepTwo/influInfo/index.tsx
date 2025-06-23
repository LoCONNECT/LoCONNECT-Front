import { useFormField } from "@/utill/signUp/formField";
import clsx from "clsx";
import { useFormikContext } from "formik";
import { useState } from "react";
import { UserTypeStyle } from "../../UserType/styled";
import DefaultInput from "@/components/SignUp/DefaultInput";
import UploadInput from "@/components/SignUp/UploadInput";

const InfluInfo = () => {
  const { setFieldValue } = useFormikContext<any>();

  const [type, setType] = useState<"individual" | "organization">("individual");

  const handleClickType = (selected: "individual" | "organization") => {
    setType(selected); // 로컬 상태
    setFieldValue("influType", selected); // Formik 필드 반영
  };

  const {
    field: representativeNameField,
    meta: representativeNameMeta,
    showError: showRepresentativeNameError,
  } = useFormField("representativeName");

  const { meta: influLicenseMeta, showError: showInfluLicenseError } =
    useFormField("influLicense");

  const {
    field: influDepartmentField,
    meta: influDepartmentMeta,
    showError: showInfluDepartmentError,
  } = useFormField("influDepartment");

  const {
    field: influPurposeField,
    meta: influPurposeMeta,
    showError: showInfluPurposeError,
  } = useFormField("influPurpose");

  const {
    field: promoUrlField,
    meta: promoUrlMeta,
    showError: showPromoUrlError,
  } = useFormField("promoUrl");

  return (
    <div className="StepTwo_wrap">
      <DefaultInput
        type="대표이름"
        placeholder="대표이름을 작성해주세요."
        field={representativeNameField}
        showError={!!showRepresentativeNameError}
        meta={representativeNameMeta}
      />

      <UploadInput
        type="influLicense"
        title="사업자 등록증 파일 업로드"
        showError={!!showInfluLicenseError}
        meta={influLicenseMeta}
      />

      <DefaultInput
        type="소속부서"
        placeholder="예) 디자인"
        field={influDepartmentField}
        showError={!!showInfluDepartmentError}
        meta={influDepartmentMeta}
      />

      <div className="SignUp_step">
        <div className="SignUp_userType">
          <p className="SignUp_font">형태</p>
          <UserTypeStyle className="UserType_wrap">
            <button
              type="button"
              className={clsx("UserType_btn", {
                active: type === "individual",
              })}
              onClick={() => handleClickType("individual")}
            >
              개인
            </button>
            <button
              type="button"
              className={clsx("UserType_btn", {
                active: type === "organization",
              })}
              onClick={() => handleClickType("organization")}
            >
              단체
            </button>
          </UserTypeStyle>
        </div>
      </div>

      <DefaultInput
        type="가입 목적"
        placeholder="예) 프로그램 홍보"
        field={influPurposeField}
        showError={!!showInfluPurposeError}
        meta={influPurposeMeta}
      />

      <DefaultInput
        type="홍보용 주소"
        placeholder="SNS 주소 혹은 PR 링크를 입력해주세요."
        field={promoUrlField}
        showError={!!showPromoUrlError}
        meta={promoUrlMeta}
      />
    </div>
  );
};

export default InfluInfo;
