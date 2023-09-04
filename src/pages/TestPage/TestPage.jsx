import React, { useState } from "react";

const TestPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        {count}
      </button>
    </div>
  );
};

export default TestPage;
