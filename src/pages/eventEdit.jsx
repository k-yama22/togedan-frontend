import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useSelectEvent } from "src/hooks/useSelectEvent";
import { useUpdateEvent } from "src/hooks/useUpdateEvent";
import { Loading } from "src/components/Loading";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";

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

const EventEdit = (props) => {
  const { onSelectEvent, selectedEvent } = useSelectEvent();
  const { updateEvent, loading } = useUpdateEvent();
  const [id, setId] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateEvent(id, data);
  };

  useEffect(() => {
    onSelectEvent(props.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const startTime = dayjs(selectedEvent.start_time);
    const endTime = dayjs(selectedEvent.end_time);
    setId(selectedEvent.event_id);
    setValue("eventName", selectedEvent.event_name);
    setValue("genre", selectedEvent.genre);
    setValue("location", selectedEvent.location);
    setValue("eventDate", selectedEvent.event_date);
    setValue("startTime", startTime.format("HH:mm"));
    setValue("endTime", endTime.format("HH:mm"));
    setValue("eventMessage", selectedEvent.event_message);
    setValue("maxPeople", selectedEvent.max_people);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEvent]);

  return (
    <>
      <Head>
        <title>イベント情報編集画面</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-gray-500 flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-2xl">
              <h1 className="bg-green-100">Together Dance</h1>
              <div className="leading-loose">
                <div className="max-w-2xl m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl mx-auto">
                  <p className="text-white font-medium text-center text-lg font-bold">
                    開催情報を入力してください
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                      <label
                        className="block text-sm text-white"
                        htmlFor="eventName"
                      >
                        イベント名称
                      </label>
                      <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="eventName"
                        type="text"
                        placeholder="イベント名称"
                        {...register("eventName", {
                          required: true,
                          maxLength: 30,
                        })}
                      />
                      {errors.eventName &&
                        errors.eventName.type === "required" && (
                          <span className="text-red-700">必須項目です</span>
                        )}
                      {errors.eventName &&
                        errors.eventName.type === "maxLength" && (
                          <span className="text-red-700">
                            30文字以下で入力してください
                          </span>
                        )}
                    </div>
                    <div className="mt-2">
                      <label
                        className="block  text-sm text-white"
                        htmlFor="genre"
                      >
                        ジャンル
                      </label>
                      <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="genre"
                        type="text"
                        placeholder="例：HIPHOP"
                        {...register("genre", {
                          required: true,
                          maxLength: 20,
                        })}
                      />
                      {errors.genre && errors.genre.type === "required" && (
                        <span className="text-red-700">必須項目です</span>
                      )}
                      {errors.genre && errors.genre.type === "maxLength" && (
                        <span className="text-red-700">
                          20文字以下で入力してください
                        </span>
                      )}
                    </div>
                    <div className="mt-2">
                      <label
                        className="block  text-sm text-white"
                        htmlFor="location"
                      >
                        開催場所
                      </label>
                      <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="location"
                        type="text"
                        placeholder="例：渋谷"
                        {...register("location", {
                          required: true,
                          maxLength: 20,
                        })}
                      />
                      {errors.location &&
                        errors.location.type === "required" && (
                          <span className="text-red-700">必須項目です</span>
                        )}
                      {errors.location &&
                        errors.location.type === "maxLength" && (
                          <span className="text-red-700">
                            20文字以下で入力してください
                          </span>
                        )}
                    </div>
                    <div className="mt-2">
                      <label
                        className="block  text-sm text-white"
                        htmlFor="eventDate"
                      >
                        開催日
                      </label>
                      <input
                        className="w-full h-10 px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="eventDate"
                        type="date"
                        min="1900-01-01"
                        max="2100-12-31"
                        placeholder="開催日"
                        {...register("eventDate", { required: true })}
                      />
                      {errors.eventDate &&
                        errors.eventDate.type === "required" && (
                          <span className="text-red-700">必須項目です</span>
                        )}
                    </div>
                    <div className="grid md:grid-cols-3">
                      <div className="mr-2 mt-2">
                        <label
                          className="block text-sm text-white"
                          htmlFor="startTime"
                        >
                          開始時刻
                        </label>
                        <input
                          className="w-full h-10 px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                          id="startTime"
                          type="time"
                          placeholder="開催時刻"
                          {...register("startTime", { required: true })}
                        />
                        {errors.startTime &&
                          errors.startTime.type === "required" && (
                            <span className="text-red-700">必須項目です</span>
                          )}
                      </div>
                      <div className="mr-2 mt-2">
                        <label
                          className="block  text-sm text-white"
                          htmlFor="endTime"
                        >
                          終了時刻
                        </label>
                        <input
                          className="w-full h-10 px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                          id="endTime"
                          type="time"
                          placeholder="終了時刻"
                          {...register("endTime", { required: true })}
                        />
                        {errors.endTime &&
                          errors.endTime.type === "required" && (
                            <span className="text-red-700">必須項目です</span>
                          )}
                      </div>

                      <div className="mt-2">
                        <label
                          className="block  text-sm text-white"
                          htmlFor="maxPeople"
                        >
                          最大人数
                        </label>
                        <input
                          className="w-full h-10 px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                          id="maxPeople"
                          type="number"
                          placeholder="最大人数"
                          {...register("maxPeople", {
                            required: true,
                            max: 99,
                          })}
                        />
                        {errors.maxPeople &&
                          errors.maxPeople.type === "required" && (
                            <span className="text-red-700">必須項目です</span>
                          )}
                        {errors.maxPeople &&
                          errors.maxPeople.type === "max" && (
                            <span className="text-red-700">
                              99以下の数値で入力してください
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="mt-2">
                      <label
                        className="block  text-sm text-white"
                        htmlFor="eventMessage"
                      >
                        開催者メッセージ
                      </label>
                      <textarea
                        className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="eventMessage"
                        rows="8"
                        wrap="hard"
                        placeholder="開催者メッセージ"
                        {...register("eventMessage", {
                          required: true,
                          maxLength: 255,
                        })}
                      ></textarea>
                      {errors.eventMessage &&
                        errors.eventMessage.type === "required" && (
                          <span className="text-red-700">必須項目です</span>
                        )}
                      {errors.eventMessage &&
                        errors.eventMessage.type === "maxLength" && (
                          <span className="text-red-700">
                            255文字以下で入力してください
                          </span>
                        )}
                    </div>
                    <div className="mt-4 items-center flex justify-between">
                      <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded">
                        {loading ? <Loading /> : <>変更</>}
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

export default EventEdit;
