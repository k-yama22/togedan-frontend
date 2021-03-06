import React from "react";
import { memo } from "react";

// eslint-disable-next-line react/display-name
export const MiniEventCard = memo((props) => {
  const {
    id,
    eventName,
    genre,
    location,
    image,
    eventDate,
    startTime,
    endTime,
    onClick,
  } = props;

  return (
    <div
      className="flex flex-col hover:opacity-75 focus:outline-none"
      role="button"
      tabIndex={0}
      onClick={() => onClick(id)}
      onKeyDown={() => onClick(id)}
    >
      <div className="bg-white shadow-md rounded-3xl pt-3 pl-3 md:p-4">
        <div className="flex">
          <div className="h-20 w-20 md:w-48 md:h-48 lg:h-48 lg:w-48 lg:mb-0 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image?.url}
              alt="アイコン画像"
              className="w-full h-full object-cover lg:h-48 rounded-2xl"
            />
          </div>
          <div className="text-xs flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-wrap">
              <h2 className="flex-auto md:text-2xl font-medium">{eventName}</h2>
              <div className="w-full flex-none md:text-sm text-blue-700 font-medium">
                {genre}
              </div>
            </div>
            <p className="mt-3"></p>
            <div className="flex py-0 md:py-4 md:text-base text-gray-600">
              <div className="mr-3 md:mr-0 md:flex-1 inline-flex items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
});
