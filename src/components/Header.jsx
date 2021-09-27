import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Loading } from "src/components/Loading";
import { SideMenu } from "src/components/SideMenu";
import { useSignOut } from "src/hooks/useSignOut";
import lscache from "lscache";
import {
  EVENTS_SCREEN,
  INDEX_SCREEN,
  LOGIN_SCREEN,
  MY_PAGE_SCREEN,
  NEW_EVENT_SCREEN,
  SIGN_UP_SCREEN,
} from "src/hooks/constants";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginId, setLoginId] = useState("");
  const loginImg = lscache.get("loginImg");

  // console.log(loginImg);
  // console.log(loginImg?.url);
  const { signOut, loading } = useSignOut();

  useEffect(() => {
    setLoginId(lscache.get("loginId"));
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onClickLogout = () => {
    signOut();
  };

  return (
    <div className="fixed top-0 right-0 w-full h-24px z-20">
      <SideMenu
        isOpen={isOpen}
        loginId={loginId}
        loading={loading}
        onClick={onClickLogout}
      />
      <nav className="flex absolute items-center justify-between flex-wrap bg-teal-300 p-6 w-full pt-18">
        <Link href={INDEX_SCREEN}>
          <a className="flex items-center flex-no-shrink text-white mr-6 hover:bg-teal-200 rounded-lg">
            <span className="font-semibold text-xl tracking-tight">
              Together Dance
            </span>
          </a>
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleMenu()}
            className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
          <div className="text-sm lg:flex-grow">
            {loginId ? (
              <>
                <Link href={MY_PAGE_SCREEN}>
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    マイページ
                  </a>
                </Link>
                <Link href={EVENTS_SCREEN}>
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    踊ろう会を探す
                  </a>
                </Link>
                <Link href={NEW_EVENT_SCREEN}>
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    踊ろう会を開催する
                  </a>
                </Link>
                <button
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white outline-none focus:outline-none"
                  onClick={onClickLogout}
                >
                  {loading ? <Loading /> : <>ログアウト</>}
                </button>
                <Link href={MY_PAGE_SCREEN}>
                  <a className="flex-shrink-0 h-14 w-14 absolute top-3 right-10 invisible md:visible">
                    {lscache.get("loginImg") ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        className="h-14 w-14 rounded-full border hover:opacity-80"
                        src={loginImg?.url}
                        alt="アイコン画像"
                      />
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        className="h-16 w-16 rounded-full border"
                        src="default.png"
                        alt="アイコン画像"
                      />
                    )}
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href={LOGIN_SCREEN}>
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    ログイン
                  </a>
                </Link>
                <Link href={SIGN_UP_SCREEN}>
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    新規登録
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
