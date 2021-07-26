import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useMyReserves } from "src/hooks/useMyReserves";
import { useMyEvents } from "src/hooks/useMyEvents";
import { MiniEventCard } from "src/components/MiniEventCard";
import { useMyUserInfo } from "src/hooks/useMyUserInfo";
import { UserCard } from "src/components/UserCard";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { useDeleteAccount } from "src/hooks/useDeleteAccount";

const MyPage = () => {
  const router = useRouter();
  const { getMyReserves, myReserves } = useMyReserves();
  const { getMyEvents, myEvents } = useMyEvents();
  const { getMyUserInfo, myUserInfo } = useMyUserInfo();
  const { deleteAccount } = useDeleteAccount();
  const [myReserveArr, setMyReserveArr] = useState([]);
  const [myEventArr, setMyEventArr] = useState([]);

  const onClickUserEdit = () => {
    router.push({ pathname: "/userEdit" });
  };

  const onClickDeleteAccount = () => {
    deleteAccount();
  };

  const onClickMyReserveDetail = (id) => {
    router.push({ pathname: "/myReserveDetail", query: { id: id } });
  };

  const onClickMyEventDetail = (id) => {
    router.push({
      pathname: "/myEventDetail",
      query: { id: id },
    });
  };

  const onClickMyEvents = () => {
    router.push({ pathname: "/myEvents" });
  };
  const onClickMyReserves = () => {
    router.push({ pathname: "/myReserves" });
  };

  useEffect(() => {
    getMyReserves();
    getMyEvents();
    getMyUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const arr = [];
    if (myReserves.length > 4) {
      for (let i = 0; i < 4; i++) {
        arr.push(myReserves[i]);
        const startTime = dayjs(myReserves[i].start_time);
        const endTime = dayjs(myReserves[i].end_time);
        arr[i].start_time = startTime.format("HH:mm");
        arr[i].end_time = endTime.format("HH:mm");
      }
    } else {
      for (let i = 0; i < myReserves.length; i++) {
        arr.push(myReserves[i]);
        const startTime = dayjs(myReserves[i].start_time);
        const endTime = dayjs(myReserves[i].end_time);
        arr[i].start_time = startTime.format("HH:mm");
        arr[i].end_time = endTime.format("HH:mm");
      }
    }
    setMyReserveArr(arr);
  }, [myReserves]);

  useEffect(() => {
    const arr = [];
    if (myEvents.length > 4) {
      for (let i = 0; i < 4; i++) {
        arr.push(myEvents[i]);
        const startTime = dayjs(myEvents[i].start_time);
        const endTime = dayjs(myEvents[i].end_time);
        arr[i].start_time = startTime.format("HH:mm");
        arr[i].end_time = endTime.format("HH:mm");
      }
    } else {
      for (let i = 0; i < myEvents.length; i++) {
        arr.push(myEvents[i]);
        const startTime = dayjs(myEvents[i].start_time);
        const endTime = dayjs(myEvents[i].end_time);
        arr[i].start_time = startTime.format("HH:mm");
        arr[i].end_time = endTime.format("HH:mm");
      }
    }
    setMyEventArr(arr);
  }, [myEvents]);

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
            マイページ
          </h1>
        </div>
      </div>
      <div className="content">
        <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
          <div className="mr-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
              ユーザ情報
            </h2>
            <div className="font-base tracking-tight text-gray-600">一覧</div>
          </div>
        </div>

        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
          <div>
            <UserCard
              userName={myUserInfo.userName}
              lastName={myUserInfo.lastName}
              firstName={myUserInfo.firstName}
              email={myUserInfo.email}
              image={myUserInfo.image}
              buttonMessage="ユーザ詳細"
              subButtonMessage="退会する"
              onClick={() => onClickUserEdit()}
              onClickSub={() => onClickDeleteAccount()}
            />
          </div>
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

        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {myReserveArr.map((myReserve) => (
            <div key={myReserve?.event_id}>
              <MiniEventCard
                id={myReserve?.event_id}
                eventName={myReserve?.event_name}
                genre={myReserve?.genre}
                location={myReserve?.location}
                image={myReserve?.image}
                eventDate={myReserve?.event_date}
                startTime={myReserve?.start_time}
                endTime={myReserve?.end_time}
                buttonMessage="予約した内容をみる"
                onClick={() => onClickMyReserveDetail(myReserve.event_id)}
              />
            </div>
          ))}
        </div>
        <button
          className="text-teal-600 hover:bg-teal-300 hover:text-gray-500 mt-4"
          onClick={onClickMyReserves}
        >
          予約したイベント一覧はこちら
        </button>
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
        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {myEventArr.map((myEvent) => (
            <div key={myEvent?.event_id}>
              <MiniEventCard
                id={myEvent?.event_id}
                eventName={myEvent?.event_name}
                genre={myEvent?.genre}
                location={myEvent?.location}
                image={myEvent?.image}
                eventDate={myEvent?.event_date}
                startTime={myEvent?.start_time}
                endTime={myEvent?.end_time}
                buttonMessage="開催情報の詳細を見る"
                onClick={() => onClickMyEventDetail(myEvent.event_id)}
              />
            </div>
          ))}
        </div>
        <button
          className="text-teal-600 hover:bg-teal-300 hover:text-gray-500 mt-4"
          onClick={onClickMyEvents}
        >
          開催イベント一覧はこちら
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
