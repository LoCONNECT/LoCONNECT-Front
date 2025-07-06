import { useEffect, useState } from "react";
import { SignUpStyle } from "./styled";
import clsx from "clsx";
import UserType from "./UserType";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Form, Formik } from "formik";
import { initialValues } from "@/utill/signUp/initialValues";
import { validationSchema } from "@/utill/signUp/validationSchema";
import axios from "axios";
import { useTokenStore, useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/router";
import axiosInstance from "@/lib/axios";
import ModalContainer from "@/components/Component/Modal";

const SignUp = () => {
  const [step, setStep] = useState<1 | 2>(1);
  // 소상공인 : biz, 방송국 : media, 인플루언서 : influ
  const [type, setType] = useState<"biz" | "media" | "influ">("biz");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [imgType, setImgType] = useState("");

  const isFile = (value: any): value is File => {
    return value instanceof File;
  };

  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      const loggedIn = await useTokenStore.getState().checkToken();
      if (loggedIn) {
        router.replace("/");
      }
    };
    check();
  }, []);

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

        for (const [key, value] of formData.entries()) {
          console.log(key, value);
        }

        try {
          const res = await axiosInstance.post(
            `/auth/signup/${type}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          setModalContent(
            <>
              <p>회원가입이 완료되었습니다.</p>
              <p>
                관리자의 승인 후,
                <b style={{ color: "#0070f3" }}>승인 결과가 이메일로 발송</b>
                되며,
              </p>
              <p> 승인 완료 시 로그인이 가능합니다.</p>
              <p>감사합니다.</p>
            </>
          );
          setImgType("signup_success");
          setModalOpen(true);

          if (!modalOpen) {
            router.push("/");
          }
        } catch (e) {
          setModalContent(<p>이미 가입된 이메일입니다.</p>);
          setImgType("signup_error");
          setModalOpen(true);

          console.log("회원가입 실패:", e);
          // 실패 메시지 띄우기 등 추가 처리 가능
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
                <StepOne
                  type={type}
                  onNext={() => {
                    window.scrollTo(0, 0);
                    setStep(2);
                  }}
                />
              </div>
            )}

            {step === 2 && (
              <StepTwo
                type={type}
                onPrev={() => {
                  window.scrollTo(0, 0);
                  setStep(1);
                }}
              />
            )}
          </div>

          <ModalContainer
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            modalContent={modalContent}
            type={imgType}
          />
        </SignUpStyle>
      </Form>
    </Formik>
  );
};

export default SignUp;
