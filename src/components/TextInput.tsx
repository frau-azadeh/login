import { FC } from "react";
import { TextInputProps } from "../types/types";

const TextInput: FC<TextInputProps> = ({ label, name, register, error, placeholder }) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        {...register(name)}
        placeholder={placeholder}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextInput;
