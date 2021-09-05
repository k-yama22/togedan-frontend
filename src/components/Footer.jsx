import Link from "next/link";
import React from "react";
import {
  ABOUT_SCREEN,
  EVENTS_SCREEN,
  NEW_EVENT_SCREEN,
  QUIT_SCREEN,
  USER_EDIT_SCREEN,
} from "src/hooks/constants";

export const Footer = () => {
  return (
    <>
      <div className="bg-gray-800">
        <div className=" m-auto text-gray-100 flex flex-wrap ml-10">
          <div className="p-5 w-72">
            <div className="text-xs uppercase text-gray-400 font-medium">
              イベントの参加と開催
            </div>
            <Link href={EVENTS_SCREEN}>
              <a className="my-3 block">
                踊ろう会を検索する
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </Link>
            <Link href={NEW_EVENT_SCREEN}>
              <a className="my-3 block">
                踊ろう会を開催する
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </Link>
          </div>
          <div className="p-5 w-72">
            <div className="text-xs uppercase text-gray-400 font-medium">
              ご利用のみなさまへ
            </div>
            {/* <Link href="/#">
              <a className="my-3 block">
                イベントに参加される方へ
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </Link>
            <Link href="/#">
              <a className="my-3 block">
                イベントを開催される方へ
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </Link> */}
            <Link href={USER_EDIT_SCREEN}>
              <a className="my-3 block">ユーザー情報を変更する</a>
            </Link>
            <Link href={QUIT_SCREEN}>
              <a className="my-3 block">退会はこちら</a>
            </Link>
          </div>
          <div className="p-5 w-72 ">
            <div className="text-xs uppercase text-gray-400 font-medium">
              Together Danceについて
            </div>
            <Link href={ABOUT_SCREEN}>
              <a className="my-3 block">Together Danceとは</a>
            </Link>
            {/* <Link href="/#">
              <a className="my-3 block">ご利用ガイド</a>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 ">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-400 text-sm flex-col
      md:flex-row "
        >
          <div className="mt-2">© Copyright 2021. Together Dance</div>
        </div>
      </div>
    </>
  );
};
