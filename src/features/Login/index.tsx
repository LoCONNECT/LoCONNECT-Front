import clsx from "clsx";
import { LoginStyled } from "./styled";
import { useFormik } from "formik";
import { validateLoginForm } from "@/utill/validationLoginForm";
import { useState } from "react";
import axios from "axios";
import { useUserStore } from "@/store/useUserStore";
import axiosInstance from "@/lib/axios";

const Login = () => {
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
        // TODO: 로그인 요청(아이디랑 비밀번호 보냄)
        await axiosInstance.post("/auth/login", values);

        // 유저 정보 요청(해당 유저의 id, name, 회원유형(role) 보내주기)
        const res = await axiosInstance.get("/auth/user");

        // Zustand store에 유저 정보 저장
        const { id, name, role } = res.data;
        setUser({ id, name, role });

        console.log("로그인 및 유저정보 가져오기 성공:", { id, name, role });
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

              <div className="login_find">
                <div>아이디 찾기</div>
                <div className="login_line"></div>
                <div>비밀번호 찾기</div>
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
            <button className="login_join_btn">회원가입</button>
          </div>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
