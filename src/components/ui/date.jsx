import React, { useRef, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller } from "react-hook-form";

const DateInput = (props) => {
  const {
    control,

    label,

    placeholder,
  } = props;

  return (
    <div className="col-span-2 xl:col-span-1 flex flex-col gap-2">
      <label className="text-[14px] md:text-[16px]">{label}</label>
      <div className="relative ">
        <Controller
          control={control}
          name={label}
          render={({ field: { onChange, onBlur, value, disabled } }) => (
            <DatePicker
              style={{
                width: "100%",
                height: "52px",
                borderRadius: "8px",
                fontSize: "14px",
                border: disabled ? "none" : "1px solid #ccc",
                backgroundColor: disabled ? "#F5F5F5" : "white",
                padding: "12px 16px 12px 16px",
              }}
              containerStyle={{ width: "100%" }}
              calendar={persian}
              locale={persian_fa}
              value={value}
              calendarPosition="top-right"
              placeholder={placeholder}
              onFocusedDateChange={(date) => {
                console.log(date,"date.unix")
                onChange(date.unix)
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default DateInput;
