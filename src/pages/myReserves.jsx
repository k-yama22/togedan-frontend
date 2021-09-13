import React, { useState } from "react";
import Head from "next/head";
import { useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { EventCard } from "src/components/EventCard";
import { useRouter } from "next/router";
import { useDeleteReserve } from "src/hooks/useDeleteReserve";
import { useMyReserves } from "src/hooks/useMyReserves";
import { useHistoryReserves } from "src/hooks/useHistoryReserves";
import dayjs from "dayjs";
import { MiniEventCard } from "src/components/MiniEventCard";

const MyReserves = () => {
  const router = useRouter();
  const { getMyReserves, myReserves } = useMyReserves();
  const { deleteMyReserves } = useDeleteReserve();
  const { getHistoryReserves, historyReserves } = useHistoryReserves();
  const [myReserveArr, setMyReserveArr] = useState([]);
  const [historyReserveArr, setHistoryReserveArr] = useState([]);
  const [changeFlg, setChangeFlg] = useState(false);

  const onClickMyReserveDetail = (id) => {
    router.push({ pathname: "/myReserveDetail", query: { id: id } });
  };

  const onClickReserveCancel = (id) => {
    deleteMyReserves(id);
  };

  const onClickWillReserve = () => {
    setChangeFlg(false);
  };

  const onClickDidReserve = () => {
    setChangeFlg(true);
  };

  useEffect(() => {
    getMyReserves();
    getHistoryReserves();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < myReserves.length; i++) {
      arr.push(myReserves[i]);
      const startTime = dayjs(myReserves[i].start_time);
      const endTime = dayjs(myReserves[i].end_time);
      arr[i].start_time = startTime.format("HH:mm");
      arr[i].end_time = endTime.format("HH:mm");
    }
    setMyReserveArr(arr);
  }, [myReserves]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < historyReserves.length; i++) {
      arr.push(historyReserves[i]);
      const startTime = dayjs(historyReserves[i].start_time);
      const endTime = dayjs(historyReserves[i].end_time);
      arr[i].start_time = startTime.format("HH:mm");
      arr[i].end_time = endTime.format("HH:mm");
    }
    setHistoryReserveArr(arr);
  }, [historyReserves]);

  return (
    <div>
      <Head>
        <title>Together Dance</title>
      </Head>

      <Header />

      <div className="bg-gray-600">
        <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
            予約イベント一覧
          </h1>
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        <div className="container mx-auto my-5 p-5">
          <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
            <div className="mr-6">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
                予約情報一覧
              </h2>
            </div>
          </div>
          {!changeFlg ? (
            <>
              <div className="grid mt-8 gap-2 grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
                <div
                  className="bg-teal-300 text-2xl pt-8 h-full w-full h-24 text-center"
                  role="button"
                  tabIndex={0}
                  onClick={onClickWillReserve}
                  onKeyDown={onClickWillReserve}
                >
                  参加予定のイベント
                </div>
                <div
                  className="bg-gray-300 hover:bg-teal-100 hover:shadow-md text-2xl pt-8 h-full w-full h-24 text-center"
                  role="button"
                  tabIndex={0}
                  onClick={onClickDidReserve}
                  onKeyDown={onClickDidReserve}
                >
                  参加済みのイベント
                </div>
              </div>
              <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
                {myReserveArr.map((myReserve) => (
                  <div key={myReserve.event_id}>
                    <MiniEventCard
                      id={myReserve.event_id}
                      eventName={myReserve.event_name}
                      genre={myReserve.genre}
                      location={myReserve.location}
                      image={myReserve.image}
                      eventDate={myReserve.event_date}
                      startTime={myReserve.start_time}
                      endTime={myReserve.end_time}
                      buttonMessage="予約した内容をみる"
                      subButtonMessage="予約をキャンセルする"
                      onClick={() => onClickMyReserveDetail(myReserve.event_id)}
                      onClickSub={onClickReserveCancel}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="grid mt-8 gap-2 grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
                <div
                  className="bg-gray-300 hover:bg-teal-100 hover:shadow-md text-2xl pt-8 h-full w-full h-24 text-center"
                  role="button"
                  tabIndex={0}
                  onClick={onClickWillReserve}
                  onKeyDown={onClickWillReserve}
                >
                  参加予定のイベント
                </div>
                <div
                  className="bg-teal-300 text-2xl pt-8 h-full w-full h-24 text-center"
                  role="button"
                  tabIndex={0}
                  onClick={onClickDidReserve}
                  onKeyDown={onClickDidReserve}
                >
                  参加済みのイベント
                </div>
              </div>
              <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
                {historyReserveArr.map((historyReserve) => (
                  <div key={historyReserve.event_id}>
                    <EventCard
                      id={historyReserve.event_id}
                      eventName={historyReserve.event_name}
                      genre={historyReserve.genre}
                      location={historyReserve.location}
                      image={historyReserve.image}
                      eventDate={historyReserve.event_date}
                      startTime={historyReserve.start_time}
                      endTime={historyReserve.end_time}
                      buttonMessage="予約した内容をみる"
                      subButtonMessage="予約をキャンセルする"
                      onClick={() =>
                        onClickMyReserveDetail(historyReserve.event_id)
                      }
                      onClickSub={onClickReserveCancel}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyReserves;
