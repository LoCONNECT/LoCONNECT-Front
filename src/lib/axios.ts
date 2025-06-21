import axios from "axios";
import Router from "next/router";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // 쿠키 전송 허용 (HttpOnly 쿠키 포함)
});

// 응답 인터셉터 - 401 발생 시 로그인 페이지로 리디렉션
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      typeof window !== "undefined" &&
      !error.config?.url?.includes("/check-temp-token")
    ) {
      // 현재 페이지가 로그인 페이지가 아닐 경우에만 리다이렉트
      if (window.location.pathname !== "/login") {
        Router.replace("/login?reason=auth");
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
