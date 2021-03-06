import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Layout } from "src/components/Layout";
import { useMyReserves } from "src/hooks/useMyReserves";
import { useMyEvents } from "src/hooks/useMyEvents";
import { MiniEventCard } from "src/components/MiniEventCard";
import { useMyUserInfo } from "src/hooks/useMyUserInfo";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import {
  ICON_EDIT_SCREEN,
  MY_EVENTS_SCREEN,
  MY_EVENT_DETAIL_SCREEN,
  MY_RESERVES_SCREEN,
  MY_RESERVE_DETAIL_SCREEN,
  USER_EDIT_SCREEN,
} from "src/utils/constants";
import { DefaultTitle } from "src/components/atoms/title/DefaultTitle";

const MyPage = () => {
  const router = useRouter();
  const { getMyReserves, myReserves } = useMyReserves();
  const { getMyEvents, myEvents } = useMyEvents();
  const { getMyUserInfo, myUserInfo } = useMyUserInfo();
  const [myReserveArr, setMyReserveArr] = useState([]);
  const [myEventArr, setMyEventArr] = useState([]);

  const onClickUserEdit = () => {
    router.push({ pathname: USER_EDIT_SCREEN });
  };

  const onClickMyReserveDetail = (id) => {
    router.push({ pathname: MY_RESERVE_DETAIL_SCREEN, query: { id: id } });
  };

  const onClickMyEventDetail = (id) => {
    router.push({
      pathname: MY_EVENT_DETAIL_SCREEN,
      query: { id: id },
    });
  };

  const onClickMyEvents = () => {
    router.push({ pathname: MY_EVENTS_SCREEN });
  };
  const onClickMyReserves = () => {
    router.push({ pathname: MY_RESERVES_SCREEN });
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
        arr[i].event_date = eventDate.format("YYYY???MM???DD???");
        arr[i].start_time = startTime.format("HH???mm???");
        arr[i].end_time = endTime.format("HH???mm???");
      }
    } else {
      for (let i = 0; i < myReserves.length; i++) {
        arr.push(myReserves[i]);
        const eventDate = dayjs(myReserves[i].event_date);
        const startTime = dayjs(myReserves[i].start_time);
        const endTime = dayjs(myReserves[i].end_time);
        arr[i].event_date = eventDate.format("YYYY???MM???DD???");
        arr[i].start_time = startTime.format("HH???mm???");
        arr[i].end_time = endTime.format("HH???mm???");
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
        arr[i].event_date = eventDate.format("YYYY???MM???DD???");
        arr[i].start_time = startTime.format("HH???mm???");
        arr[i].end_time = endTime.format("HH???mm???");
      }
    } else {
      for (let i = 0; i < myEvents.length; i++) {
        arr.push(myEvents[i]);
        const eventDate = dayjs(myEvents[i].event_date);
        const startTime = dayjs(myEvents[i].start_time);
        const endTime = dayjs(myEvents[i].end_time);
        arr[i].event_date = eventDate.format("YYYY???MM???DD???");
        arr[i].start_time = startTime.format("HH???mm???");
        arr[i].end_time = endTime.format("HH???mm???");
      }
    }
    setMyEventArr(arr);
  }, [myEvents]);

  return (
    <div>
      <Head>
        <title>Together Dance</title>
      </Head>

      <Layout>
        <DefaultTitle>???????????????</DefaultTitle>
        {/* <div className="bg-gray-600">
          <div className="flex relative text-center">
            <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
              ???????????????
            </h1>
          </div>
        </div> */}

        <div className="py-4 bg-gray-100">
          <div className="container mx-auto my-5 p-5">
            <div className="md:flex no-wrap md:-mx-2">
              <div className="w-full md:w-3/12 md:mx-2">
                <div className="flex md:flex-col bg-white p-3 border-t-4 border-green-400 h-full">
                  <div className="image overflow-hidden mx-auto ">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-auto w-full object-cover w-64 h-32 md:h-64 rounded-2xl"
                      src={myUserInfo.image?.url}
                      alt="??????????????????"
                      width="256"
                      height="256"
                    />
                  </div>
                  <div className="ml-3 w-full">
                    <Link href={ICON_EDIT_SCREEN}>
                      <a className="block w-full text-blue-800 text-xs md:text-xs font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs md:p-3 my-4">
                        ???????????????????????????????????????
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="my-4"></div>
              </div>
              {/* ???????????? */}
              <div className="w-full md:w-9/12 md:mx-2 ">
                {/* ??????????????????????????? */}
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
                      ??????????????????
                    </span>
                  </div>
                  <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-xs md:text-lg">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          ??????????????????
                        </div>
                        <div className="px-0 py-2">
                          {myUserInfo.last_name_kana}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          ??????????????????
                        </div>
                        <div className="px-0 py-2">
                          {myUserInfo.first_name_kana}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">??????</div>
                        <div className="px-0 py-2">{myUserInfo.last_name}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">??????</div>
                        <div className="px-0 py-2">{myUserInfo.first_name}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">????????????</div>
                        <div className="px-0 py-2">{myUserInfo.phone}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          ?????????????????????
                        </div>
                        <div className="px-0 py-2">{myUserInfo.user_name}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">????????????</div>
                        <div className="px-0 py-2">{myUserInfo.birthday}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          ?????????????????????
                        </div>
                        <div className="px-0 py-2 text-xs md:text-lg break-words ">
                          {myUserInfo.email}
                        </div>
                      </div>
                    </div>
                    <div className="mx-4 my-2">
                      <h3 className="text-gray-600 text-xs md:text-lg font-semibold leading-6 ">
                        ????????????
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
                    ????????????????????????????????????
                  </button>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="flex items-center justify-between w-full md:my-4 pl-4 sm:pr-4">
                <div className="mt-8">
                  <h2 className="text-xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
                    ??????????????????
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
                      buttonMessage="???????????????????????????"
                      onClick={() =>
                        onClickMyReserveDetail(myReserve?.event_id)
                      }
                    />
                  </div>
                ))}
              </div>
              <button
                className="text-blue-800 text-xs md:text-base font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 md:my-4"
                onClick={onClickMyReserves}
              >
                ???????????????????????????????????? ???
              </button>
            </div>
            <div className="content">
              <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
                <div className="md:mt-8">
                  <h2 className="text-xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
                    ????????????????????????????????????
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
                      buttonMessage="??????????????????????????????"
                      onClick={() => onClickMyEventDetail(myEvent.event_id)}
                    />
                  </div>
                ))}
              </div>
              <button
                className="text-blue-800 text-xs md:text-base font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 md:my-4"
                onClick={onClickMyEvents}
              >
                ???????????????????????????????????? ???
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MyPage;
