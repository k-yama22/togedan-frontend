import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useEffect } from "react";
import { useSelectUser } from "src/hooks/useSelectEvent";
import { useRouter } from "next/router";
import { useNewReserve } from "src/hooks/useNewReserve";

const EventDetail = () => {
  const router = useRouter();
  const { newReserve } = useNewReserve();

  const { onSelectEvent, selectedEvent } = useSelectUser();

  const onClickReserve = () => {
    newReserve(selectedEvent.id);
  };

  useEffect(() => onSelectEvent(router.query.id), []);

  return (
    <div>
      <Head>
        <title>イベント詳細</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='flex flex-col'>
        <div className='bg-white shadow-md  rounded-3xl p-4'>
          <div className='flex-none lg:flex'>
            <div className=' h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3'>
              <img
                src='https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80'
                alt='Just a flower'
                className=' w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl'
              />
            </div>
            <div className='flex-auto ml-3 justify-evenly py-2'>
              <div className='flex flex-wrap '>
                <div className='w-full flex-none text-xs text-blue-700 font-medium '>
                  {selectedEvent.genre}
                </div>
                <h2 className='flex-auto text-lg font-medium'>
                  {selectedEvent.event_name}
                </h2>
              </div>
              <p className='mt-3'></p>
              <div className='flex py-4  text-sm text-gray-600'>
                <div className='flex-1 inline-flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 mr-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    ></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    ></path>
                  </svg>
                  <p className=''>{selectedEvent.location}</p>
                </div>
                <div className='flex-1 inline-flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 mr-2'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                  <p className=''>
                    {selectedEvent.event_date}の{selectedEvent.start_time}〜
                    {selectedEvent.end_time}
                  </p>
                </div>
              </div>
              <div className='flex p-4 pb-2 border-t border-gray-200 '>
                {selectedEvent.event_message}
              </div>
              <div className='flex space-x-3 text-sm font-medium'>
                <button
                  className='mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800'
                  type='button'
                  aria-label='like'
                  onClick={onClickReserve}
                >
                  予約申込はこちら
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetail;
