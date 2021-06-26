import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useMyReserves } from "src/hooks/useMyReserves";
import { useMyEvents } from "src/hooks/useMyEvents";
import { EventCard } from "src/components/EventCard";
import { useMyUserInfo } from "src/hooks/useMyUserInfo";
import { UserCard } from "src/components/UserCard";
import { useRouter } from "next/router";

const MyPage = () => {
  const router = useRouter();
  const { getMyReserves, myReserves } = useMyReserves();
  const { getMyEvents, myEvents } = useMyEvents();
  const { getMyUserInfo, myUserInfo } = useMyUserInfo();
  console.log(myUserInfo);
  console.log(myUserInfo.firstName);

  const onClickUserEdit = (id) => {
    router.push({ pathname: "/userEdit", query: { id: id } });
  };

  useEffect(() => {
    getMyReserves();
    getMyEvents();
    getMyUserInfo();
    console.log(myUserInfo);
  }, []);
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

        <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
          <div>
            <UserCard
              userName={myUserInfo.userName}
              lastName={myUserInfo.lastName}
              firstName={myUserInfo.firstName}
              email={myUserInfo.email}
              buttonMessage='ユーザ詳細'
              onClick={() => onClickUserEdit(myUserInfo.id)}
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
          {myReserves.map((myReserve) => (
            <div key={myReserve.id}>
              <EventCard
                id={myReserve.id}
                eventName={myReserve.event_name}
                genre={myReserve.genre}
                location={myReserve.location}
                buttonMessage='予約した内容をみる'
                onClick={() => onClickEvent(myReserve.id)}
              />
            </div>
          ))}
        </div>
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
            <div key={myEvent.id}>
              <EventCard
                id={myEvent.id}
                eventName={myEvent.event_name}
                genre={myEvent.genre}
                location={myEvent.location}
                buttonMessage='開催情報を修正する'
                onClick={() => onClickEvent(myEvent.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
