import { useState } from "react";
import { SignUpStyle } from "./styled";
import clsx from "clsx";
import UserType from "./UserType";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Form, Formik } from "formik";
import { initialValues } from "@/utill/signUp/initialValues";
import { validationSchema } from "@/utill/signUp/validationSchema";
import axios from "axios";
import { useUserStore } from "@/store/useUserStore";

const SignUp = () => {
  const [step, setStep] = useState<1 | 2>(1);
  // 소상공인 : biz, 방송국 : media, 인플루언서 : influ
  const [type, setType] = useState<"biz" | "media" | "influ">("biz");

  const isFile = (value: any): value is File => {
    return value instanceof File;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(type)}
      onSubmit={async (values) => {
        const commonFields = {
          name: values.name,
          id: values.id,
          password: values.password,
          phone: values.phone,
          email: values.email,
          agreeRequired: values.agreeRequired,
          agreeOptional: values.agreeOptional,
        };

        let typeFields = {};

        if (type === "biz") {
          typeFields = {
            bizName: values.bizName,
            bizLicense: values.bizLicense,
            bizCategory: values.bizCategory,
            bizPostcode: values.bizPostcode,
            bizAddress: values.bizAddress,
            bizAddressDetail: values.bizAddressDetail,
            bizPhone: values.bizPhone,
          };
        } else if (type === "media") {
          typeFields = {
            companyName: values.companyName,
            programName: values.programName,
            proofFile: values.proofFile,
            department: values.department,
            purpose: values.purpose,
          };
        } else if (type === "influ") {
          typeFields = {
            representativeName: values.representativeName,
            influLicense: values.influLicense,
            influDepartment: values.influDepartment,
            influType: values.influType,
            influPurpose: values.influPurpose,
            promoUrl: values.promoUrl,
          };
        }

        const submitData = {
          ...commonFields,
          ...typeFields,
        };

        const formData = new FormData();

        Object.entries(submitData).forEach(([key, value]) => {
          if (isFile(value)) {
            formData.append(key, value);
          } else {
            formData.append(key, String(value));
          }
        });

        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${type}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("유저 모든 정보 : ", res.data);

        // const userData = res.data.user;

        // useUserStore.getState().setUser(userData);

        for (const [key, value] of formData.entries()) {
          console.log(key, value);
        }
      }}
      // type 바뀔 때 유효성 스키마 재적용
      enableReinitialize
    >
      <Form>
        <SignUpStyle className="SignUp_wrap">
          <div className="SignUp_header">
            <div className="SignUp_title">회원가입</div>
            <div className="SignUp_stepContainer">
              <div
                className={clsx("SignUp_step", {
                  active: step === 1 || step === 2,
                })}
              />
              <div className={clsx("SignUp_step", { active: step === 2 })} />
            </div>
          </div>

          <div className="SignUp_body">
            {step === 1 && (
              <div className="SignUp_step">
                <div className="SignUp_userType">
                  <p className="SignUp_font">회원유형</p>
                  <UserType type={type} setType={setType} />
                </div>
                <StepOne type={type} onNext={() => setStep(2)} />
              </div>
            )}

            {step === 2 && <StepTwo type={type} onPrev={() => setStep(1)} />}
          </div>
        </SignUpStyle>
      </Form>
    </Formik>
  );
};

export default SignUp;
