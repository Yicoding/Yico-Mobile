import styled from "styled-components";

const close = require("~/assets/images/close.png");
const check = require("~/assets/images/icon-right.png");
const search = require("~/assets/images/icon-search.png");

const PiackerBox = styled.div`
  background: #fff;
  .picker-title {
    font-size: 15px;
    font-weight: bold;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #323233;
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
  .search-input-box {
    padding: 7px 15px;
    .search-input-content {
      background: #f0f1f3;
      display: flex;
      align-items: center;
      padding-left: 7px;
      padding-right: 10px;
      border-radius: 4px;
      i {
        width: 15px;
        height: 15px;
        background-image: url(${search});
        background-size: 100% 100%;
      }
      input {
        height: 30px;
        flex: 1;
        margin-left: 10px;
      }
    }
  }
  .picker-content {
    padding: 0 0 20px 20px;
    min-height: 300px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    li {
      color: #323233;
      height: 45px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 22px;
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
      &.picker-li-active {
        color: #f54d4f;
      }
      i {
        width: 22px;
        height: 22px;
        background: url(${check});
        background-size: 100% 100%;
      }
    }
  }
`;

export default PiackerBox;
