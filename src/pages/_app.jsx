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
    if (
      router.pathname === "/login" ||
      router.pathname === "/" ||
      router.pathname === "/signUp" ||
      router.pathname === "/tempRegistration"
    )
      return;
    if (lscache.get("loginCheck")) {
      lscache.flushExpired();
      if (!lscache.get("loginId")) {
        lscache.flush();
        showNotify({ title: "タイムアウトしました", status: "error" });
        router.push("/login");
      }
    } else if (
      !(
        router.pathname === "/login" ||
        router.pathname === "/" ||
        router.pathname === "/signUp" ||
        router.pathname === "/events" ||
        router.pathname === "/eventDetail"
      )
    ) {
      showNotify({
        title: "ログインまたは新規登録をしてください",
        status: "success",
      });
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Component]);
  return (
    <>
      <div className="pt-20">
        <Component {...pageProps} />
        <Toaster />
      </div>
    </>
  );
};

export default MyApp;
