import Header from "@/components/Header";
import { useUserStore } from "@/store/useUserStore";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  const loadUserProfile = useUserStore((state) => state.loadUserProfile);

  // 새로고침 시 토큰 기반으로 유저 정보 갱신
  useEffect(() => {
    loadUserProfile();
  }, [loadUserProfile]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
