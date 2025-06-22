import { useFormField } from "@/utill/signUp/formField";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, UploadFile, message } from "antd";
import { RcFile } from "antd/es/upload";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";

const BizInfo = () => {
  const { setFieldValue, values } = useFormikContext<any>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

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

  useEffect(() => {
    if (values.bizLicense) {
      const file = values.bizLicense as RcFile;
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
  }, [values.bizLicense]);

  const uploadProps = {
    beforeUpload: (file: RcFile) => {
      setFieldValue("bizLicense", file);
      message.success(`${file.name} 업로드 성공`);
      return false; // 실제 업로드 막기
    },
    onRemove: () => {
      setFieldValue("bizLicense", null);
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
        <p className="SignUp_font">업체명</p>
        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            placeholder="업체명을 작성해주세요."
            {...bizNameField}
          />

          {showBizNameError && (
            <p className="SignUp_error">{bizNameMeta.error}</p>
          )}
        </div>
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">사업자 등록증 파일 업로드</p>
        <div className="SignUp_inputDiv">
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>업로드</Button>
          </Upload>

          {showBizLicenseError && (
            <p className="SignUp_error">{bizLicenseMeta.error}</p>
          )}
        </div>
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">업종</p>
        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            placeholder="예) 서비스직"
            {...bizCategoryField}
          />

          {showBizCategoryError && (
            <p className="SignUp_error">{bizCategoryMeta.error}</p>
          )}
        </div>
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">업체주소</p>
        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            placeholder="우편번호"
            {...bizCategoryField}
          />

          {showBizCategoryError && (
            <p className="SignUp_error">{bizCategoryMeta.error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BizInfo;
