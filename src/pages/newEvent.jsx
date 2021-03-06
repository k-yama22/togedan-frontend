import React from "react";
import Head from "next/head";
import { useNewEvent } from "src/hooks/useNewEvent";
import { Layout } from "src/components/Layout";
import { Loading } from "src/components/Loading";
import { useForm } from "react-hook-form";
import { DatePicker } from "src/components/DatePicker";
import { TimeOnlyPicker } from "src/components/TimeOnlyPicker";
import { RequiredInputForm } from "src/components/molecules/form/RequiredInputForm";
import { FormLayout } from "src/components/Layout/FormLayout";

const NewEvent = () => {
  const { newEvent, loading } = useNewEvent();
  const {
    register,
    handleSubmit,
    control,
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
      </Head>

      <Layout>
        <FormLayout>
          <p className="text-white font-medium text-center pb-2 text-base md:text-lg font-bold">
            開催情報を入力してください
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <RequiredInputForm
                type={"text"}
                id={"eventName"}
                placeholder={"イベント名称"}
                arial={"eventName"}
                register={{
                  ...register("eventName", {
                    required: true,
                    maxLength: 30,
                  }),
                }}
                htmlFor={"eventName"}
              >
                イベント名称
              </RequiredInputForm>
              {/* <label
                          className="block text-xs md:text-sm text-white"
                          htmlFor="eventName"
                        >
                          イベント名称
                          <span className="text-red-700">*</span>
                        </label>
                        <input
                          className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                          type="text"
                          id="eventName"
                          placeholder="イベント名称"
                          {...register("eventName", {
                            required: true,
                            maxLength: 30,
                          })}
                        /> */}
              {errors.eventName && errors.eventName.type === "required" && (
                <span className="text-red-700">必須項目です</span>
              )}
              {errors.eventName && errors.eventName.type === "maxLength" && (
                <span className="text-red-700">
                  30文字以下で入力してください
                </span>
              )}
            </div>
            <div className="mt-2">
              <RequiredInputForm
                type={"text"}
                id={"genre"}
                placeholder={"例：HIPHOP"}
                arial={"genre"}
                register={{
                  ...register("genre", {
                    required: true,
                    maxLength: 20,
                  }),
                }}
                htmlFor={"genre"}
              >
                ジャンル
              </RequiredInputForm>
              {/* <label
                          className="block text-xs md:text-sm text-white"
                          htmlFor="genre"
                        >
                          ジャンル<span className="text-red-700">*</span>
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
                        /> */}
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
              <RequiredInputForm
                type={"text"}
                id={"location"}
                placeholder={"例：渋谷"}
                arial={"location"}
                register={{
                  ...register("location", {
                    required: true,
                    maxLength: 20,
                  }),
                }}
                htmlFor={"location"}
              >
                開催場所
              </RequiredInputForm>
              {/* <label
                          className="block text-xs md:text-sm text-white"
                          htmlFor="location"
                        >
                          開催場所<span className="text-red-700">*</span>
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
                        /> */}
              {errors.location && errors.location.type === "required" && (
                <span className="text-red-700">必須項目です</span>
              )}
              {errors.location && errors.location.type === "maxLength" && (
                <span className="text-red-700">
                  20文字以下で入力してください
                </span>
              )}
            </div>
            <div className="mt-2 w-full">
              <label
                className="block text-xs md:text-sm text-white w-full"
                htmlFor="eventDate"
              >
                開催日<span className="text-red-700">*</span>
                {/* <input
                          className="text-base w-full block h-10 px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                          id="eventDate"
                          type="date"
                          min="1900-01-01"
                          max="2100-12-31"
                          placeholder="開催日"
                          {...register("eventDate", { required: true })}
                        /> */}
                {/* <div className="text-base w-full block h-10 px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"> */}
                <DatePicker
                  // label="datetime"
                  name="eventDate"
                  control={control}
                  placeholderText="開催日"
                  openToDate={new Date()}
                  {...register("eventDate", { required: true })}
                />
                {/* </div> */}
              </label>

              {errors.eventDate && errors.eventDate.type === "required" && (
                <span className="text-red-700">必須項目です</span>
              )}
            </div>
            <div className="grid md:grid-cols-3 w-full">
              <div className="md:mr-2 mt-2 w-full md:w-auto">
                <label
                  className="block text-xs md:text-sm text-white"
                  htmlFor="startTime"
                >
                  開始時刻<span className="text-red-700">*</span>
                  <TimeOnlyPicker
                    // label="datetime"
                    name="startTime"
                    control={control}
                    placeholderText="開始時刻"
                    {...register("startTime", { required: true })}
                  />
                </label>
                {/* <input
                          className="w-full h-10 px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                          id="startTime"
                          type="time"
                          placeholder="開始時刻"
                          {...register("startTime", { required: true })}
                        /> */}
                {errors.startTime && errors.startTime.type === "required" && (
                  <span className="text-red-700">必須項目です</span>
                )}
              </div>
              <div className="md:mr-2 mt-2 w-full md:w-auto">
                <label
                  className="block text-xs md:text-sm text-white"
                  htmlFor="endTime"
                >
                  終了時刻<span className="text-red-700">*</span>
                </label>
                <TimeOnlyPicker
                  // label="datetime"
                  name="endTime"
                  control={control}
                  placeholderText="終了時刻"
                  {...register("endTime", { required: true })}
                />
                {/* <input
                          className="w-full h-10 px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                          id="endTime"
                          type="time"
                          placeholder="終了時刻"
                          {...register("endTime", { required: true })}
                        /> */}
                {errors.endTime && errors.endTime.type === "required" && (
                  <span className="text-red-700">必須項目です</span>
                )}
              </div>
              <div className="mt-2">
                <RequiredInputForm
                  type={"text"}
                  id={"maxPeople"}
                  placeholder={"最大人数"}
                  arial={"maxPeople"}
                  register={{
                    ...register("maxPeople", {
                      required: true,
                      max: 99,
                    }),
                  }}
                  htmlFor={"maxPeople"}
                >
                  最大人数
                </RequiredInputForm>
                {/* <label
                            className="block text-xs md:text-sm text-white"
                            htmlFor="maxPeople"
                          >
                            最大人数<span className="text-red-700">*</span>
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
                          /> */}
                {errors.maxPeople && errors.maxPeople.type === "required" && (
                  <span className="text-red-700">必須項目です</span>
                )}
                {errors.maxPeople && errors.maxPeople.type === "max" && (
                  <span className="text-red-700">
                    99以下の数値で入力してください
                  </span>
                )}
              </div>
            </div>
            <div className="mt-2">
              <label
                className="block text-xs md:text-sm text-white"
                htmlFor="eventMessage"
              >
                開催者メッセージ
                <span className="text-red-700">*</span>
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
              <button className="w-48 px-4 py-1 flex items-center justify-center text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded mx-auto">
                {loading ? <Loading /> : <>登録</>}
              </button>
            </div>
          </form>
        </FormLayout>
      </Layout>
    </>
  );
};

export default NewEvent;
