import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormValues } from "../types/types";
import TextInput from "./TextInput";
import DateInput from "./DateInput";
import GenderSelect from "./GenderSelect";

interface SignupFormProps {
  onClose: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onClose }) => {
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
          <TextInput
            label="نام و نام خانوادگی"
            name="fullName"
            register={register}
            error={errors.fullName?.message}
            placeholder="نام و نام خانوادگی"
          />

          <DateInput
            name="birthDate"
            control={control}
            error={errors.birthDate?.message}
          />

          <GenderSelect
            register={register}
            error={errors.gender?.message}
          />

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
