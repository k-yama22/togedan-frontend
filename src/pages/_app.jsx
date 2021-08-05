import React from "react";
import "tailwindcss/tailwind.css";
import "src/styles/global.css";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import lscache from "lscache";
import { useNotify } from "src/hooks/useNotify";
import router from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const { showNotify } = useNotify();
  useEffect(() => {
    console.log("初期レンダーしてる");
    if (router.pathname === "/login") return;
    lscache.flushExpired();
    if (!lscache.get("loginId")) {
      showNotify({ title: "タイムアウトしました", status: "error" });
      router.push("/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Component]);
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

export default MyApp;
