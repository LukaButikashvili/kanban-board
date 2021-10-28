import React, { useState } from "react";
import styled from "@emotion/styled";

const DropDown = ({ name, data, initialValue = "" }) => {
  if (!initialValue) {
    initialValue = data[0].type;
  }

  const [selectValue, setSelectValue] = useState(initialValue);
  const [backgroundColor, setBackgroundColor] = useState(() => {
    const searchingItem = data.find((item) => item.type === initialValue);
    return searchingItem.backgroundColor;
  });

  const changeBgColor = (value) => {
    const searchingItem = data.find((item) => item.type === value);
    setBackgroundColor(searchingItem.backgroundColor);
    setSelectValue(value);
  };

  return (
    <SelectorWrapper background={backgroundColor}>
      <select
        value={selectValue}
        onChange={(e) => changeBgColor(e.target.value)}
        name={name}
        background={backgroundColor}
        required
      >
        {data.map((item) => {
          return (
            <option
              value={item.type}
              key={item.id}
              style={{ background: item.backgroundColor }}
            >
              {item.type}
            </option>
          );
        })}
      </select>
    </SelectorWrapper>
  );
};

const SelectorWrapper = styled.div`
  width: 9rem;
  height: 2rem;
  margin-bottom: 1em;
  background-color: ${(props) =>
    props.background ? props.background : "#fff"};

  & select {
    width: 100%;
    height: 100%;
    font-size: 1.25rem;
    background-color: inherit;
  }
`;

export default DropDown;
