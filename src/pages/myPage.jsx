import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useMyReserves } from "src/hooks/useMyReserves";
import { useMyEvents } from "src/hooks/useMyEvents";
import { EventCard } from "src/components/EventCard";
import { useMyUserInfo } from "src/hooks/useMyUserInfo";
import { UserCard } from "src/components/UserCard";
import { useRouter } from "next/router";
import { useDeleteReserve } from "src/hooks/useDeleteReserve";
import { useDeleteEvent } from "src/hooks/useDeleteEvent";

const MyPage = () => {
  const router = useRouter();
  const { getMyReserves, myReserves } = useMyReserves();
  const { getMyEvents, myEvents } = useMyEvents();
  const { getMyUserInfo, myUserInfo } = useMyUserInfo();
  const { deleteMyReserves, deleteReserve } = useDeleteReserve();
  const { deleteMyEvent, deleteEvent } = useDeleteEvent();

  const [myReserveArr, setMyReserveArr] = useState([]);

  const onClickUserEdit = () => {
    router.push({ pathname: "/userEdit" });
  };

  const onClickReserveCancel = (id) => {
    deleteMyReserves(id);
  };

  const onClickEvent = (id) => {
    router.push({ pathname: "/eventDetail", query: { id: id } });
  };

  const onClickEventCancel = (id) => {
    deleteMyEvent(id);
  };

  const onClickEventEdit = (id) => {
    router.push({ pathname: "/eventEdit", query: { id: id } });
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
  }, []);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(myReserves[i]);
      console.log(arr);
    }
    setMyReserveArr(arr);
  }, [myReserves]);

  return (
    <div>
      <Head>
        <title>Together Dance</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='bg-gray-600'>
        <div className='flex relative text-center'>
          <h1 className='text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl'>
            マイページ
          </h1>
        </div>
      </div>
      <div className='content'>
        <div className='flex items-center justify-between w-full my-4 pl-4 sm:pr-4'>
          <div className='mr-6'>
            <h2 className='text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate'>
              ユーザ情報
            </h2>
            <div className='font-base tracking-tight text-gray-600'>一覧</div>
          </div>
        </div>

        <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-1 xl:grid-cols-1'>
          <div>
            <UserCard
              userName={myUserInfo.userName}
              lastName={myUserInfo.lastName}
              firstName={myUserInfo.firstName}
              email={myUserInfo.email}
              image={myUserInfo.image}
              buttonMessage='ユーザ詳細'
              subButtonMessage='退会する'
              onClick={() => onClickUserEdit()}
            />
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='flex items-center justify-between w-full my-4 pl-4 sm:pr-4'>
          <div className='mr-6'>
            <h2 className='text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate'>
              予約情報一覧
            </h2>
            <div className='font-base tracking-tight text-gray-600'>一覧</div>
          </div>
        </div>

        <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
          {myReserveArr.map((myReserve) => (
            <div key={myReserve?.id}>
              <EventCard
                id={myReserve?.event_id}
                eventName={myReserve?.event_name}
                genre={myReserve?.genre}
                location={myReserve?.location}
                image={myReserve?.image}
                buttonMessage='予約した内容をみる'
                subButtonMessage='予約をキャンセルする'
                onClick={() => onClickEvent(myReserve.event_id)}
                onClickSub={onClickReserveCancel}
              />
            </div>
          ))}
        </div>
        <button
          className='text-teal-600 hover:bg-teal-300 hover:text-gray-500 mt-4'
          onClick={onClickMyReserves}
        >
          予約したイベント一覧はこちら
        </button>
      </div>
      <div className='content'>
        <div className='flex items-center justify-between w-full my-4 pl-4 sm:pr-4'>
          <div className='mr-6'>
            <h2 className='text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate'>
              開催しているイベント一覧
            </h2>
            <span>
              <Link href='/eventHistory'>
                <a className='text-teal-600 hover:bg-teal-300 hover:text-gray-500'>
                  過去の開催履歴はこちら
                </a>
              </Link>
            </span>
            <div className='font-base tracking-tight text-gray-600'>一覧</div>
          </div>
        </div>
        <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
          {myEvents.map((myEvent) => (
            <div key={myEvent.event_id}>
              <EventCard
                id={myEvent.event_id}
                eventName={myEvent.event_name}
                genre={myEvent.genre}
                location={myEvent.location}
                image={myEvent.image}
                buttonMessage='開催情報を修正する'
                subButtonMessage='開催を取り消す'
                onClick={() => onClickEventEdit(myEvent.event_id)}
                onClickSub={onClickEventCancel}
              />
            </div>
          ))}
        </div>
        <button
          className='text-teal-600 hover:bg-teal-300 hover:text-gray-500 mt-4'
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
