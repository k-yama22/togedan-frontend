import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MiniEventCard } from "src/components/MiniEventCard";
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
        const eventDate = dayjs(events[i].event_date);
        const startTime = dayjs(events[i].start_time);
        const endTime = dayjs(events[i].end_time);

        arr[i].event_date = eventDate.format("YYYY年MM月DD日");
        arr[i].start_time = startTime.format("HH時mm分");
        arr[i].end_time = endTime.format("HH時mm分");
      }
    } else {
      for (let i = 0; i < events.length; i++) {
        arr.push(events[i]);
        const eventDate = dayjs(events[i].event_date);
        const startTime = dayjs(events[i].start_time);
        const endTime = dayjs(events[i].end_time);

        arr[i].event_date = eventDate.format("YYYY年MM月DD日");
        arr[i].start_time = startTime.format("HH時mm分");
        arr[i].end_time = endTime.format("HH時mm分");
      }
    }
    setEventArr(arr);
  }, [events]);

  return (
    <div>
      <Head>
        <title>Together Dance</title>
      </Head>

      <Header />

      <div className="bg-black">
        <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-white text-sha uppercase font-bold p-4 self-center content-center absolute text-center w-full md:text-4xl">
            ようこそ！！Together Danceへ
          </h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full object-cover h-3/4 block mx-auto sm:block sm:w-full"
            src="https://source.unsplash.com/FC4z3l4sUYc/1920x588"
            alt="Banner"
            width="1920"
            height="588"
          />
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
            <div className="mr-6">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
                ホーム画面
              </h2>
            </div>
          </div>
          <div className="mt-8 pl-4 text-2xl font-semibold">
            おすすめイベント
          </div>
          <div className="grid mt-4 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            {eventArr.map((event) => (
              <div key={event.event_id}>
                <MiniEventCard
                  id={event.event_id}
                  eventName={event.event_name}
                  genre={event.genre}
                  location={event.location}
                  image={event.image}
                  eventDate={event?.event_date}
                  startTime={event?.start_time}
                  endTime={event?.end_time}
                  buttonMessage="詳細を見る"
                  onClick={() => onClickEvent(event.event_id)}
                />
              </div>
            ))}
          </div>
          <div className="w-48">
            <Link href="/events">
              <a className="block text-blue-800 text-md font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                イベント一覧画面へ →
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
