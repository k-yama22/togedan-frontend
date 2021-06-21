import Head from "next/head";
import Link from "next/link";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import Modal from "src/components/Modal";
import { useAllEvents } from "src/hooks/useAllEvents";
import { EventCard } from "src/components/EventCard";
import { useEffect } from "react";
import { useSelectUser } from "src/hooks/useSelectEvent";
import { EventModal } from "src/components/EventModal";

const Events = () => {
  const { getEvents, events } = useAllEvents();
  //   const { onSelectEvent, selectedEvent, showModal, setShowModal } =
  //     useSelectUser();

  //   const onClickEvent = (id) => {
  //     setShowModal(true);
  //     onSelectEvent({ id, events });
  //   };

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
              //   onClick={() => onClickEvent(event.id)}
            />
          </div>
        ))}
      </div>
      {/* <EventModal event={selectedEvent} showModal={showModal} /> */}
      <Footer />
    </div>
  );
};

export default Events;
