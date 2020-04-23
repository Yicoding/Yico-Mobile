import styled from "styled-components";

const TitleBox = styled.div`
  color: #323232;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  i {
    margin-right: 10px;
    width: 5px;
    height: 12px;
    background: #f54d50;
    border-radius: 5px;
    position: relative;
    bottom: 1px;
  }
  p {
    margin: 0;
  }
`;

export default TitleBox;
