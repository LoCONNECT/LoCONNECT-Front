import clsx from "clsx";
import { FindIdStyled } from "./styled";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "@/lib/axios";

const FindId = () => {
  const [codeSent, setCodeSent] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [message, setMessage] = useState("");

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
        // 이름, 이메일({name: '이름', email: '이메일'}) 보내주면 회원정보 확인하여 있으면 해당 이메일로 인증번호 보내주기
        const res = await axiosInstance.post("/auth/send-code", values);
        console.log(res.data);
        setCodeSent(res.data.result);
        setMessage(
          res.data.result === false
            ? res.data.message
            : "인증번호가 이메일로 발송되었습니다."
        );
      } catch (e) {
        setMessage("인증번호 발송에 실패했습니다.");
      }
    },
  });

  // 인증번호 확인
  const verifyCode = async () => {
    try {
      // 이름, 이메일, 사용자가 입력한 입력코드 보내주면 해당 사용자의 아이디 보내주기
      const res = await axiosInstance.post("/auth/check-code", {
        name: formik.values.name, // 이름
        email: formik.values.email, // 이메일
        code: inputCode, // 사용자가 입력한 인증코드
      });
      setMessage(
        res.data.result === true
          ? `당신의 아이디는 ${res.data.loginId}입니다.`
          : res.data.message
      );
    } catch (e) {
      setMessage("오류가 발생했습니다. 다시 시도해주세요.");
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
          onClick={() => {
            setInputCode("");
          }}
          type="submit"
          disabled={formik.isSubmitting}
          className="findid_button"
        >
          인증하기
        </button>
      </form>

      {codeSent && (
        <div className="verify_box">
          <label className="verify_label" htmlFor="inputCode">
            인증번호 입력
          </label>

          <input
            id="inputCode"
            type="number"
            className="verify_input"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            placeholder="인증번호를 입력하세요"
          />
          <button onClick={verifyCode} className="verify_button">
            확인
          </button>
        </div>
      )}

      {message && <p className="message">{message}</p>}
    </FindIdStyled>
  );
};

export default FindId;
