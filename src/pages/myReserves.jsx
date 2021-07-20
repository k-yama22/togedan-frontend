import React from "react";
import Head from "next/head";
import { useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { EventCard } from "src/components/EventCard";
import { useRouter } from "next/router";
import { useDeleteReserve } from "src/hooks/useDeleteReserve";
import { useMyReserves } from "src/hooks/useMyReserves";

const MyReserves = () => {
  const router = useRouter();
  const { getMyReserves, myReserves } = useMyReserves();
  const { deleteMyReserves } = useDeleteReserve();

  const onClickEvent = (id) => {
    router.push({ pathname: "/eventDetail", query: { id: id } });
  };

  const onClickReserveCancel = (id) => {
    deleteMyReserves(id);
  };

  useEffect(() => {
    getMyReserves();
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
            予約イベント一覧
          </h1>
        </div>
      </div>
      <div className="content">
        <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
          <div className="mr-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
              予約情報一覧
            </h2>
            <div className="font-base tracking-tight text-gray-600">一覧</div>
          </div>
        </div>

        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
          {myReserves.map((myReserve) => (
            <div key={myReserve.id}>
              <EventCard
                id={myReserve.event_id}
                eventName={myReserve.event_name}
                genre={myReserve.genre}
                location={myReserve.location}
                image={myReserve.image}
                buttonMessage="予約した内容をみる"
                subButtonMessage="予約をキャンセルする"
                onClick={() => onClickEvent(myReserve.event_id)}
                onClickSub={onClickReserveCancel}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyReserves;
