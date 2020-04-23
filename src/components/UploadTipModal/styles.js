import styled from "styled-components";

const close = require("~/assets/images/close.png");
const tip1 = require("~/assets/images/tip-1.png");
const tip2 = require("~/assets/images/tip-2.png");
const tip3 = require("~/assets/images/tip-3.png");
const tip4 = require("~/assets/images/tip-4.png");
const tip5 = require("~/assets/images/tip-5.png");
const tip6 = require("~/assets/images/tip-6.png");

const PiackerBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  padding: 25px 20px;
  width: 88%;
  box-sizing: border-box;
  z-index: 3001;
  .tip-close {
    display: inline-block;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 14px;
    right: 14px;
    background-image: url(${close});
    background-size: 100% 100%;
  }
  .tip-title {
    color: #232323;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  .tip-info {
    padding-left: 12px;
    position: relative;
    margin-top: 10px;
    text-align: justify;
    &:before {
      content: "";
      position: absolute;
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #f54d4f;
      left: 0;
      top: 6px;
    }
  }
  .tip-img {
    margin-top: 20px;
    & > div {
      flex: 1;
      i {
        display: block;
        width: 80px;
        height: 55px;
        margin: 0 auto 10px;
        background-size: 100% 100%;
        &.tip-img-1 {
          background-image: url(${tip1});
        }
        &.tip-img-2 {
          background-image: url(${tip2});
        }
        &.tip-img-3 {
          background-image: url(${tip3});
        }
        &.tip-img-4 {
          background-image: url(${tip4});
        }
        &.tip-img-5 {
          background-image: url(${tip5});
        }
        &.tip-img-6 {
          background-image: url(${tip6});
        }
      }
      p {
        font-size: 12px;
        text-align: center;
        white-space: nowrap;
      }
    }
  }
  .tip-btn {
    color: #fff;
    font-size: 17px;
    margin-top: 24px;
    height: 46px;
    background: #f54d4f;
    border-radius: 23px;
  }
`;

export default PiackerBox;
