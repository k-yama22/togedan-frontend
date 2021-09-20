import "react-datepicker/dist/react-datepicker.css";

import React from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import { Controller } from "react-hook-form";
import ja from "date-fns/locale/ja";

export const TimeOnlyPicker = ({
  name,
  control,
  placeholderText,
  timeIntervals = 15,
}) => {
  registerLocale("ja", ja);
  return (
    <>
      <div>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <ReactDatePicker
              className="text-base w-full block h-10 px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
              dateFormat="hh:mm"
              placeholderText={placeholderText}
              showTimeSelect
              showTimeSelectOnly
              timeCaption="Time"
              locale="ja"
              timeIntervals={timeIntervals}
              onChange={onChange}
              selected={value}
            />
          )}
        />
      </div>
    </>
  );
};
