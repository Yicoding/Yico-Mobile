/**
 *
 */
import React, { forwardRef } from "react";

import { InputItem } from "antd-mobile";
import InputItemBox from "./styles";

export default forwardRef(function TextAreaFill(props, ref) {
  return (
    <InputItemBox>
      <InputItem ref={ref} {...props} />
    </InputItemBox>
  );
});
