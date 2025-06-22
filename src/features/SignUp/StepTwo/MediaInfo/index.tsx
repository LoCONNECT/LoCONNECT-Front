import { useFormField } from "@/utill/signUp/formField";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { RcFile, UploadFile } from "antd/es/upload";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";

const MediaInfo = () => {
  const { setFieldValue, values } = useFormikContext<any>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const {
    field: companyNameField,
    meta: companyNameMeta,
    showError: showCompanyNameError,
  } = useFormField("companyName");

  const {
    field: programNameField,
    meta: programNameMeta,
    showError: showProgramNameError,
  } = useFormField("programName");

  const { meta: proofFileMeta, showError: showProofFileError } =
    useFormField("proofFile");

  const {
    field: departmentField,
    meta: departmentMeta,
    showError: showDepartmentError,
  } = useFormField("department");

  const {
    field: purposeField,
    meta: purposeMeta,
    showError: showPurposeError,
  } = useFormField("purpose");

  useEffect(() => {
    if (values.proofFile) {
      const file = values.proofFile as RcFile;
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
  }, [values.proofFile]);

  const uploadProps = {
    beforeUpload: (file: RcFile) => {
      setFieldValue("proofFile", file);
      message.success(`${file.name} 업로드 성공`);
      return false; // 실제 업로드 막기
    },
    onRemove: () => {
      setFieldValue("proofFile", null);
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
        <p className="SignUp_font">회사명</p>
        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            placeholder="회사명을 작성해주세요."
            {...companyNameField}
          />

          {showCompanyNameError && (
            <p className="SignUp_error">{companyNameMeta.error}</p>
          )}
        </div>
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">담당 프로그램명</p>
        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            placeholder="담당 프로그램명을 작성해주세요."
            {...programNameField}
          />

          {showProgramNameError && (
            <p className="SignUp_error">{programNameMeta.error}</p>
          )}
        </div>
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">재직증명서 파일 업로드</p>
        <div className="SignUp_inputDiv">
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>업로드</Button>
          </Upload>

          {showProofFileError && (
            <p className="SignUp_error">{proofFileMeta.error}</p>
          )}
        </div>
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">소속부서</p>
        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            placeholder="예) 디자인"
            {...departmentField}
          />

          {showDepartmentError && (
            <p className="SignUp_error">{departmentMeta.error}</p>
          )}
        </div>
      </div>

      <div className="StepOne_userInfo">
        <p className="SignUp_font">가입 목적</p>
        <div className="SignUp_inputDiv">
          <input
            className="SignUp_input"
            placeholder="예) 프로그램 홍보"
            {...purposeField}
          />

          {showPurposeError && (
            <p className="SignUp_error">{purposeMeta.error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaInfo;
