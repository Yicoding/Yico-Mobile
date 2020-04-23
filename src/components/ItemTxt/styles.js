import styled from "styled-components";

const ItemTxtBox = styled.div`
  display: flex;
  padding: 7px 15px;
  font-size: 15px;
  & > span {
    color: #7d7d80;
    white-space: nowrap;
    margin-right: 20px;
  }
  & > div {
    word-break: break-all;
    flex: 1;
    color: #323232;
    text-align: right;
  }
`;

export default ItemTxtBox;
