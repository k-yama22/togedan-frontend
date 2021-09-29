import React from "react";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";
import { useSelectEvent } from "src/hooks/useSelectEvent";
import { useNewReserve } from "src/hooks/useNewReserve";
import dayjs from "dayjs";
import router from "next/router";
import ConfirmModal from "src/components/ConfirmModal";
import { HOLD_USER_SCREEN } from "src/utils/constants";
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

const EventDetail = (props) => {
  const { newReserve } = useNewReserve();
  const [eventDate, setEventDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const { onSelectEvent, selectedEvent } = useSelectEvent();

  const onClickReserve = () => {
    newReserve(selectedEvent.event_id);
  };

  const onClickHoldUser = (id) => {
    router.push({ pathname: HOLD_USER_SCREEN, query: { id: id } });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onSelectEvent(props.id), []);

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
        <title>イベント詳細</title>
      </Head>

      <Header />
      <div className="bg-gray-600">
        <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
            イベント詳細画面
          </h1>
        </div>
      </div>

      <div className="py-4 bg-gray-100">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="flex md:flex-col bg-white p-3 border-t-4 border-green-400 md:h-full justify-center items-center md:justify-start">
                <div className="w-4/12 md:w-auto image overflow-hidden mx-auto">
                  {/* {selectedEvent.image ? ( */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-auto w-full object-cover w-64 h-32 lg:h-64 rounded-2xl"
                    src={selectedEvent.image?.url}
                    alt="アイコン画像"
                    width="256"
                    height="256"
                  />
                  {/* ) : null} */}
                </div>
                <div className="p-2 w-5/12 md:w-full">
                  <div className="md:hidden text-gray-600 text-sm">
                    開催者名
                  </div>
                  <h1 className="text-gray-900 text-center font-bold text-base md:text-xl leading-5 md:leading-8 my-1">
                    {selectedEvent.last_name} {selectedEvent.first_name}
                  </h1>
                  <h3 className="hidden md:block text-gray-600 text-xs md:text-base whitespace-pre-line text-semibold leading-6">
                    {selectedEvent.introduce}
                  </h3>
                </div>

                <button
                  className="flex w-3/12 md:w-full text-xs md:text-base mx-auto md:mt-3 text-white bg-teal-500 border-0 py-2 h-12 items-center justify-center md:px-6 focus:outline-none shadow hover:shadow-lg hover:bg-teal-600 rounded"
                  onClick={() => onClickHoldUser(selectedEvent.id)}
                >
                  開催者の詳細
                </button>
              </div>
            </div>

            <div className="w-full md:w-9/12 md:mx-2 h-full">
              <div className="bg-white mt-2 md:mt-0 p-3 shadow-sm rounded-sm h-full">
                <div className="container px-5 py-2 md:py-12 mx-auto">
                  <div className=" mx-auto flex flex-wrap">
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
                      <div className="">
                        <div className="title-font font-medium text-lg md:text-2xl text-gray-900">
                          {eventDate}
                        </div>
                        <div className="title-font font-medium text-lg md:text-2xl text-gray-900 md:mt-2">
                          {startTime}〜{endTime}
                        </div>
                      </div>
                      <h2 className="text-sm title-font text-gray-500 tracking-widest mt-4">
                        開催場所
                      </h2>
                      <div className="flex">
                        <div className="title-font font-medium text-lg md:text-2xl text-gray-900">
                          {selectedEvent.location}
                        </div>
                      </div>
                      <div className="flex items-center justify-center md:mt-4 ml-auto focus:outline-none rounded">
                        <ConfirmModal
                          id={selectedEvent.event_id}
                          buttonMessage={"予約申込をする"}
                          eventName={selectedEvent.event_name}
                          onClick={() => onClickReserve(selectedEvent.event_id)}
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

      <Footer />
    </div>
  );
};

export default EventDetail;
