import clsx from "clsx";
import { FindPwStyled } from "./styled";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { validateId } from "@/utill/validationId";

function isAxiosError(error: unknown): error is AxiosError {
  return typeof error === "object" && error !== null && "isAxiosError" in error;
}

const FindPw = () => {
  const [message, setMessage] = useState("");

  const router = useRouter();

  // 이메일 인증번호 전송
  const formik = useFormik({
    initialValues: {
      id: "",
      email: "",
    },
    validationSchema: Yup.object({
      id: Yup.string()
        .required("아이디를 입력해주세요.")
        .test("is-valid-id", (value, ctx) => {
          const error = validateId(value ?? "");
          // yup의 test는 true/false 또는 error 메시지 반환
          return error ? ctx.createError({ message: error }) : true;
        }),
      email: Yup.string()
        .email("이메일 형식이 올바르지 않습니다.")
        .required("이메일을 입력해주세요."),
    }),
    onSubmit: async (values) => {
      try {
        // TODO: 이름, 이메일({id: '아이디', email: '이메일'}) 보내주면 회원정보 확인하여 있으면 해당 이메일로 임시 비밀번호 발송 요청
        await axiosInstance.post("/auth/send-password", values);

        alert("임시 비밀번호가 이메일로 발송되었습니다.");

        router.push("/login"); // 로그인 페이지로 이동
      } catch (e) {
        // TODO: NotFoundException 회원정보가 없다는 거 던져주기
        if (isAxiosError(e) && e.response?.status === 404) {
          setMessage("입력하신 정보와 일치하는 회원이 없습니다.");
        } else {
          setMessage("임시 비밀번호 요청 중 오류가 발생했습니다.");
        }
      }
    },
  });

  return (
    <FindPwStyled className={clsx("findpw_wrap")}>
      <div className="findpw_title">비밀번호 찾기</div>
      <form onSubmit={formik.handleSubmit} className="findpw_form">
        <label className="findpw_label" htmlFor="name">
          아이디
        </label>
        <input
          id="id"
          type="text"
          name="id"
          className="findpw_input"
          placeholder="아이디를 입력하세요"
          value={formik.values.id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.id && formik.errors.id && (
          <p className="findpw_error">{formik.errors.id}</p>
        )}

        <label className="findpw_label" htmlFor="email">
          이메일
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="findpw_input"
          placeholder="이메일을 입력하세요"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="findpw_error">{formik.errors.email}</p>
        )}

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="findpw_button"
        >
          인증하기
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </FindPwStyled>
  );
};

export default FindPw;
