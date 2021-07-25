import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useMyEvents } from "src/hooks/useMyEvents";
import { EventCard } from "src/components/EventCard";
import { useRouter } from "next/router";
import { useDeleteEvent } from "src/hooks/useDeleteEvent";
import { useHistoryEvents } from "src/hooks/useHistoryEvents";
import { MiniEventCard } from "src/components/MiniEventCard";
import dayjs from "dayjs";

const MyEvents = () => {
  const router = useRouter();
  const { getMyEvents, myEvents } = useMyEvents();
  const { getHistoryEvents, historyEvents } = useHistoryEvents();
  const { deleteMyEvent } = useDeleteEvent();
  const [myEventArr, setMyEventArr] = useState([]);
  const [historyEventArr, setHistoryEventArr] = useState([]);
  const [changeFlg, setChangeFlg] = useState(false);

  const onClickEventCancel = (id) => {
    deleteMyEvent(id);
  };

  const onClickEventEdit = (id) => {
    router.push({ pathname: "/eventEdit", query: { id: id } });
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-gray-600">
        <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
            開催イベント一覧
          </h1>
        </div>
      </div>
      <div className="content">
        <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
          <div className="mr-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
              開催しているイベント一覧
            </h2>
            <span>
              <Link href="/eventHistory">
                <a className="text-teal-600 hover:bg-teal-300 hover:text-gray-500">
                  過去の開催履歴はこちら
                </a>
              </Link>
            </span>
            <div className="font-base tracking-tight text-gray-600">一覧</div>
          </div>
        </div>
        <div className="grid mt-8 gap-8 grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
          <div
            className="bg-gray-200 text-2xl pt-8 h-full w-full h-24 text-center"
            role="button"
            tabIndex={0}
            onClick={onClickWillEvent}
            onKeyDown={onClickWillEvent}
          >
            開催予定のイベント
          </div>
          <div
            className="bg-gray-200 text-2xl pt-8 h-full w-full h-24 text-center"
            role="button"
            tabIndex={0}
            onClick={onClickDidEvent}
            onKeyDown={onClickDidEvent}
          >
            過去に開催済みのイベント
          </div>
        </div>
        {!changeFlg ? (
          <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
            {myEventArr.map((myEvent) => (
              <EventCard
                key={myEvent.event_id}
                id={myEvent.event_id}
                eventName={myEvent.event_name}
                genre={myEvent.genre}
                location={myEvent.location}
                image={myEvent.image}
                eventDate={myEvent.event_date}
                startTime={myEvent.start_time}
                endTime={myEvent.end_time}
                buttonMessage="開催情報を修正する"
                subButtonMessage="開催を取り消す"
                onClick={onClickEventEdit}
                onClickSub={onClickEventCancel}
              />
            ))}
          </div>
        ) : (
          <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
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
                buttonMessage="開催情報を確認する"
                onClick={onClickEventEdit}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyEvents;
