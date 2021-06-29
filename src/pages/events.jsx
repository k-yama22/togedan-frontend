import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useAllEvents } from "src/hooks/useAllEvents";
import { EventCard } from "src/components/EventCard";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link } from "next/link";

const Events = () => {
  const router = useRouter();
  const { getEvents, events, setEvents } = useAllEvents();
  const [genre, setGenre] = useState();

  const onChangeGenre = (e) => {
    setGenre(e.target.value);
  };

  const onClickEvent = useCallback((id) => {
    router.push({ pathname: "/eventDetail", query: { id: id } });
  });

  const onClickSearch = () => {
    const targetevents = events.filter(
      (tarEvent) => tarEvent.genre.indexOf(genre) > -1
    );
    setEvents(targetevents);
  };

  useEffect(() => {
    getEvents();
  }, []);

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
          <div></div>
        </div>
      </div>
      <div>
        <input
          className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
          type='text'
          placeholder='ジャンル'
          aria-label='email'
          required
          value={genre}
          onChange={onChangeGenre}
        />
      </div>
      <button onClick={onClickSearch}>ボタン</button>

      <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
        {events.map((event) => (
          <div key={event.id}>
            <EventCard
              id={event.id}
              eventName={event.event_name}
              genre={event.genre}
              location={event.location}
              buttonMessage='予約申込はこちら'
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
