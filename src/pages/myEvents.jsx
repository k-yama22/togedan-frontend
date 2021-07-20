import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useMyEvents } from "src/hooks/useMyEvents";
import { EventCard } from "src/components/EventCard";
import { useRouter } from "next/router";
import { useDeleteEvent } from "src/hooks/useDeleteEvent";

const MyEvents = () => {
  const router = useRouter();
  const { getMyEvents, myEvents } = useMyEvents();
  const { deleteMyEvent } = useDeleteEvent();

  const onClickEventCancel = (id) => {
    deleteMyEvent(id);
  };

  const onClickEventEdit = (id) => {
    router.push({ pathname: "/eventEdit", query: { id: id } });
  };

  useEffect(() => {
    getMyEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
          {myEvents.map((myEvent) => (
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
      </div>
      <Footer />
    </div>
  );
};

export default MyEvents;
