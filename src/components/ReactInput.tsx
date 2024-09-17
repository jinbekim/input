import { useState } from "react";

export const ReactInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <input
      name="ReactInput"
      id="ReactInput"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value + '!')}
    />
  );
}
