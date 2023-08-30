import { type InputHTMLAttributes } from "react";

interface IInputWithLabel extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputWithLabel = (props: IInputWithLabel) => {
  const { label, placeholder, required = false, ...rest } = props;

  return (
    <div className="flex items-center gap-2">
      <label className="flex gap-1">
        {label} {required && <span className="text-danger-10">*</span>}
      </label>

      <input
        placeholder={placeholder}
        {...rest}
        className="outline-none border-gray-5 border h-[40px] place-items-center grid px-1"
      />
    </div>
  );
};

export default InputWithLabel;
