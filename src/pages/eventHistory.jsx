import Head from "next/head";
import { useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { EventCard } from "src/components/EventCard";
import { useHistoryEvents } from "src/hooks/useHistoryEvents";

const EventHistory = () => {
  const { getHistoryEvents, historyEvents } = useHistoryEvents();

  const onClickEvent = () => {
    console.log("click");
  };

  useEffect(() => {
    getHistoryEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Head>
        <title>Together Dance</title>
      </Head>

      <Header />

      <div className="bg-gray-600">
        <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
            過去履歴ページ
          </h1>
        </div>
      </div>
      <div className="content">
        <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
          <div className="mr-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
              開催済みのイベント一覧
            </h2>
            <div className="font-base tracking-tight text-gray-600">一覧</div>
          </div>
        </div>

        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {historyEvents.map((historyEvent) => (
            <div key={historyEvent.id}>
              <EventCard
                id={historyEvent.id}
                eventName={historyEvent.event_name}
                genre={historyEvent.genre}
                location={historyEvent.location}
                image={historyEvent.image}
                eventDate={historyEvent.event_date}
                startTime={historyEvent.start_time}
                endTime={historyEvent.end_time}
                buttonMessage="詳細を見る"
                onClick={() => onClickEvent(historyEvent.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventHistory;
