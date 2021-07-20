import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EventCard } from "src/components/EventCard";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useAllEvents } from "src/hooks/useAllEvents";
import dayjs from "dayjs";
import { useRouter } from "next/router";

const Home = () => {
  const { getEvents, events } = useAllEvents();
  const [eventArr, setEventArr] = useState([]);
  const router = useRouter();

  const onClickEvent = (id) => {
    router.push({ pathname: "/eventDetail", query: { id: id } });
  };

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const arr = [];
    if (events.length > 4) {
      for (let i = 0; i < 4; i++) {
        arr.push(events[i]);
        const startTime = dayjs(events[i].start_time);
        const endTime = dayjs(events[i].end_time);
        arr[i].start_time = startTime.format("HH:mm");
        arr[i].end_time = endTime.format("HH:mm");
      }
    } else {
      for (let i = 0; i < events.length; i++) {
        arr.push(events[i]);
        const startTime = dayjs(events[i].start_time);
        const endTime = dayjs(events[i].end_time);
        arr[i].start_time = startTime.format("HH:mm");
        arr[i].end_time = endTime.format("HH:mm");
      }
    }
    setEventArr(arr);
  }, [events]);

  return (
    <div>
      <Head>
        <title>Together Dance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-black">
        <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-white text-sha uppercase font-bold p-4 self-center z-10 content-center absolute text-center w-full md:text-4xl">
            ようこそ！！Together Danceへ
          </h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full object-cover h-3/4 block mx-auto  sm:block sm:w-full"
            src="https://source.unsplash.com/FC4z3l4sUYc/1920x588"
            alt="Banner"
            width="1920"
            height="588"
          />
        </div>
      </div>
      <div className="content">
        <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
          <div className="mr-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
              ホーム画面
            </h2>
            <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
              {eventArr.map((event) => (
                <div key={event.event_id}>
                  <EventCard
                    id={event.event_id}
                    eventName={event.event_name}
                    genre={event.genre}
                    location={event.location}
                    image={event.image}
                    eventDate={event?.event_date}
                    startTime={event?.start_time}
                    endTime={event?.end_time}
                    buttonMessage="予約申込はこちら"
                    subButtonMessage="開催者の詳細を見る"
                    onClick={() => onClickEvent(event.event_id)}
                  />
                </div>
              ))}
            </div>
            <div className="text-teal-600 hover:bg-teal-300 hover:text-gray-500">
              <Link href="/events">
                <a>イベント一覧画面へ</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
