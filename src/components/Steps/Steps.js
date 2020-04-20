/**
 * Steps
 */
import React from "react";

import StepBox from "./style";

export default function (props) {

  const {
    children,
    current,
    size = 'large',
    direction = 'row'
  } = props;

  const newChildren = React.Children.map(children, (item, index) => {
    const total = children.length;
    return React.cloneElement(item, {
      index,
      size,
      current,
      direction,
      total
    });
  });

  return (
    <StepBox className={direction}>
      {newChildren}
    </StepBox>
  );
};

