import React from "react";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useAllEvents } from "src/hooks/useAllEvents";
import { MiniEventCard } from "src/components/MiniEventCard";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSearchEvent } from "src/hooks/useSearchEvents";
import dayjs from "dayjs";
import ReactPaginate from "react-paginate";

const Events = () => {
  const router = useRouter();
  const { getEvents, events, setEvents } = useAllEvents();
  const [genre, setGenre] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const { searchEvent, searchEvents } = useSearchEvent();
  const [eventArr, setEventArr] = useState([]);

  const [offset, setOffset] = useState(0);
  const perPage = 8;

  const handlePageChange = (data) => {
    let page_number = data["selected"];
    setOffset(page_number * perPage);
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

  const onClickEvent = (id) => {
    router.push({ pathname: "/eventDetail", query: { id: id } });
  };

  const onClickSearch = () => {
    searchEvent(genre, location, eventDate, startTime, endTime);
  };
  const isFirstRender = useRef(false);

  useEffect(() => {
    getEvents();
    isFirstRender.current = true;
    console.log(events);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < events.length; i++) {
      arr.push(events[i]);
      const startTime = dayjs(events[i].start_time);
      const endTime = dayjs(events[i].end_time);
      arr[i].start_time = startTime.format("HH:mm");
      arr[i].end_time = endTime.format("HH:mm");
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="bg-gray-600">
        <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
            イベント一覧画面
          </h1>
        </div>
      </div>
      <div>
        <div className="bg-gray-300">
          <div className="text-center text-2xl p-4 font-semibold">
            検索フォーム
          </div>
          <div className="w-screen container mx-auto flex justify-center items-center p-2 md:p-0">
            <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="grid grid-cols-5 gap-2 border border-gray-200 p-2 rounded">
                  <div className="text-center">
                    <label htmlFor="genre">ジャンル</label>
                    <div className="flex border rounded bg-gray-300 items-center p-2">
                      <input
                        id="genre"
                        type="text"
                        placeholder="例：HIPHOP"
                        className="bg-gray-300 h-10 max-w-full focus:outline-none text-gray-700"
                        value={genre}
                        onChange={onChangeGenre}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <label htmlFor="location">場所</label>
                    <div className="flex border rounded bg-gray-300 items-center p-2">
                      <input
                        id="location"
                        type="text"
                        placeholder="例：渋谷"
                        className="bg-gray-300 h-10 max-w-full focus:outline-none text-gray-700"
                        value={location}
                        onChange={onChangeLocation}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <label htmlFor="eventDate">開催日</label>
                    <div className="flex border rounded bg-gray-300 items-center p-2">
                      <input
                        id="eventDate"
                        type="date"
                        min="1900-01-01"
                        max="2100-12-31"
                        placeholder="年月日"
                        className="bg-gray-300 h-10 max-w-full focus:outline-none text-gray-700"
                        value={eventDate}
                        onChange={onChangeEventDate}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <label htmlFor="startTime">開始時刻</label>
                    <div className="flex border rounded bg-gray-300 items-center p-2">
                      <input
                        className="w-full px-5 py-1 h-10 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="startTime"
                        type="time"
                        placeholder="開始時刻"
                        value={startTime}
                        onChange={onChangeStartTime}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <label htmlFor="endTime">終了時刻</label>
                    <div className="flex border rounded bg-gray-300 items-center p-2">
                      <input
                        className="w-full px-5 py-1 h-10 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="endTime"
                        type="time"
                        placeholder="終了時刻"
                        value={endTime}
                        onChange={onChangeEndTime}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={onClickSearch}
                  className="p-2 border w-1/4 rounded-md bg-gray-800 text-white"
                >
                  検索
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        <div className="container mx-auto my-5 p-5">
          <div className="text-center text-2xl font-semibold">検索結果</div>
          <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
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
      <Footer />
    </div>
  );
};

export default Events;
