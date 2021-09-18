import React from "react";
import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useMyReserves } from "src/hooks/useMyReserves";
import { useMyEvents } from "src/hooks/useMyEvents";
import { MiniEventCard } from "src/components/MiniEventCard";
import { useMyUserInfo } from "src/hooks/useMyUserInfo";
import { useRouter } from "next/router";
import dayjs from "dayjs";

const MyPage = () => {
  const router = useRouter();
  const { getMyReserves, myReserves } = useMyReserves();
  const { getMyEvents, myEvents } = useMyEvents();
  const { getMyUserInfo, myUserInfo } = useMyUserInfo();
  const [myReserveArr, setMyReserveArr] = useState([]);
  const [myEventArr, setMyEventArr] = useState([]);

  const onClickUserEdit = () => {
    router.push({ pathname: "/userEdit" });
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
        const eventDate = dayjs(myReserves[i].event_date);
        const startTime = dayjs(myReserves[i].start_time);
        const endTime = dayjs(myReserves[i].end_time);
        arr[i].event_date = eventDate.format("YYYY年MM月DD日");
        arr[i].start_time = startTime.format("HH時mm分");
        arr[i].end_time = endTime.format("HH時mm分");
      }
    } else {
      for (let i = 0; i < myReserves.length; i++) {
        arr.push(myReserves[i]);
        const eventDate = dayjs(myReserves[i].event_date);
        const startTime = dayjs(myReserves[i].start_time);
        const endTime = dayjs(myReserves[i].end_time);
        arr[i].event_date = eventDate.format("YYYY年MM月DD日");
        arr[i].start_time = startTime.format("HH時mm分");
        arr[i].end_time = endTime.format("HH時mm分");
      }
    }
    setMyReserveArr(arr);
  }, [myReserves]);

  useEffect(() => {
    const arr = [];
    if (myEvents.length > 4) {
      for (let i = 0; i < 4; i++) {
        arr.push(myEvents[i]);
        const eventDate = dayjs(myEvents[i].event_date);
        const startTime = dayjs(myEvents[i].start_time);
        const endTime = dayjs(myEvents[i].end_time);
        arr[i].event_date = eventDate.format("YYYY年MM月DD日");
        arr[i].start_time = startTime.format("HH時mm分");
        arr[i].end_time = endTime.format("HH時mm分");
      }
    } else {
      for (let i = 0; i < myEvents.length; i++) {
        arr.push(myEvents[i]);
        const eventDate = dayjs(myEvents[i].event_date);
        const startTime = dayjs(myEvents[i].start_time);
        const endTime = dayjs(myEvents[i].end_time);
        arr[i].event_date = eventDate.format("YYYY年MM月DD日");
        arr[i].start_time = startTime.format("HH時mm分");
        arr[i].end_time = endTime.format("HH時mm分");
      }
    }
    setMyEventArr(arr);
  }, [myEvents]);

  return (
    <div>
      <Head>
        <title>Together Dance</title>
      </Head>

      <Header />

      <div className="bg-gray-600">
        <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
            マイページ
          </h1>
        </div>
      </div>

      <div className="py-4 bg-gray-100">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="flex md:flex-col bg-white p-3 border-t-4 border-green-400 h-full">
                <div className="image overflow-hidden mx-auto ">
                  {/* {myUserInfo.image ? ( */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-auto w-full object-cover w-64 h-32 md:h-64 rounded-2xl"
                    src={myUserInfo.image?.url}
                    alt="アイコン画像"
                    width="256"
                    height="256"
                    // layout={"responsive"}
                  />
                  {/* ) : null} */}
                </div>
                <div className="ml-3 w-full">
                  <Link href="/iconEdit">
                    <a className="block w-full text-blue-800 text-xs md:text-xs font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs md:p-3 my-4">
                      プロフィール画像を変更する
                    </a>
                  </Link>
                </div>
                {/* <h1 className="text-gray-900 font-bold text-md md:text-xl leading-8 my-1">
                  {myUserInfo.last_name} {myUserInfo.first_name}
                </h1> */}
                {/* <h3 className="text-gray-600 text-sm md:font-lg text-semibold leading-6">
                  自己紹介
                </h3> */}

                {/* <ul className="hidden md:block bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>会員状態</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        有効会員
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>ユーザーネーム</span>
                    <span className="ml-auto">{myUserInfo.user_name}</span>
                  </li>
                </ul> */}
              </div>
              <div className="my-4"></div>
            </div>
            {/* 右側部分 */}
            <div className="w-full md:w-9/12 md:mx-2 ">
              {/* ユーザー情報の項目 */}
              <div className="bg-white p-3 shadow-sm rounded-sm h-full">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span className="text-green-500">
                    <svg
                      className="h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 2 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide text-lg md:text-2xl m-2">
                    ユーザー情報
                  </span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-xs md:text-lg">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        苗字（カナ）
                      </div>
                      <div className="px-4 py-2">
                        {myUserInfo.last_name_kana}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        名前（カナ）
                      </div>
                      <div className="px-4 py-2">
                        {myUserInfo.first_name_kana}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">苗字</div>
                      <div className="px-4 py-2">{myUserInfo.last_name}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">名前</div>
                      <div className="px-4 py-2">{myUserInfo.first_name}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">性別</div>
                      <div className="px-4 py-2">女性</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">電話番号</div>
                      <div className="px-4 py-2">{myUserInfo.phone}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        ユーザーネーム
                      </div>
                      <div className="px-4 py-2">{myUserInfo.user_name}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">生年月日</div>
                      <div className="px-4 py-2">{myUserInfo.birthday}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        メールアドレス
                      </div>
                      <div className="px-4 py-2 text-xs md:text-lg break-words md:break-normal">
                        {myUserInfo.email}
                      </div>
                    </div>
                  </div>
                  <div className="mx-4 my-2">
                    <h3 className="text-gray-600 text-xs md:text-lg font-semibold leading-6 ">
                      自己紹介
                    </h3>
                    <p className="px-1 md:px-4 py-1 md:py-4 text-xs md:text-lg text-gray-700 hover:text-gray-600 leading-5 md:leading-7 whitespace-pre-line h-auto md:h-72 w-full overflow-auto ">
                      {myUserInfo.introduce}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClickUserEdit}
                  className="block w-full text-blue-800 text-xs md:text-base font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                >
                  ユーザ情報の変更はこちら
                </button>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="flex items-center justify-between w-full md:my-4 pl-4 sm:pr-4">
              <div className="mt-8">
                <h2 className="text-xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
                  予約情報一覧
                </h2>
              </div>
            </div>

            <div className="grid mt-2 md:mt-8 gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
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
                    onClick={() => onClickMyReserveDetail(myReserve?.event_id)}
                  />
                </div>
              ))}
            </div>
            <button
              className="text-blue-800 text-xs md:text-base font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 md:my-4"
              onClick={onClickMyReserves}
            >
              全ての予約イベントを見る →
            </button>
          </div>
          <div className="content">
            <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
              <div className="md:mt-8">
                <h2 className="text-xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
                  開催しているイベント一覧
                </h2>
              </div>
            </div>
            <div className="grid mt-2 md:mt-8 gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
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
              className="text-blue-800 text-xs md:text-base font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 md:my-4"
              onClick={onClickMyEvents}
            >
              全ての開催イベントを見る →
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
