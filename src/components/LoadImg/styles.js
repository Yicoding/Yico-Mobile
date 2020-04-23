import styled from "styled-components";

const Container = styled.div`
  .picker-img-box {
    padding: 3px;
    width: 80px;
    height: 80px;
    border: 1px dashed #d2d2d2;
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;
    .picker-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .picker-empty {
      width: 100%;
      height: 100%;
      background: #efefef;
      color: #999;
      font-size: 10px;
    }
  }
  .title {
    font-size: 12px;
    color: #7d7d80;
    text-align: center;
  }
`;

export default Container;
