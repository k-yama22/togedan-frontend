import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { Loading } from "src/components/Loading";

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
            <Link href="/myPage">
              <a className="block mt-4 text-teal-lighter hover:text-gray-500 mr-4">
                マイページ
              </a>
            </Link>
            <Link href="/events">
              <a className="block mt-4 text-teal-lighter hover:text-gray-500 mr-4">
                踊ろう会を探す
              </a>
            </Link>
            <Link href="/newEvent">
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
            <Link href="/login">
              <a className="block mt-6 text-teal-lighter hover:text-gray-500 mr-4">
                ログイン
              </a>
            </Link>
            <Link href="/signUp">
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
