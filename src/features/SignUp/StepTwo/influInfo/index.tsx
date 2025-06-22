import { useFormField } from "@/utill/signUp/formField";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { RcFile, UploadFile } from "antd/es/upload";
import clsx from "clsx";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { UserTypeStyle } from "../../UserType/styled";

const InfluInfo = () => {
  const { setFieldValue, values } = useFormikContext<any>();

  const [fileList, setFileList] = useState<UploadFile[]>([]);
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

  useEffect(() => {
    if (values.influLicense) {
      const file = values.influLicense as RcFile;
      setFileList([
        {
          uid: "-1",
          name: file.name,
          status: "done",
          url: URL.createObjectURL(file), // 👈 프리뷰 URL 수동 생성
          originFileObj: file,
          type: file.type,
        },
      ]);
    } else {
      if (fileList.length > 0 && fileList[0].url) {
        URL.revokeObjectURL(fileList[0].url!);
      }
      setFileList([]);
    }
  }, [values.influLicense]);

  const uploadProps = {
    beforeUpload: (file: RcFile) => {
      setFieldValue("influLicense", file);
      message.success(`${file.name} 업로드 성공`);
      return false; // 실제 업로드 막기
    },
    onRemove: () => {
      setFieldValue("influLicense", null);
    },
    listType: "picture" as const,
    fileList,
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: true,
    },
  };

  return (
    <div className="StepTwo_wrap">
      <div className="StepOne_userInfo">
        <p className="SignUp_font">대표이름</p>
        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            placeholder="대표이름을 작성해주세요."
            {...representativeNameField}
          />

          {showRepresentativeNameError && (
            <p className="SignUp_error">{representativeNameMeta.error}</p>
          )}
        </div>
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">사업자 등록증 파일 업로드</p>
        <div className="SignUp_inputDiv">
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>업로드</Button>
          </Upload>

          {showInfluLicenseError && (
            <p className="SignUp_error">{influLicenseMeta.error}</p>
          )}
        </div>
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">소속부서</p>
        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            placeholder="예) 디자인"
            {...influDepartmentField}
          />

          {showInfluDepartmentError && (
            <p className="SignUp_error">{influDepartmentMeta.error}</p>
          )}
        </div>
      </div>

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

      <div className="StepOne_userInfo">
        <p className="SignUp_font">가입 목적</p>
        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            placeholder="예) 프로그램 홍보"
            {...influPurposeField}
          />

          {showInfluPurposeError && (
            <p className="SignUp_error">{influPurposeMeta.error}</p>
          )}
        </div>
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">홍보용 주소</p>
        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            placeholder="SNS 주소 혹은 PR 링크를 입력해주세요."
            {...promoUrlField}
          />

          {showPromoUrlError && (
            <p className="SignUp_error">{promoUrlMeta.error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfluInfo;
