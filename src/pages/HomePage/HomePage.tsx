import { ChangeEvent, useState } from "react";
import { Input } from "~/components";
import InputWithLabel from "~/components/Input/InputWithLabel";

const HomePage = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Input
        placeholder="Input testtttttttttttttttttttttttttttt"
        onChange={handleChange}
        value={value}
        className="border outline-none my-3 mx-4"
      />

      <InputWithLabel label="Loại kết quả" required />
    </div>
  );
};

export default HomePage;
