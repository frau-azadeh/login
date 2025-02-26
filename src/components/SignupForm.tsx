"use client"
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface FormValues {
  fullName: string;
  birthDate: Date | null;
  gender: string;
}

const SignupForm = ({ onClose }: { onClose: () => void }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    console.log("📝 اطلاعات فرم:", data);
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-center mb-4">ثبت‌نام</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* نام و نام خانوادگی */}
          <div>
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              {...register("fullName", { required: "نام و نام خانوادگی الزامی است" })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          {/* تاریخ تولد */}
          <div>
            <Controller
              name="birthDate"
              control={control}
              rules={{ required: "تاریخ تولد الزامی است" }}
              render={({ field }) => (
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  value={field.value}
                  onChange={(date) => field.onChange(date)}
                  className="w-full p-2 border rounded-lg"
                />
              )}
            />
            {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate.message}</p>}
          </div>

          {/* جنسیت */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" value="male" {...register("gender", { required: "لطفاً جنسیت را انتخاب کنید" })} className="mr-1" />
              مرد
            </label>
            <label className="flex items-center">
              <input type="radio" value="female" {...register("gender", { required: "لطفاً جنسیت را انتخاب کنید" })} className="mr-1" />
              زن
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}

          {/* دکمه‌ها */}
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500">
              انصراف
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              {isSubmitting ? "در حال ذخیره..." : "ذخیره"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
