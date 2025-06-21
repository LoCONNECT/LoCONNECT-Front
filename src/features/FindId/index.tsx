import clsx from "clsx";
import { FindIdStyled } from "./styled";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";

function isAxiosError(error: unknown): error is AxiosError {
  return typeof error === "object" && error !== null && "isAxiosError" in error;
}

const FindId = () => {
  const [codeSent, setCodeSent] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");

  // 이메일 인증번호 전송
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("이름을 입력해주세요."),
      email: Yup.string()
        .email("이메일 형식이 올바르지 않습니다.")
        .required("이메일을 입력해주세요."),
    }),
    onSubmit: async (values) => {
      setMessage("");
      try {
        // TODO: 이름, 이메일 보내주면 회원정보 확인하여 있으면 해당 이메일로 인증번호 보내주기
        await axiosInstance.post("/auth/send-code", values);
        setCodeSent(true);
        setMessage("인증번호가 이메일로 발송되었습니다.");
      } catch (e) {
        // NotFoundException 회원정보가 없다는 거 던져주기
        if (isAxiosError(e) && e.response?.status === 404) {
          setMessage("입력하신 정보와 일치하는 회원이 없습니다.");
        } else {
          setMessage("인증번호 발송에 실패했습니다.");
        }
      }
    },
  });

  // 인증번호 확인
  const verifyCode = async () => {
    try {
      // TODO: 이름, 이메일, 사용자가 입력한 입력코드 보내주면 해당 사용자의 아이디 보내주기
      const res = await axiosInstance.post("/auth/check-code", {
        name: formik.values.name,
        email: formik.values.email,
        code: inputCode,
      });
      setUserId(res.data.userId);
      setMessage(`당신의 아이디는 ${res.data.userId}입니다.`);
    } catch (e) {
      // BadRequestException 인증번호 일치하지 않는다는 거 던져주기
      if (isAxiosError(e) && e.response?.status === 400) {
        setMessage("인증번호가 일치하지 않습니다.");
      } else {
        setMessage("오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <FindIdStyled className={clsx("findid_wrap")}>
      <div className="findid_title">아이디 찾기</div>
      <form onSubmit={formik.handleSubmit} className="findid_form">
        <label className="findid_label" htmlFor="name">
          이름
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="findid_input"
          placeholder="이름을 입력하세요"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="findid_error">{formik.errors.name}</p>
        )}

        <label className="findid_label" htmlFor="email">
          이메일
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="findid_input"
          placeholder="이메일을 입력하세요"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="findid_error">{formik.errors.email}</p>
        )}

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="findid_button"
        >
          인증하기
        </button>
      </form>

      <div className={clsx("verify_section", { visible: codeSent })}>
        {codeSent && (
          <>
            <label className="verify_label" htmlFor="inputCode">
              인증번호 입력
            </label>

            <input
              id="inputCode"
              type="text"
              className="verify_input"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="인증번호를 입력하세요"
            />
            <button onClick={verifyCode} className="verify_button">
              확인
            </button>
          </>
        )}
      </div>

      {message && <p className="message">{message}</p>}
    </FindIdStyled>
  );
};

export default FindId;
