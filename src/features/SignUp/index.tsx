import { useState } from "react";
import { SignUpStyle } from "./styled";
import clsx from "clsx";
import UserType from "./UserType";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Form, Formik } from "formik";
import { initialValues } from "@/utill/signUp/initialValues";
import { validationSchema } from "@/utill/signUp/validationSchema";

const SignUp = () => {
  const [step, setStep] = useState<1 | 2>(1);
  // 소상공인 : biz, 방송국 : media, 인플루언서 : influ
  const [type, setType] = useState<"biz" | "media" | "influ">("biz");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(type)}
      onSubmit={(values) => {
        console.log("제출 데이터", values);
        // axios.post(`${process.env.NEXT_PUBLIC_API_URL/auth`, values);
      }}
      // type 바뀔 때 유효성 스키마 재적용
      enableReinitialize
    >
      <Form>
        <SignUpStyle className="SignUp_wrap">
          <div className="SignUp_header">
            <div className="SignUp_title">회원가입</div>
            <div className="SignUp_stepContainer">
              <div className={clsx("SignUp_step", { active: step === 1 })} />
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
