import React from "react";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import CancelConfirmModal from "src/components/CancelConfirmModal";
import { useSelectMyEventDetail } from "src/hooks/useSelectMyEventDetail";
import { useRouter } from "next/router";
import { useDeleteEvent } from "src/hooks/useDeleteEvent";
import Link from "next/link";
import { EVENT_EDIT_SCREEN, MY_PAGE_SCREEN } from "src/utils/constants";
import { PrimaryButton } from "src/components/atoms/button/PrimaryButton";
// import Image from "next/image";

//サーバーサイドレンダリング
export async function getServerSideProps(context) {
  //クエリパラメータのID取得
  const id = context.query.id;

  return {
    props: {
      id: id,
    },
  };
}

const MyEventDetail = (props) => {
  const router = useRouter();
  const [eventDate, setEventDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const { onSelectMyEventDetail, selectedEvent } = useSelectMyEventDetail();
  const { deleteMyEvent } = useDeleteEvent();

  const onClickEventCancel = (id) => {
    deleteMyEvent(id);
  };

  const onClickEventEdit = (id) => {
    router.push({ pathname: EVENT_EDIT_SCREEN, query: { id: id } });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onSelectMyEventDetail(props.id), []);

  useEffect(() => {
    // 取得したイベント情報の日付、開始時刻、終了時刻をフォーマット
    const formatEventDate = dayjs(selectedEvent.event_date);
    const formatStartTime = dayjs(selectedEvent.start_time);
    const formatEndTime = dayjs(selectedEvent.end_time);
    setEventDate(formatEventDate.format("YYYY年MM月DD日"));
    setStartTime(formatStartTime.format("HH時mm分"));
    setEndTime(formatEndTime.format("HH時mm分"));
  }, [selectedEvent]);
  return (
    <div>
      <Head>
        <title>開催イベント詳細</title>
      </Head>

      <Layout>
        <div className="bg-gray-600">
          <div className="flex relative text-center">
            <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
              開催イベント詳細画面
            </h1>
          </div>
        </div>

        <div className="py-4 bg-gray-100">
          <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap md:-mx-2 ">
              <div className="w-full md:w-3/12 md:mx-2">
                <div className="flex md:flex-col bg-white p-3 border-t-4 border-green-400 h-full justify-center items-center md:justify-start">
                  <div className="w-4/12 md:w-auto image overflow-hidden mx-auto">
                    {/* {selectedEvent.image ? ( */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-auto w-full object-cover w-64 h-32 md:h-64 rounded-2xl"
                      src={selectedEvent.image?.url}
                      alt="アイコン画像"
                      width="256"
                      height="256"
                    />
                    {/* ) : null} */}
                  </div>
                  <div className="p-2 w-5/12  md:w-full">
                    <div className="md:hidden text-gray-600 text-sm">
                      開催者名
                    </div>
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                      {selectedEvent.last_name} {selectedEvent.first_name}
                    </h1>
                    <h3 className="hidden md:block text-gray-600 text-xs md:text-base text-semibold leading-6">
                      {selectedEvent.introduce}
                    </h3>
                  </div>
                  {/* <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>会員状態</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        有効会員
                      </span>
                    </span>
                  </li>
                </ul> */}
                  <Link href={MY_PAGE_SCREEN}>
                    <a className="flex mx-auto w-3/12 md:w-48 text-xs md:text-base items-center justify-center md:mt-6 text-white bg-teal-500 border-0 h-12 py-2 md:px-6 focus:outline-none hover:bg-teal-600 rounded">
                      マイページへ
                    </a>
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-9/12 md:mx-2 h-full">
                <div className="bg-white mt-2 md:mt-0 p-3 shadow-sm rounded-sm h-full">
                  <div className="container px-5 py-2 md:py-12 mx-auto">
                    <div className="mx-auto flex flex-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <div className="w-full sm:py-10 lg:pl-10 lg:py-16 mt-6 lg:mt-0 h-full">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                          イベント名称
                        </h2>
                        <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-1">
                          {selectedEvent.event_name}
                        </h1>
                        <div className="flex mb-4">
                          <span className="flex items-center justify-center pl-1 text-sm">
                            {selectedEvent.genre}
                          </span>
                          <span className="hidden md:block flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                            {eventDate} {startTime}〜{endTime}
                          </span>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
                          {selectedEvent.event_message}
                        </p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                          <div className="flex items-center ">
                            <span className="mr-3">最大人数</span>
                            <span className="font-semibold md:text-lg">
                              {selectedEvent.max_people}
                            </span>
                          </div>
                        </div>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                          開催日
                        </h2>
                        <div className="flex">
                          <div className="">
                            <div className="title-font font-medium text-lg md:text-2xl text-gray-900">
                              {eventDate}
                            </div>
                            <div className="title-font font-medium text-lg md:text-2xl text-gray-900 md:mt-2">
                              {startTime}〜{endTime}
                            </div>
                          </div>
                        </div>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest mt-4">
                          開催場所
                        </h2>
                        <div className="flex">
                          <div className="title-font font-medium text-lg md:text-2xl text-gray-900 mb-4">
                            {selectedEvent.location}
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <PrimaryButton
                            onClick={onClickEventEdit}
                            eventId={selectedEvent.event_id}
                          >
                            開催情報を編集をする
                          </PrimaryButton>
                          {/* <button
                            className="flex mr-auto h-14 md:h-14 text-xs md:text-sm text-white font-bold items-center justify-center bg-teal-500 border-0 py-3 px-4 focus:outline-none hover:bg-teal-600 rounded"
                            onClick={() =>
                              onClickEventEdit(selectedEvent.event_id)
                            }
                          >
                            開催情報を編集をする
                          </button> */}
                          <div className="flex items-center justify-center md:mt-4 ml-1 md:ml-auto focus:outline-none rounded">
                            <CancelConfirmModal
                              id={selectedEvent.event_id}
                              buttonMessage={"開催をキャンセルする"}
                              eventName={selectedEvent.event_name}
                              onClick={() =>
                                onClickEventCancel(selectedEvent.event_id)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MyEventDetail;
