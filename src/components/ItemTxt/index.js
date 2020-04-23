/**
 *
 */
import React, { forwardRef } from "react";

import ItemBox from "./styles";

export default forwardRef(function TextAreaFill(props, ref) {
  const { children, extra } = props;

  return (
    <ItemBox ref={ref}>
      <span>{children}</span>
      <div>{extra}</div>
    </ItemBox>
  );
});
