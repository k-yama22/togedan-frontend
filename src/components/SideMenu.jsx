import Link from "next/link";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";

export const SideMenu = (props) => {
  const { isOpen, loginId, onClick } = props;

  return (
    <>
      <Menu
        customBurgerIcon={false}
        isOpen={isOpen}
        className='bg-teal-200 text-center'
        width={250}
      >
        {loginId ? (
          <>
            <Link href='/myPage'>
              <a className='block mt-4 text-teal-lighter hover:text-gray-500 mr-4'>
                MyPage
              </a>
            </Link>
            <Link href='/about'>
              <a className='block mt-4 text-teal-lighter hover:text-gray-500 mr-4'>
                About
              </a>
            </Link>
            <Link href='/newEvent'>
              <a className='block mt-4 text-teal-lighter hover:text-gray-500 mr-4'>
                踊ろう会の開催はこちら
              </a>
            </Link>
            <button
              className='block mt-4 text-teal-lighter hover:text-gray-500 m-auto outline-none focus:outline-none'
              onClick={onClick}
            >
              ログアウト
            </button>
          </>
        ) : (
          <>
            <Link href='/login'>
              <a className='block mt-6 text-teal-lighter hover:text-gray-500 mr-4'>
                Login
              </a>
            </Link>
            <Link href='/signUp'>
              <a className='block mt-4 text-teal-lighter hover:text-gray-500'>
                新規登録
              </a>
            </Link>
          </>
        )}
      </Menu>
    </>
  );
};
