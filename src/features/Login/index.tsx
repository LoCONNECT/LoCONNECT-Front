import clsx from "clsx";
import { LoginStyled } from "./styled";
import { useFormik } from "formik";
import { validateLoginForm } from "@/utill/validationLoginForm";
import { useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/router";
import { message } from "antd";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  // zustand 함수
  const setUser = useUserStore((state) => state.setUser);

  // 비밀번호 보이기/숨기기
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: { id: "", password: "" },
    validate: validateLoginForm,
    onSubmit: async (values) => {
      try {
        // 로그인 요청(아이디랑 비밀번호 이런식으로 보냄 -> {id: '아이디', password: '비밀번호'})
        const res = await axiosInstance.post("/auth/login", values);

        console.log("로그인", res.data);

        if (res.data.message) {
          // 승인되지 않은 유저
          message.info(res.data.message);
          return; // 홈으로 이동 안 함
        } else {
          // 승인된 유저 -> Zustand store에 유저 정보 저장
          setUser(res.data);
          router.push("/");
        }
      } catch (e) {
        console.error("로그인 실패:", e);
      }
    },
  });

  // 아이디 에러메시지 조건
  const showIdError =
    (formik.values.id.length > 0 || formik.submitCount > 0) && formik.errors.id;

  // 비밀번호 에러메시지 조건
  const showPwError =
    (formik.values.password.length > 0 || formik.submitCount > 0) &&
    formik.errors.password;

  return (
    <LoginStyled className={clsx("login_center")}>
      <div className="login_wrap">
        <div className="login_box">
          <div>
            <div className="login_title">로그인</div>
            <form className="login_form" onSubmit={formik.handleSubmit}>
              <label className="login_label" htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                type="text"
                name="id"
                value={formik.values.id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="아이디"
                className="login_input"
              />
              {showIdError && (
                <p className="login_error_message">{formik.errors.id}</p>
              )}

              <label className="login_label" htmlFor="password">
                비밀번호
              </label>
              <div className="login_pw_box">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="비밀번호"
                  className="login_input"
                />
                <div className="login_see" onClick={togglePassword}>
                  {showPassword ? "숨김" : "표시"}
                </div>
              </div>
              {showPwError && (
                <p className="login_error_message">{formik.errors.password}</p>
              )}

              <div className="login_find_box">
                <div
                  className="login_find"
                  onClick={() => {
                    router.push("/findid");
                  }}
                >
                  아이디 찾기
                </div>
                <div className="login_line"></div>
                <div
                  className="login_find"
                  onClick={() => {
                    router.push("/findpw");
                  }}
                >
                  비밀번호 찾기
                </div>
              </div>

              <button
                className="login_login_btn"
                type="submit"
                disabled={formik.isSubmitting}
              >
                로그인
              </button>
            </form>
          </div>

          {/* 구분선 */}
          <div className="login_division"></div>

          {/* 회원가입 버튼 */}
          <div className="login_join_box">
            <div className="login_explain">
              아직 LoConnect의 회원이 아니신가요?
            </div>
            <button
              className="login_join_btn"
              onClick={() => {
                router.push("/signUp");
              }}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
