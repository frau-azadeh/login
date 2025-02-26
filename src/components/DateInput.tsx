import { FC } from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateInputProps } from "../types/types";

const DateInput: FC<DateInputProps> = ({ name, control, error }) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-medium mb-1">تاریخ تولد</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            value={field.value || ""}
            onChange={(date) => field.onChange(date)}
            className="w-full p-2 border rounded-lg"
          />
        )}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default DateInput;
