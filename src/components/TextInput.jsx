import React, { useState } from "react";

const TextInput = ({ initialValue }) => {
  const [inputValue, setInputValue] = useState(initialValue);

  return (
    <input
      name="title"
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default TextInput;
