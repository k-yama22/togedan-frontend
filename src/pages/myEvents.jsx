import React, { useState } from "react";
import Head from "next/head";
import { useEffect } from "react";
import { Layout } from "src/components/Layout";
import { useMyEvents } from "src/hooks/useMyEvents";
import { useRouter } from "next/router";
import { useHistoryEvents } from "src/hooks/useHistoryEvents";
import { MiniEventCard } from "src/components/MiniEventCard";
import dayjs from "dayjs";
import { MY_EVENT_DETAIL_SCREEN } from "src/utils/constants";

const MyEvents = () => {
  const router = useRouter();
  const { getMyEvents, myEvents } = useMyEvents();
  const { getHistoryEvents, historyEvents } = useHistoryEvents();
  const [myEventArr, setMyEventArr] = useState([]);
  const [historyEventArr, setHistoryEventArr] = useState([]);
  const [changeFlg, setChangeFlg] = useState(false);

  const onClickMyEventDetail = (id) => {
    router.push({ pathname: MY_EVENT_DETAIL_SCREEN, query: { id: id } });
  };

  const onClickWillEvent = () => {
    setChangeFlg(false);
  };

  const onClickDidEvent = () => {
    setChangeFlg(true);
  };

  useEffect(() => {
    getMyEvents();
    getHistoryEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < myEvents.length; i++) {
      arr.push(myEvents[i]);
      const startTime = dayjs(myEvents[i].start_time);
      const endTime = dayjs(myEvents[i].end_time);
      arr[i].start_time = startTime.format("HH:mm");
      arr[i].end_time = endTime.format("HH:mm");
    }
    setMyEventArr(arr);
  }, [myEvents]);

  useEffect(() => {
    // 取得したイベント情報の配列を作成しフォーマット処理
    const arr = [];
    for (let i = 0; i < historyEvents.length; i++) {
      arr.push(historyEvents[i]);
      const startTime = dayjs(historyEvents[i].start_time);
      const endTime = dayjs(historyEvents[i].end_time);
      arr[i].start_time = startTime.format("HH:mm");
      arr[i].end_time = endTime.format("HH:mm");
    }
    setHistoryEventArr(arr);
  }, [historyEvents]);

  return (
    <div>
      <Head>
        <title>Together Dance</title>
      </Head>

      <Layout>
        <div className="bg-gray-600">
          <div className="flex relative text-center">
            <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
              開催イベント一覧
            </h1>
          </div>
        </div>
        <div className="p-4 bg-gray-100">
          <div className="container mx-auto my-5 p-5">
            <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
              <div className="mr-6">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
                  開催イベント一覧
                </h2>
              </div>
            </div>
            {!changeFlg ? (
              <>
                <div className="grid mt-8 gap-2 grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
                  <div
                    className="bg-teal-300 text-base md:text-2xl pt-5 md:pt-8 h-full w-full h-16 md:h-24 text-center"
                    role="button"
                    tabIndex={0}
                    onClick={onClickWillEvent}
                    onKeyDown={onClickWillEvent}
                  >
                    開催予定のイベント
                  </div>
                  <div
                    className="bg-gray-300 hover:bg-teal-100 hover:shadow-md text-base md:text-2xl pt-5 md:pt-8 w-full h-16 md:h-24 text-center"
                    role="button"
                    tabIndex={0}
                    onClick={onClickDidEvent}
                    onKeyDown={onClickDidEvent}
                  >
                    開催済みのイベント
                  </div>
                </div>
                <div className="grid mt-8 gap-4 md:gap-8 grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
                  {myEventArr.map((myEvent) => (
                    <MiniEventCard
                      key={myEvent.event_id}
                      id={myEvent.event_id}
                      eventName={myEvent.event_name}
                      genre={myEvent.genre}
                      location={myEvent.location}
                      image={myEvent.image}
                      eventDate={myEvent.event_date}
                      startTime={myEvent.start_time}
                      endTime={myEvent.end_time}
                      onClick={onClickMyEventDetail}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="grid mt-8 gap-2 grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
                  <div
                    className="bg-gray-300 hover:bg-teal-100 hover:shadow-md text-base md:text-2xl pt-5 md:pt-8 w-full h-16 md:h-24 text-center"
                    role="button"
                    tabIndex={0}
                    onClick={onClickWillEvent}
                    onKeyDown={onClickWillEvent}
                  >
                    開催予定のイベント
                  </div>
                  <div
                    className="bg-teal-300 text-base md:text-2xl pt-5 md:pt-8 w-full h-16 md:h-24 text-center"
                    role="button"
                    tabIndex={0}
                    onClick={onClickDidEvent}
                    onKeyDown={onClickDidEvent}
                  >
                    開催済みのイベント
                  </div>
                </div>
                <div className="grid mt-8 gap-4 md:gap-8 grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
                  {historyEventArr.map((historyEvent) => (
                    <MiniEventCard
                      key={historyEvent.event_id}
                      id={historyEvent.event_id}
                      eventName={historyEvent.event_name}
                      genre={historyEvent.genre}
                      location={historyEvent.location}
                      image={historyEvent.image}
                      eventDate={historyEvent.event_date}
                      startTime={historyEvent.start_time}
                      endTime={historyEvent.end_time}
                      onClick={onClickMyEventDetail}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MyEvents;
