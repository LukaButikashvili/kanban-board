import React, { useState } from "react";
import TextareaCSS from "./Textarea.module.css";

const Textarea = ({ initialValue = "" }) => {
  const [textareaValue, setTextAreavalue] = useState(initialValue);
  return (
    <>
      <textarea
        className={TextareaCSS.modal_body}
        name="body"
        value={textareaValue}
        onChange={(e) => setTextAreavalue(e.target.value)}
        required
      />
    </>
  );
};

export default Textarea;
