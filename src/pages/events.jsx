import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useAllEvents } from "src/hooks/useAllEvents";
import { EventCard } from "src/components/EventCard";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const Events = () => {
  const router = useRouter();
  const { getEvents, events } = useAllEvents();
  // const { onSelectEvent, selectedEvent } = useSelectUser();

  const onClickEvent = useCallback((id) => {
    router.push({ pathname: "/eventDetail", query: { id: id } });
  });

  useEffect(() => getEvents(), []);

  return (
    <div>
      <Head>
        <title>イベント一覧</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
        {events.map((event) => (
          <div key={event.id}>
            <EventCard
              id={event.id}
              eventName={event.event_name}
              genre={event.genre}
              location={event.location}
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
