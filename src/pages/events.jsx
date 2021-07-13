import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useAllEvents } from "src/hooks/useAllEvents";
import { EventCard } from "src/components/EventCard";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Link } from "next/link";
import { useSearchEvent } from "src/hooks/useSearchEvents";

const Events = () => {
  const router = useRouter();
  const { getEvents, events, setEvents } = useAllEvents();
  const [genre, setGenre] = useState();
  const [location, setLocation] = useState();
  const [eventDate, setEventDate] = useState();
  const { searchEvent, searchEvents } = useSearchEvent();

  const onChangeGenre = (e) => {
    setGenre(e.target.value);
  };

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  const onChangeEventDate = (e) => {
    setEventDate(e.target.value);
  };

  const onClickEvent = useCallback((id) => {
    router.push({ pathname: "/eventDetail", query: { id: id } });
  });

  const onClickSearch = () => {
    searchEvent(genre, location, eventDate);
  };
  const isFirstRender = useRef(false);

  useEffect(() => {
    getEvents();
    isFirstRender.current = true;
    console.log(events);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      // 初回レンダー判定
      isFirstRender.current = false;
    } else {
      setEvents(searchEvents);
    }
  }, [searchEvents]);

  return (
    <div>
      <Head>
        <title>イベント一覧</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <div className='bg-gray-600'>
        <div className='flex relative text-center'>
          <h1 className='text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl'>
            イベント一覧画面
          </h1>
        </div>
      </div>
      <div>
        <div class=' bg-gray-300'>
          <div>検索フォーム</div>
          <div class='w-screen container mx-auto flex justify-center items-center p-2 md:p-0'>
            <div class=' border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg mb-6'>
              <div class='grid grid-cols-1 md:grid-cols-1 gap-4'>
                <div class='grid grid-cols-4 gap-2 border border-gray-200 p-2 rounded'>
                  <div class='flex border rounded bg-gray-300 items-center p-2 '>
                    <input
                      type='text'
                      placeholder='ジャンル'
                      class='bg-gray-300 max-w-full focus:outline-none text-gray-700'
                      value={genre}
                      onChange={onChangeGenre}
                    />
                  </div>
                  <div class='flex border rounded bg-gray-300 items-center p-2 '>
                    <input
                      type='text'
                      placeholder='場所'
                      class='bg-gray-300 max-w-full focus:outline-none text-gray-700'
                      value={location}
                      onChange={onChangeLocation}
                    />
                  </div>

                  <div class='flex border rounded bg-gray-300 items-center p-2 '>
                    <input
                      type='date'
                      placeholder='年月日'
                      class='bg-gray-300 max-w-full focus:outline-none text-gray-700'
                      value={eventDate}
                      onChange={onChangeEventDate}
                    />
                  </div>
                  <div class='flex border rounded bg-gray-300 items-center p-2 '>
                    <input
                      type='text'
                      placeholder='Enter text here...'
                      class='bg-gray-300 max-w-full focus:outline-none text-gray-700'
                    />
                  </div>
                </div>
              </div>
              <div class='flex justify-center'>
                <button
                  onClick={onClickSearch}
                  class='p-2 border w-1/4 rounded-md bg-gray-800 text-white'
                >
                  検索
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>検索結果</div>
      <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
        {events.map((event) => (
          <div key={event.id}>
            <EventCard
              id={event.id}
              eventName={event.event_name}
              genre={event.genre}
              location={event.location}
              buttonMessage='予約申込はこちら'
              subButtonMessage='開催者の詳細を見る'
              onClick={() => onClickEvent(event.id)}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
