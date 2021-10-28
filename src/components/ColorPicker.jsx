import React from "react";
import { SwatchesPicker } from "react-color";
import ColorPickerCSS from "./ColorPicker.module.css";

const ColorPicker = ({ changeColor }) => {
  return (
    <div className={ColorPickerCSS.color_picker_wrapper}>
      <SwatchesPicker
        className={ColorPickerCSS.color_picker}
        onChangeComplete={(color) => changeColor(color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
