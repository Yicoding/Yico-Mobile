/**
 *
 */
import React, { forwardRef } from "react";

import { List } from "antd-mobile";
import ItemTxtBox from "./styles";

const { Item } = List;

export default forwardRef(function TextAreaFill(props, ref) {
  const { arrow } = props;

  return (
    <ItemTxtBox className={arrow ? "" : "align-start"}>
      <Item ref={ref} {...props} />
    </ItemTxtBox>
  );
});
