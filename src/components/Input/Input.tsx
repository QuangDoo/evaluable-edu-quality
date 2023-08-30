import { type InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: IInput) => {
  const { ...rest } = props;

  return (
    <div>
      <input {...rest} />
    </div>
  );
};

export default Input;
