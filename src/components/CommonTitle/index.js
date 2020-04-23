/**
 * Steps
 */
import React from "react";

import TitleBox from "./styles";

export default function(props) {
  const { children } = props;

  return (
    <TitleBox>
      <i />
      <p>{children}</p>
    </TitleBox>
  );
}
