import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Loading } from "src/components/Loading";
import { SideMenu } from "src/components/SideMenu";
import { useSignOut } from "src/hooks/useSignOut";
import lscache from "lscache";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginId, setLoginId] = useState("");
  const loginImg = lscache.get("loginImg");

  console.log(loginImg);
  console.log(loginImg?.url);
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
        <Link href="/">
          <a className="flex items-center flex-no-shrink text-white mr-6">
            <svg
              className="h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
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

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden">
          <div className="text-sm lg:flex-grow">
            {loginId ? (
              <>
                <Link href="/myPage">
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    MyPage
                  </a>
                </Link>
                <Link href="/about">
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    About
                  </a>
                </Link>
                <Link href="/newEvent">
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    踊ろう会の開催はこちら
                  </a>
                </Link>
                <button
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white outline-none focus:outline-none"
                  onClick={onClickLogout}
                >
                  {loading ? <Loading /> : <>ログアウト</>}
                </button>
                <Link href="/myPage">
                  <a className="flex-shrink-0 h-14 w-14 absolute top-3 right-10">
                    {lscache.get("loginImg") ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        className="h-14 w-14 rounded-full border"
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
                <Link href="/login">
                  <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                    Login
                  </a>
                </Link>
                <Link href="/signUp">
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
