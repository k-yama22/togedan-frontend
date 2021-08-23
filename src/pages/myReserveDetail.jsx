import React from "react";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";
// import { useNewReserve } from "src/hooks/useNewReserve";
import dayjs from "dayjs";
import { useDeleteReserve } from "src/hooks/useDeleteReserve";
import CancelConfirmModal from "src/components/CancelConfirmModal";
import { useSelectReservedEvent } from "src/hooks/useSelectReservedEvent";
import router from "next/router";

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

const MyReserveDetail = (props) => {
  const [eventDate, setEventDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const { onSelectReservedEvent, selectedEvent } = useSelectReservedEvent();
  const { deleteMyReserves } = useDeleteReserve();

  const onClickReserveCancel = (id) => {
    deleteMyReserves(id);
  };

  const onClickHoldUser = (id) => {
    router.push({ pathname: "/holdUser", query: { id: id } });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onSelectReservedEvent(props.id), []);

  useEffect(() => {
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
        <title>予約詳細</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-gray-600">
        <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
            予約詳細画面
          </h1>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-white p-3 border-t-4 border-green-400 h-full">
                <div className="image overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-auto w-full mx-auto"
                    src={selectedEvent.image?.url}
                    alt="アイコン画像"
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  {selectedEvent.last_name} {selectedEvent.first_name}
                </h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">
                  {selectedEvent.introduce}
                </h3>

                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>会員状態</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        有効会員
                      </span>
                    </span>
                  </li>
                </ul>
                <button
                  className="flex mx-auto mt-3 text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded"
                  onClick={() => onClickHoldUser(selectedEvent.id)}
                >
                  詳細を見る
                </button>
              </div>
            </div>

            <div className="w-full md:w-9/12 mx-2 h-full">
              <div className="bg-white p-3 shadow-sm rounded-sm h-full">
                <div className="container px-5 py-12 mx-auto">
                  <div className=" mx-auto flex flex-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <div className="w-full sm:py-10 lg:pl-10 lg:py-16 mt-6 lg:mt-0 h-full">
                      <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        イベント名称
                      </h2>
                      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                        {selectedEvent.event_name}
                      </h1>
                      <div className="flex mb-4">
                        <span className="flex items-center justify-center">
                          {selectedEvent.genre}
                        </span>
                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                          {eventDate} {startTime}〜{endTime}
                        </span>
                      </div>
                      <p className="leading-relaxed whitespace-pre-line">
                        {selectedEvent.event_message}
                      </p>
                      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div className="flex items-center ">
                          <span className="mr-3">最大人数</span>
                          <span className="font-semibold text-lg mb-1">
                            {selectedEvent.max_people}
                          </span>
                        </div>
                      </div>
                      <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        開催日
                      </h2>
                      <div className="flex">
                        <div className="title-font font-medium text-2xl text-gray-900">
                          {eventDate} {startTime}〜{endTime}
                        </div>
                      </div>
                      <h2 className="text-sm title-font text-gray-500 tracking-widest mt-4">
                        開催場所
                      </h2>
                      <div className="flex">
                        <div className="title-font font-medium text-2xl text-gray-900">
                          {selectedEvent.location}
                        </div>
                        <div className="flex ml-auto focus:outline-none rounded">
                          <CancelConfirmModal
                            id={selectedEvent.event_id}
                            buttonMessage={"予約をキャンセルする"}
                            eventName={selectedEvent.event_name}
                            onClick={() =>
                              onClickReserveCancel(selectedEvent.event_id)
                            }
                          />
                        </div>
                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyReserveDetail;
