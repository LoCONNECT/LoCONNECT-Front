import Header from "@/components/Header";
import { useUserStore } from "@/store/useUserStore";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const loadUserProfile = useUserStore((state) => state.loadUserProfile);
  const router = useRouter();

  // 새로고침 시 토큰 기반으로 유저 정보 갱신
  useEffect(() => {
    if (
      router.pathname !== "/" &&
      router.pathname !== "/login" &&
      router.pathname !== "/signUp"
    ) {
      loadUserProfile();
    }
  }, [loadUserProfile, router.pathname]);

  return (
    <>
      <Head>
        <title>LoConnect</title>
        <link rel="icon" href="/icon/MobileLogo.svg" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
