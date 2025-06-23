import DefaultInput from "@/components/SignUp/DefaultInput";
import UploadInput from "@/components/SignUp/UploadInput";
import { useFormField } from "@/utill/signUp/formField";

const MediaInfo = () => {
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

  return (
    <div className="StepTwo_wrap">
      <DefaultInput
        type="회사명"
        placeholder="회사명을 작성해주세요."
        field={companyNameField}
        showError={!!showCompanyNameError}
        meta={companyNameMeta}
      />

      <DefaultInput
        type="담당 프로그램명"
        placeholder="담당 프로그램명을 작성해주세요."
        field={programNameField}
        showError={!!showProgramNameError}
        meta={programNameMeta}
      />

      <UploadInput
        type="proofFile"
        title="재직증명서 파일 업로드"
        showError={!!showProofFileError}
        meta={proofFileMeta}
      />

      <DefaultInput
        type="소속부서"
        placeholder="예) 디자인"
        field={departmentField}
        showError={!!showDepartmentError}
        meta={departmentMeta}
      />

      <DefaultInput
        type="가입 목적"
        placeholder="예) 프로그램 홍보"
        field={purposeField}
        showError={!!showPurposeError}
        meta={purposeMeta}
      />
    </div>
  );
};

export default MediaInfo;
