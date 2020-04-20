/**
 *
 */
import React, { forwardRef } from "react";

import { InputItem } from "antd-mobile";
import InputItemBox from './style';

export default forwardRef(function TextAreaFill(props, ref) {

  return (
    <InputItemBox>
      <InputItem
        ref={ref}
        {...props} />
    </InputItemBox>
  );
});
