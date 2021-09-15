import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
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
        <div className="hidden md:flex m-auto text-gray-100 flex-wrap ml-10">
          <div className="p-5 w-72">
            <div className="text-xs uppercase text-gray-400 font-medium">
              イベントの参加と開催
            </div>
            <Link href={EVENTS_SCREEN}>
              <a className="my-3 block">踊ろう会を検索する</a>
            </Link>
            <Link href={NEW_EVENT_SCREEN}>
              <a className="my-3 block">踊ろう会を開催する</a>
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

        {/* スマホ表示 */}
        <div className="md:hidden m-auto text-gray-100 flex flex-wrap ml-10">
          <Accordion allowMultipleExpanded allowZeroExpanded>
            <div className="pt-3 w-72 ">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="text-xs uppercase text-gray-400 font-medium hover:bg-gray-700">
                      イベントの参加と開催
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Link href={EVENTS_SCREEN}>
                    <a className="my-3 block text-sm">踊ろう会を検索する</a>
                  </Link>
                </AccordionItemPanel>
                <AccordionItemPanel>
                  <Link href={NEW_EVENT_SCREEN}>
                    <a className="my-3 block text-sm">踊ろう会を開催する</a>
                  </Link>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="pt-3 w-72 ">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="text-xs uppercase text-gray-400 font-medium hover:bg-gray-700">
                      ご利用のみなさまへ
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Link href={USER_EDIT_SCREEN}>
                    <a className="my-3 block text-sm">ユーザー情報を変更する</a>
                  </Link>
                </AccordionItemPanel>
                <AccordionItemPanel>
                  <Link href={QUIT_SCREEN}>
                    <a className="my-3 block text-sm">退会はこちら</a>
                  </Link>
                </AccordionItemPanel>
              </AccordionItem>
            </div>

            <div className="py-3 w-72 ">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="text-xs uppercase text-gray-400 font-medium hover:bg-gray-700">
                      Together Danceについて
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Link href={ABOUT_SCREEN}>
                    <a className="my-3 block text-sm">Together Danceとは</a>
                  </Link>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      </div>

      <div className="bg-gray-900 ">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-400 text-sm flex-col md:flex-row">
          <div className="mt-2">© Copyright 2021. Together Dance</div>
        </div>
      </div>
    </>
  );
};
