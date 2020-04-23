import React from "react";
import styled from "styled-components";

import { empty } from "../Icon";

const EmptyContent = styled.div`
  font-size: 13px;
  color: #7d7d80;
  background: #fff;
  text-align: center;
  padding: 30px 0;
  img {
    display: block;
    width: 50px;
    margin: 0 auto 20px;
  }
`;

export default function Empty({ txt = "还没有内容哦" }) {
  return (
    <EmptyContent>
      <img alt="" src={empty} />
      <p>{txt}</p>
    </EmptyContent>
  );
}
