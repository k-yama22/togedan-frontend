import Head from "next/head";
import { useState } from "react";
import { useNewEvent } from "src/hooks/useNewEvent";
import { Footer } from "src/components/Footer";
import { Loading } from "src/components/Loading";
import { Header } from "src/components/Header";

const NewEvent = () => {
  const [eventName, setEventName] = useState("");
  const [genre, setGenre] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [eventMessage, setEventMessage] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const { newEvent, loading } = useNewEvent();

  const onChangeEventName = (e) => {
    setEventName(e.target.value);
  };
  const onChangeGenre = (e) => {
    setGenre(e.target.value);
  };
  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  const onChangeEventDate = (e) => {
    setEventDate(e.target.value);
  };
  const onChangeStartTime = (e) => {
    setStartTime(e.target.value);
  };
  const onChangeEndTime = (e) => {
    setEndTime(e.target.value);
  };
  const onChangeEventMessage = (e) => {
    setEventMessage(e.target.value);
  };
  const onChangeMaxPeople = (e) => {
    setMaxPeople(e.target.value);
  };

  const onClickNewEvent = () => {
    newEvent(
      eventName,
      genre,
      location,
      eventDate,
      startTime,
      endTime,
      eventMessage,
      maxPeople
    );
  };

  return (
    <>
      <Head>
        <title>イベント新規登録画面</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='bg-gray-500 flex flex-col items-center justify-center min-h-screen py-2'>
        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <div className='container mx-auto h-full flex flex-1 justify-center items-center'>
            <div className='w-full max-w-md'>
              <h1 className='bg-green-100'>Together Dance</h1>
              <div className='leading-loose'>
                <div className='max-w-md m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl'>
                  <p className='text-white font-medium text-center text-lg font-bold'>
                    開催情報を入力してください
                  </p>
                  <div className=''>
                    <label className='block text-sm text-white'>
                      イベント名称
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='text'
                      placeholder='イベント名称'
                      required
                      value={eventName}
                      onChange={onChangeEventName}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      ジャンル
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='text'
                      placeholder='ジャンル'
                      required
                      value={genre}
                      onChange={onChangeGenre}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      開催場所
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='text'
                      placeholder='開催場所'
                      required
                      value={location}
                      onChange={onChangeLocation}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>開催日</label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='date'
                      placeholder='開催日'
                      required
                      value={eventDate}
                      onChange={onChangeEventDate}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      開始時刻
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='time'
                      placeholder='開催時刻'
                      required
                      value={startTime}
                      onChange={onChangeStartTime}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      終了時刻
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='time'
                      placeholder='終了時刻'
                      required
                      value={endTime}
                      onChange={onChangeEndTime}
                    />
                  </div>

                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      開催者メッセージ
                    </label>
                    <textarea
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      placeholder='開催者メッセージ'
                      value={eventMessage}
                      onChange={onChangeEventMessage}
                    ></textarea>
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      最大人数
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='number'
                      placeholder='最大人数'
                      required
                      value={maxPeople}
                      onChange={onChangeMaxPeople}
                    />
                  </div>
                  <div className='mt-4 items-center flex justify-between'>
                    <button
                      className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded'
                      onClick={onClickNewEvent}
                    >
                      {loading ? <Loading /> : <>登録</>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default NewEvent;
