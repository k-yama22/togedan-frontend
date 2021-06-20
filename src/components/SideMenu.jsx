import Link from "next/link";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "src/components/Sidemenu.module.css";

export const SideMenu = (props) => {
  const { isOpen } = props;

  return (
    <>
      <Menu
        customBurgerIcon={false}
        isOpen={isOpen}
        className='bg-teal-200 text-center'
        width={250}
      >
        <Link href='/login'>
          <a className='block mt-6 text-teal-lighter hover:text-gray-500 mr-4'>
            Login
          </a>
        </Link>
        <Link href='/login'>
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
          <a className='block mt-4 text-teal-lighter hover:text-gray-500'>
            踊ろう会の開催はこちら
          </a>
        </Link>
      </Menu>
    </>
  );
};
