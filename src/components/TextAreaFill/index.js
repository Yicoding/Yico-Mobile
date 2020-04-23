/**
 *
 */
import React, { forwardRef, useCallback } from "react";

import { TextareaItem } from "antd-mobile";
import TextAreaBox from "./styles";

export default forwardRef(function TextAreaFill({ onChange, ...resPop }, ref) {
  // input改变
  const onChangeHandle = useCallback(val => {
    if (!val && ref) {
      ref.current.focus();
    }
    onChange && onChange(val); // eslint-disable-line
  }, []);

  return (
    <TextAreaBox>
      <TextareaItem ref={ref} onChange={onChangeHandle} {...resPop} />
    </TextAreaBox>
  );
});
