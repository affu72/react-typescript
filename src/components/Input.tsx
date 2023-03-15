import React, { useState } from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  const [input, setInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  return (
    <div>
      <input onChange={handleInputChange} type="text" value={input} />
    </div>
  );
}
