import "react-datepicker/dist/react-datepicker.css";

import React from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
// import { formatToTimeZone } from "date-fns-timezone";
import { Controller } from "react-hook-form";
import ja from "date-fns/locale/ja";

export const DatePicker = ({
  //   label,
  name,
  control,
  placeholderText,
  //   error,
  timeIntervals = 15,
}) => {
  registerLocale("ja", ja);
  return (
    <>
      {/* <label htmlFor={name}>{label}</label> */}
      <div>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <ReactDatePicker
              className="text-base w-full block h-10 px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              dateFormat="yyyy-MM-dd"
              placeholderText={placeholderText}
              //   showTimeSelect
              locale="ja"
              timeIntervals={timeIntervals}
              onChange={onChange}
              selected={value}
            />
          )}
        />
      </div>
      {/* <span>{error}</span> */}
    </>
  );
};
