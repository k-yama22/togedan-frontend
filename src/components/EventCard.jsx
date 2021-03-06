import React from "react";
import { memo } from "react";
import CancelConfirmModal from "src/components/CancelConfirmModal";

// eslint-disable-next-line react/display-name
export const EventCard = memo((props) => {
  const {
    id,
    eventName,
    genre,
    location,
    image,
    eventDate,
    startTime,
    endTime,
    buttonMessage,
    subButtonMessage,
    onClick,
    onClickSub,
  } = props;
  return (
    <div className="flex flex-col">
      <div className="bg-white shadow-md rounded-3xl p-4">
        <div className="flex">
          <div className="h-28 w-28 md:h-full md:w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image?.url}
              alt="アイコン画像"
              className="w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
            />
            {/* <div className="md:hidden flex-col space-x-3">
              <CancelConfirmModal
                id={id}
                buttonMessage={subButtonMessage}
                eventName={eventName}
                onClick={() => onClickSub(id)}
              />
            </div> */}
          </div>
          <div className="text-xs flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                {genre}
              </div>
              <h2 className="flex-auto text-sm md:text-lg font-medium">
                {eventName}
              </h2>
            </div>
            <p className="mt-3"></p>
            <div className="flex py-0 md:py-4 text-xs md:text-sm text-gray-600">
              <div className="mr-3 md:flex-1 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 md:mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p className="">{location}</p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 md:mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>
                  <p className="">{eventDate}</p>
                  <p className="">
                    {startTime}〜{endTime}
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block flex p-4 pb-2 border-t border-gray-200 "></div>
            <div className="hidden md:block md:flex space-x-3 text-xs md:text-sm font-medium">
              <div className="flex-auto flex space-x-3">
                <CancelConfirmModal
                  id={id}
                  buttonMessage={subButtonMessage}
                  eventName={eventName}
                  onClick={() => onClickSub(id)}
                />
              </div>
              <button
                className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                type="button"
                aria-label="like"
                onClick={() => onClick(id)}
              >
                {buttonMessage}
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden flex p-4 pb-2 border-t border-gray-200 "></div>
        <div className="flex md:hidden md:flex space-x-3 text-xs md:text-sm font-medium">
          <div className=" md:block flex-auto flex space-x-3">
            <CancelConfirmModal
              id={id}
              buttonMessage={subButtonMessage}
              eventName={eventName}
              onClick={() => onClickSub(id)}
            />
          </div>
          <button
            className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
            type="button"
            aria-label="like"
            onClick={() => onClick(id)}
          >
            {buttonMessage}
          </button>
        </div>
      </div>
    </div>
  );
});
