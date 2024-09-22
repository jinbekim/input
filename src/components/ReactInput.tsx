import { useState, type ChangeEvent, type EventHandler } from "react";

export const ReactInput = () => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange: EventHandler<ChangeEvent<HTMLInputElement>> = (e) => {
    const value = e.target.value + '!';
    setInputValue(value);
  }
  return (
    <div style={{display: 'inline'}}>

    <input
      value={inputValue}
      onChange={onInputChange}
      />
      <span> value: {inputValue} </span>
      </div>
  );
}
