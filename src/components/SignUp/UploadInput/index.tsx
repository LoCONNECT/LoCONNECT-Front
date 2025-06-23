import { UploadOutlined } from "@ant-design/icons";
import { Button, message, UploadFile } from "antd";
import Upload, { RcFile } from "antd/es/upload";
import { FieldMetaProps, useFormikContext } from "formik";
import { useEffect, useState } from "react";

interface UploadInputProps {
  type: string;
  title: string;
  showError: boolean;
  meta: FieldMetaProps<string>;
}

const UploadInput = ({ type, title, showError, meta }: UploadInputProps) => {
  const { setFieldValue, values } = useFormikContext<any>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const currentValue = values[type];

  useEffect(() => {
    if (currentValue) {
      const file = currentValue as RcFile;
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
  }, [currentValue]);

  const uploadProps = {
    beforeUpload: (file: RcFile) => {
      setFieldValue(type, file);
      message.success(`${file.name} 업로드 성공`);
      return false; // 실제 업로드 막기
    },
    onRemove: () => {
      setFieldValue(type, null);
    },
    listType: "picture" as const,
    fileList,
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: true,
    },
  };

  return (
    <div className="StepOne_userInfo">
      <p className="SignUp_font">{title}</p>
      <div className="SignUp_inputDiv">
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>업로드</Button>
        </Upload>

        {showError && <p className="SignUp_error">{meta.error}</p>}
      </div>
    </div>
  );
};

export default UploadInput;
