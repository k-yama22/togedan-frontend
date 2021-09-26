import React from "react";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";
// import { useNewReserve } from "src/hooks/useNewReserve";
import dayjs from "dayjs";
import { useDeleteReserve } from "src/hooks/useDeleteReserve";
// import CancelConfirmModal from "src/components/CancelConfirmModal";
import { useSelectReservedEvent } from "src/hooks/useSelectReservedEvent";
import router from "next/router";
import DetailPage from "src/components/DetailPage";
import { HOLD_USER_SCREEN } from "src/hooks/constants";

//サーバーサイドレンダリング
export async function getServerSideProps(context) {
  //クエリパラメータのID取得
  const id = context.query.id;

  return {
    props: {
      id: id,
    },
  };
}

const MyReserveDetail = (props) => {
  const [eventDate, setEventDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const { onSelectReservedEvent, selectedEvent } = useSelectReservedEvent();
  const { deleteMyReserves } = useDeleteReserve();

  const onClickReserveCancel = (id) => {
    deleteMyReserves(id);
  };

  const onClickHoldUser = (id) => {
    router.push({ pathname: HOLD_USER_SCREEN, query: { id: id } });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onSelectReservedEvent(props.id), []);

  useEffect(() => {
    const formatEventDate = dayjs(selectedEvent.event_date);
    const formatStartTime = dayjs(selectedEvent.start_time);
    const formatEndTime = dayjs(selectedEvent.end_time);
    setEventDate(formatEventDate.format("YYYY年MM月DD日"));
    setStartTime(formatStartTime.format("HH時mm分"));
    setEndTime(formatEndTime.format("HH時mm分"));
  }, [selectedEvent]);

  return (
    <div>
      <Head>
        <title>予約詳細</title>
      </Head>

      <Header />

      <div className="bg-gray-600">
        <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
            予約詳細画面
          </h1>
        </div>
      </div>

      <DetailPage
        id={selectedEvent?.id}
        lastName={selectedEvent?.last_name}
        firstName={selectedEvent?.first_name}
        introduce={selectedEvent?.introduce}
        image={selectedEvent?.image}
        eventId={selectedEvent?.event_id}
        eventName={selectedEvent?.event_name}
        genre={selectedEvent?.genre}
        eventMessage={selectedEvent?.event_message}
        maxPeople={selectedEvent?.max_people}
        eventDate={eventDate}
        startTime={startTime}
        endTime={endTime}
        location={selectedEvent.location}
        buttonMessage="詳細を見る"
        confirmMessage="予約をキャンセルする"
        onClick={() => onClickHoldUser(selectedEvent?.id)}
        onClickConfirm={() => onClickReserveCancel(selectedEvent?.event_id)}
      />

      <Footer />
    </div>
  );
};

export default MyReserveDetail;
