import React, { useState } from "react";
import KanbanModalHeaderCSS from "./KanbanModalHeader.module.css";

const KanbanModalHeader = ({ moduleName, initialValue = "" }) => {
  const [inputValue, setInputValue] = useState(initialValue);
  return (
    <div className={KanbanModalHeaderCSS.add_task_title_wrapper}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <h1>{moduleName}</h1>
    </div>
  );
};

export default KanbanModalHeader;
