import React from "react";
import "tailwindcss/tailwind.css";
import "src/styles/global.css";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import lscache from "lscache";
import { useNotify } from "src/hooks/useNotify";
import router from "next/router";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  const { showNotify } = useNotify();
  useEffect(() => {
    // ログイン画面へのアクセスの場合、処理せずにreturn
    if (
      router.pathname === "/login"
      //   router.pathname === "/" ||
      //   router.pathname === "/signUp" ||
      //   router.pathname === "/tempRegistration"
    )
      return;
    // ローカルストレージにログインチェックのデータが存在する場合
    if (lscache.get("loginCheck")) {
      // 期限切れのデータのみ削除処理
      lscache.flushExpired();
      // ログインIDのデータが取得できなかった場合、データを全て削除してタイムアウト処理
      if (!lscache.get("loginId")) {
        lscache.remove("loginCheck");
        lscache.flush();
        showNotify({ title: "タイムアウトしました", status: "error" });
        router.push("/login");
        return;
      }
    } else if (
      !(
        router.pathname === "/login" ||
        router.pathname === "/" ||
        router.pathname === "/signUp" ||
        router.pathname === "/events" ||
        router.pathname === "/eventDetail" ||
        router.pathname === "/tempRegistration" ||
        router.pathname === "/passForget" ||
        router.pathname === "/passReset" ||
        router.pathname === "/about"
      )
    ) {
      showNotify({
        title: "ログインまたは新規登録をしてください",
        status: "error",
      });
      router.push("/login");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Component]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-20">
        <Component {...pageProps} />
        <Toaster />
      </div>
    </>
  );
};

export default MyApp;
