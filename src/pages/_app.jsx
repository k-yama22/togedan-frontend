import React from "react";
import "tailwindcss/tailwind.css";
import "src/styles/global.css";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import lscache from "lscache";
import { useNotify } from "src/hooks/useNotify";
import router from "next/router";
import Head from "next/head";
import {
  ABOUT_SCREEN,
  ERROR_STATUS,
  EVENTS_SCREEN,
  EVENT_DETAIL_SCREEN,
  INDEX_SCREEN,
  LOGIN_SCREEN,
  PASS_FORGET_SCREEN,
  PASS_RESET_SCREEN,
  SIGN_UP_SCREEN,
  SUCCESS_STATUS,
  TEMP_REGISTRATION_SCREEN,
} from "src/hooks/constants";

const MyApp = ({ Component, pageProps }) => {
  const { showNotify } = useNotify();

  useEffect(() => {
    // ログイン画面へのアクセスの場合、処理せずにreturn
    if (
      router.pathname === LOGIN_SCREEN
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
        showNotify({ title: "タイムアウトしました", status: SUCCESS_STATUS });
        router.push(LOGIN_SCREEN);
        return;
      }
    } else if (
      !(
        router.pathname === LOGIN_SCREEN ||
        router.pathname === INDEX_SCREEN ||
        router.pathname === SIGN_UP_SCREEN ||
        router.pathname === EVENTS_SCREEN ||
        router.pathname === EVENT_DETAIL_SCREEN ||
        router.pathname === TEMP_REGISTRATION_SCREEN ||
        router.pathname === PASS_FORGET_SCREEN ||
        router.pathname === PASS_RESET_SCREEN ||
        router.pathname === ABOUT_SCREEN
      )
    ) {
      showNotify({
        title: "ログインまたは新規登録をしてください",
        status: ERROR_STATUS,
      });
      router.push(LOGIN_SCREEN);
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
