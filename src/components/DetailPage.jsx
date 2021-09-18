// import Image from "next/image";
import React from "react";

import CancelConfirmModal from "src/components/CancelConfirmModal";

export const DetailPage = (props) => {
  const {
    id,
    lastName,
    firstName,
    introduce,
    image,
    eventId,
    eventName,
    genre,
    eventMessage,
    maxPeople,
    eventDate,
    startTime,
    endTime,
    location,
    buttonMessage,
    confirmMessage,
    onClick,
    onClickConfirm,
  } = props;

  return (
    <div>
      <div className="py-4 bg-gray-100">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="flex md:flex-col bg-white p-3 border-t-4 border-green-400 h-full justify-center items-center md:justify-start">
                <div className="w-4/12 md:w-auto md:mx-auto image overflow-hidden">
                  {/* {image ? ( */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-auto w-full object-cover w-64 h-32 md:h-64 rounded-2xl"
                    src={image?.url}
                    alt="アイコン画像"
                    width="256"
                    height="256"
                  />
                  {/* ) : null} */}
                </div>
                <div className="p-2 w-5/12  md:w-full">
                  <div className="md:hidden text-gray-600 text-sm">
                    開催者名
                  </div>
                  <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    {lastName} {firstName}
                  </h1>
                  <h3 className="hidden md:block text-gray-600 text-xs md:text-base text-semibold leading-6">
                    {introduce}
                  </h3>
                </div>
                {/* <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>会員状態</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        有効会員
                      </span>
                    </span>
                  </li>
                </ul> */}
                <button
                  className="flex mx-auto mt-3 text-white text-xs md:text-base bg-teal-500 border-0 py-2 px-3 md:px-6 focus:outline-none hover:bg-teal-600 rounded"
                  onClick={() => onClick(id)}
                >
                  {buttonMessage}
                </button>
              </div>
            </div>

            <div className="w-full md:w-9/12 md:mx-2 h-full">
              <div className="bg-white mt-2 md:mt-0 p-3 shadow-sm rounded-sm h-full">
                <div className="container px-5 py-2 md:py-12 mx-auto">
                  <div className="mx-auto flex flex-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <div className="w-full sm:py-10 lg:pl-10 lg:py-16 mt-6 lg:mt-0 h-full">
                      <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        イベント名称
                      </h2>
                      <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-1">
                        {eventName}
                      </h1>
                      <div className="flex mb-4">
                        <span className="flex items-center justify-center pl-1 text-sm">
                          {genre}
                        </span>
                        <span className="hidden md:block flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                          {eventDate} {startTime}〜{endTime}
                        </span>
                      </div>
                      <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {eventMessage}
                      </p>
                      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div className="flex items-center ">
                          <span className="mr-3">最大人数</span>
                          <span className="font-semibold md:text-lg">
                            {maxPeople}
                          </span>
                        </div>
                      </div>
                      <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        開催日
                      </h2>
                      <div className="flex">
                        <div className="">
                          <div className="title-font font-medium text-lg md:text-2xl text-gray-900">
                            {eventDate}
                          </div>
                          <div className="title-font font-medium text-lg md:text-2xl text-gray-900 md:mt-2">
                            {startTime}〜{endTime}
                          </div>
                        </div>
                      </div>
                      <h2 className="text-sm title-font text-gray-500 tracking-widest mt-4">
                        開催場所
                      </h2>
                      <div className="flex">
                        <div className="title-font font-medium text-lg md:text-2xl text-gray-900">
                          {location}
                        </div>
                      </div>
                      <div className="flex items-center justify-center md:mt-4 ml-auto focus:outline-none rounded">
                        <CancelConfirmModal
                          id={eventId}
                          buttonMessage={confirmMessage}
                          eventName={eventName}
                          onClick={() => onClickConfirm(eventId)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
