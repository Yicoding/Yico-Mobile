import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  &.container {
    background: #e8f1fc;
  }
  &.container-border {
    padding: 5px;
  }
  .hide {
    display: none;
  }
  input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    z-index: 9;
    width: 100%;
  }
  .picker-img-box {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
  .delete-box {
    width: 20px;
    height: 20px;
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 20;
    .delete {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .border-i {
    display: inline-block;
    width: 7px;
    height: 7px;
    border: solid #dbdbdb;
    border-width: 2px 0 0 2px;
    position: absolute;
    z-index: 11;
    &.border-left-top {
      top: 0;
      left: 0;
    }
    &.border-right-top {
      top: 0;
      right: 0;
      transform: rotate(90deg);
    }
    &.border-left-bottom {
      bottom: 0;
      left: 0;
      transform: rotate(-90deg);
    }
    &.border-right-bottom {
      bottom: 0;
      right: 0;
      transform: rotate(180deg);
    }
  }
  .img-dashed {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 8;
    border: 1px dashed #d2d2d2;
    border-radius: 5px;
  }
`;

export default Container;
