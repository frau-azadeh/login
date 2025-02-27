import { Control, UseFormRegister } from "react-hook-form";

// مدل داده‌های فرم (تمام فیلدهایی که کاربر وارد می‌کند)
export interface FormValues {
  fullName: string;
  birthDate: Date | null;
  gender: "male" | "female";
}

// تایپ ورودی‌های متنی (نام و نام خانوادگی)
export interface TextInputProps {
  label: string;
  name: "fullName"; // فقط فیلد نام و نام خانوادگی را دریافت می‌کند
  register: UseFormRegister<FormValues>;
  error?: string;
  placeholder: string;
}

// تایپ فیلد تاریخ تولد
export interface DateInputProps {
  name: "birthDate"; // فقط برای تاریخ تولد استفاده می‌شود
  control: Control<FormValues>;
  error?: string;
}

// تایپ انتخاب جنسیت (زن/مرد)
export interface GenderSelectProps {
  register: UseFormRegister<FormValues>;
  error?: string;
}
