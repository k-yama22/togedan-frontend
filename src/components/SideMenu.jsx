import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { Loading } from "src/components/Loading";
import {
  EVENTS_SCREEN,
  LOGIN_SCREEN,
  MY_PAGE_SCREEN,
  NEW_EVENT_SCREEN,
  SIGN_UP_SCREEN,
} from "src/hooks/constants";

export const SideMenu = (props) => {
  const { isOpen, loginId, loading, onClick } = props;

  return (
    <>
      <Menu
        customBurgerIcon={false}
        isOpen={isOpen}
        className="bg-teal-200 text-center"
        width={250}
      >
        {loginId ? (
          <>
            <Link href={MY_PAGE_SCREEN}>
              <a className="block mt-4 text-teal-lighter hover:text-gray-500 mr-4">
                マイページ
              </a>
            </Link>
            <Link href={EVENTS_SCREEN}>
              <a className="block mt-4 text-teal-lighter hover:text-gray-500 mr-4">
                踊ろう会を探す
              </a>
            </Link>
            <Link href={NEW_EVENT_SCREEN}>
              <a className="block mt-4 text-teal-lighter hover:text-gray-500 mr-4">
                踊ろう会を開催する
              </a>
            </Link>
            <button
              className="block mt-4 text-teal-lighter hover:text-gray-500 m-auto outline-none focus:outline-none"
              onClick={onClick}
            >
              {loading ? <Loading /> : <>ログアウト</>}
            </button>
          </>
        ) : (
          <>
            <Link href={LOGIN_SCREEN}>
              <a className="block mt-6 text-teal-lighter hover:text-gray-500 mr-4">
                ログイン
              </a>
            </Link>
            <Link href={SIGN_UP_SCREEN}>
              <a className="block mt-4 text-teal-lighter hover:text-gray-500">
                新規登録
              </a>
            </Link>
          </>
        )}
      </Menu>
    </>
  );
};
