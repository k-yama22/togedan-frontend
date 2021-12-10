import React from "react";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { useAllEvents } from "src/hooks/useAllEvents";
import { MiniEventCard } from "src/components/MiniEventCard";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSearchEvent } from "src/hooks/useSearchEvents";
import dayjs from "dayjs";
import ReactPaginate from "react-paginate";
import MediaQuery from "react-responsive";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useForm } from "react-hook-form";
import { DatePicker } from "src/components/DatePicker";
import { TimeOnlyPicker } from "src/components/TimeOnlyPicker";
import { EVENT_DETAIL_SCREEN } from "src/utils/constants";
import { DefaultTitle } from "src/components/atoms/title/DefaultTitle";
import { SubTitle } from "src/components/atoms/title/SubTitle";

const Events = () => {
  const router = useRouter();
  const { getEvents, events, setEvents } = useAllEvents();

  const { searchEvent, searchEvents } = useSearchEvent();
  const [eventArr, setEventArr] = useState([]);

  const [offset, setOffset] = useState(0);
  const perPage = 8;

  const handlePageChange = (data) => {
    let page_number = data["selected"];
    setOffset(page_number * perPage);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const eventDate = data.eventDate
      ? dayjs(data.eventDate).format("YYYY-MM-DD")
      : null;
    const startTime = data.startTime
      ? dayjs(data.startTime).format("HH:mm:ss")
      : null;
    const endTime = data.endTime
      ? dayjs(data.endTime).format("HH:mm:ss")
      : null;

    searchEvent(data, eventDate, startTime, endTime);
  };

  const onClickEvent = (id) => {
    router.push({ pathname: EVENT_DETAIL_SCREEN, query: { id: id } });
  };

  const isFirstRender = useRef(false);

  useEffect(() => {
    getEvents();
    isFirstRender.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < events?.length; i++) {
      arr.push(events[i]);
      const eventDate = dayjs(events[i].event_date);
      const startTime = dayjs(events[i].start_time);
      const endTime = dayjs(events[i].end_time);

      arr[i].event_date = eventDate.format("YYYY年MM月DD日");
      arr[i].start_time = startTime.format("HH時mm分");
      arr[i].end_time = endTime.format("HH時mm分");
    }
    setEventArr(arr);
  }, [events]);

  useEffect(() => {
    if (isFirstRender.current) {
      // 初回レンダー判定
      isFirstRender.current = false;
    } else {
      setEvents(searchEvents);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchEvents]);

  return (
    <div>
      <Head>
        <title>イベント一覧</title>
      </Head>

      <Layout>
        <DefaultTitle>イベント一覧画面</DefaultTitle>
        {/* <div className="bg-gray-600">
          <div className="flex relative text-center">
            <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
              イベント一覧画面
            </h1>
          </div>
        </div> */}
        <div>
          <div className="bg-gray-300">
            <div className="text-center text-2xl p-4 font-semibold">
              検索フォーム
            </div>
            <MediaQuery query="(min-width: 768px)">
              <div className="w-screen container mx-auto block md:flex justify-center items-center p-2 md:p-0">
                <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg mb-6">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 border border-gray-200 p-2 rounded">
                        <div className="text-center">
                          <label className="text-xs" htmlFor="genre">
                            ジャンル
                          </label>
                          <div className="flex border rounded bg-gray-300 items-center p-2">
                            <input
                              className="bg-gray-300 h-10 max-w-full focus:outline-none text-gray-700"
                              id="genre"
                              type="text"
                              placeholder="例：HIPHOP"
                              {...register("genre", {
                                required: false,
                                maxLength: 20,
                              })}
                            />
                          </div>
                          {errors.genre &&
                            errors.genre.type === "maxLength" && (
                              <span className="text-red-700">
                                20文字以下で入力してください
                              </span>
                            )}
                        </div>
                        <div className="text-center">
                          <label className="text-xs" htmlFor="location">
                            開催場所
                          </label>
                          <div className="flex border rounded bg-gray-300 items-center p-2">
                            <input
                              className="bg-gray-300 h-10 max-w-full focus:outline-none text-gray-700"
                              id="location"
                              type="text"
                              placeholder="例：渋谷"
                              {...register("location", {
                                required: false,
                                maxLength: 20,
                              })}
                            />
                          </div>
                          {errors.location &&
                            errors.location.type === "maxLength" && (
                              <span className="text-red-700">
                                20文字以下で入力してください
                              </span>
                            )}
                        </div>
                        <div className="text-center">
                          <label htmlFor="eventDate" className="text-xs">
                            開催日
                          </label>
                          <div className="flex border rounded bg-gray-300 items-center p-2 text-xs">
                            <DatePicker
                              name="eventDate"
                              control={control}
                              placeholderText="開催日"
                              openToDate={new Date()}
                              {...register("eventDate", { required: false })}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <label htmlFor="startTime" className="text-xs">
                            開始時刻
                          </label>
                          <div className="flex border rounded bg-gray-300 items-center p-2">
                            <TimeOnlyPicker
                              name="startTime"
                              control={control}
                              placeholderText="開始時刻"
                              {...register("startTime", { required: false })}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <label htmlFor="endTime" className="text-xs">
                            終了時刻
                          </label>
                          <div className="flex border rounded w-full bg-gray-300 items-center p-2">
                            <TimeOnlyPicker
                              name="endTime"
                              control={control}
                              placeholderText="終了時刻"
                              {...register("endTime", { required: false })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button className="p-2 border w-1/4 rounded-md bg-gray-800 text-white">
                        検索
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </MediaQuery>
            {/* スマホ表示 */}
            <MediaQuery query="(max-width: 768px)">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:hidden w-screen container mx-auto block md:flex justify-center items-center p-2 md:p-0">
                  <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg mb-6">
                    <Accordion allowMultipleExpanded allowZeroExpanded>
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <div className="text-base text-center uppercase text-gray-800 font-medium hover:text-gray-400">
                              絞り込み
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 border border-gray-200 p-2 rounded">
                              <div className="text-center">
                                <label htmlFor="genre" className="text-xs">
                                  ジャンル
                                </label>
                                <div className="flex border rounded bg-gray-300 items-center p-2">
                                  <input
                                    className="bg-gray-300 h-10 max-w-full focus:outline-none text-gray-700"
                                    id="genre"
                                    type="text"
                                    placeholder="例：HIPHOP"
                                    {...register("genre", {
                                      required: false,
                                      maxLength: 20,
                                    })}
                                  />
                                </div>
                                {errors.genre &&
                                  errors.genre.type === "maxLength" && (
                                    <span className="text-red-700">
                                      20文字以下で入力してください
                                    </span>
                                  )}
                              </div>
                              <div className="text-center">
                                <label htmlFor="location" className="text-xs">
                                  場所
                                </label>
                                <div className="flex border rounded bg-gray-300 items-center p-2">
                                  <input
                                    className="bg-gray-300 h-10 max-w-full focus:outline-none text-gray-700"
                                    id="location"
                                    type="text"
                                    placeholder="例：渋谷"
                                    {...register("location", {
                                      required: false,
                                      maxLength: 20,
                                    })}
                                  />
                                </div>
                                {errors.location &&
                                  errors.location.type === "maxLength" && (
                                    <span className="text-red-700">
                                      20文字以下で入力してください
                                    </span>
                                  )}
                              </div>
                              <div className="text-center">
                                <label htmlFor="eventDate" className="text-xs">
                                  開催日
                                </label>
                                <div className="flex border rounded bg-gray-300 items-center p-2 text-xs">
                                  <DatePicker
                                    name="eventDate"
                                    control={control}
                                    placeholderText="開催日"
                                    openToDate={new Date()}
                                    {...register("eventDate", {
                                      required: false,
                                    })}
                                  />
                                </div>
                              </div>
                              <div className="text-center">
                                <label htmlFor="startTime" className="text-xs">
                                  開始時刻
                                </label>
                                <div className="flex border rounded bg-gray-300 items-center p-2">
                                  <TimeOnlyPicker
                                    name="startTime"
                                    control={control}
                                    placeholderText="開始時刻"
                                    {...register("startTime", {
                                      required: false,
                                    })}
                                  />
                                </div>
                              </div>
                              <div className="text-center">
                                <label htmlFor="endTime" className="text-xs">
                                  終了時刻
                                </label>
                                <div className="flex border rounded w-full bg-gray-300 items-center p-2">
                                  <TimeOnlyPicker
                                    name="endTime"
                                    control={control}
                                    placeholderText="終了時刻"
                                    {...register("endTime", {
                                      required: false,
                                    })}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center pt-4">
                            <button className="p-2 border w-1/4 rounded-md bg-gray-800 text-white">
                              検索
                            </button>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </form>
            </MediaQuery>
          </div>
        </div>
        <div className="pt-4 bg-gray-100">
          <div className="container mx-auto p-5">
            <SubTitle>イベント一覧</SubTitle>
            {/* <div className="text-center text-2xl font-semibold">
              イベント一覧
            </div> */}
            <div className="grid mt-8 gap-4 md:gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
              {eventArr.slice(offset, offset + perPage).map((event) => (
                <div key={event.event_id}>
                  <MiniEventCard
                    id={event.event_id}
                    eventName={event.event_name}
                    genre={event.genre}
                    location={event.location}
                    image={event.image}
                    eventDate={event.event_date}
                    startTime={event.start_time}
                    endTime={event.end_time}
                    buttonMessage="詳細を見る"
                    onClick={() => onClickEvent(event.event_id)}
                  />
                </div>
              ))}
            </div>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={Math.ceil(eventArr.length / perPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
              previousClassName={"pagination__previous"}
              nextClassName={"pagination__next"}
              disabledClassName={"pagination__disabled"}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Events;
