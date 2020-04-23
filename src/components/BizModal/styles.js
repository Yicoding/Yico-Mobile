import styled from "styled-components";

const close = require("~/assets/images/close.png");

const Bizbox = styled.div`
  background: #fff;
  position: fixed;
  top: 30%;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3000;
  .biz-title {
    font-size: 17px;
    font-weight: bold;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background: #e8e8e8;
      transform: scaleY(0.5);
    }
    i {
      position: absolute;
      right: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 22px;
      height: 22px;
      background: url(${close});
      background-size: 100% 100%;
    }
  }
  .biz-input {
    margin: 30px 45px 0;
    position: relative;
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background: #e8e8e8;
      transform: scaleY(0.5);
    }
    input {
      font-size: 20px;
      padding: 10px 0;
      // text-align: center;
      width: 100%;
      box-sizing: border-box;
    }
  }
  .biz-btn {
    color: #fff;
    font-size: 17px;
    margin: 40px 30px 0;
    height: 46px;
    background: #f54d4f;
    border-radius: 23px;
  }
`;

export default Bizbox;
