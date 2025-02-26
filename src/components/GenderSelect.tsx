import { FC } from "react";
import { GenderSelectProps } from "../types/types";

const GenderSelect: FC<GenderSelectProps> = ({ register, error }) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-medium mb-1">جنسیت</label>
      <div className="flex items-center space-x-4">
        <label className="flex items-center">
          <input type="radio" value="male" {...register("gender")} className="mr-1" />
          مرد
        </label>
        <label className="flex items-center">
          <input type="radio" value="female" {...register("gender")} className="mr-1" />
          زن
        </label>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default GenderSelect;
