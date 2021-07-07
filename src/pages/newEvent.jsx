import Head from "next/head";
import { useState } from "react";
import { useNewEvent } from "src/hooks/useNewEvent";
import { Footer } from "src/components/Footer";
import { Loading } from "src/components/Loading";
import { Header } from "src/components/Header";
import { useForm } from "react-hook-form";

const NewEvent = () => {
  const { newEvent, loading } = useNewEvent();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    newEvent(data);
    console.log(data);
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=''>
                      <label className='block text-sm text-white'>
                        イベント名称
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='text'
                        placeholder='イベント名称'
                        {...register("eventName", { required: true })}
                      />
                      {errors.eventName &&
                        errors.eventName.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        ジャンル
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='text'
                        placeholder='ジャンル'
                        {...register("genre", { required: true })}
                      />
                      {errors.genre && errors.genre.type === "required" && (
                        <span className='text-red-700'>"必須項目です"</span>
                      )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        開催場所
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='text'
                        placeholder='開催場所'
                        {...register("location", { required: true })}
                      />
                      {errors.location &&
                        errors.location.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        開催日
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='date'
                        placeholder='開催日'
                        {...register("eventDate", { required: true })}
                      />
                      {errors.eventDate &&
                        errors.eventDate.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        開始時刻
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='time'
                        placeholder='開催時刻'
                        {...register("startTime", { required: true })}
                      />
                      {errors.startTime &&
                        errors.startTime.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        終了時刻
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='time'
                        placeholder='終了時刻'
                        {...register("endTime", { required: true })}
                      />
                      {errors.endTime && errors.endTime.type === "required" && (
                        <span className='text-red-700'>"必須項目です"</span>
                      )}
                    </div>

                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        開催者メッセージ
                      </label>
                      <textarea
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        placeholder='開催者メッセージ'
                        {...register("eventMessage", { required: true })}
                      ></textarea>
                      {errors.eventMessage &&
                        errors.eventMessage.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        最大人数
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='number'
                        placeholder='最大人数'
                        {...register("maxPeople", { required: true })}
                      />
                      {errors.maxPeople &&
                        errors.maxPeople.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-4 items-center flex justify-between'>
                      <button className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded'>
                        {loading ? <Loading /> : <>登録</>}
                      </button>
                    </div>
                  </form>
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
