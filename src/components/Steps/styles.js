import styled from "styled-components";

import {
  checkRed,
  checkBlue,
  ellipsis,
  ellipsisGray,
  iconError
} from "../Icon";

export const StepItem = styled.div`
  display: flex;
  position: relative;
  &.item-row {
    flex-direction: column;
    align-items: center;
    &.line-active {
      &:after {
        content: "";
        position: absolute;
        top: 14px;
        left: calc(50% + 15px);
        width: 100%;
        height: 2px;
        background: #f54d4f;
      }
    }
    &.line-disabled {
      &:after {
        content: "";
        position: absolute;
        top: 14px;
        left: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 2px;
        background: #f7d3d5;
      }
    }
  }
  &.item-column {
    padding-bottom: 23px;
    &.line-active {
      &:after {
        content: "";
        position: absolute;
        top: 18px;
        left: 8px;
        width: 2px;
        height: calc(100% - 18px);
        background: #298bea;
      }
    }
    &.line-disabled {
      &:after {
        content: "";
        position: absolute;
        top: 18px;
        left: 8px;
        width: 2px;
        height: calc(100% - 18px);
        background: #ccc;
      }
    }
    .icon {
      margin-right: 8px;
      margin-bottom: 0;
    }
  }
  &.item-small {
    &.item-row {
      &.line-active {
        &:after {
          left: calc(50% + 9px);
          top: 8px;
          height: 1px;
        }
      }
      &.line-disabled {
        &:after {
          left: calc(50% + 9px);
          top: 8px;
          height: 1px;
        }
      }
    }
  }
  .icon {
    color: #fff;
    border-radius: 50%;
    text-align: center;
    position: relative;
    z-index: 1;
    margin-bottom: 12px;
    &.icon-large {
      font-size: 17px;
      width: 30px;
      height: 30px;
      line-height: 30px;
    }
    &.icon-small {
      font-size: 12px;
      width: 18px;
      height: 18px;
      line-height: 18px;
    }
    &.icon-active {
      background: #f54d4f;
    }
    &.icon-disabled {
      background: #f7d3d5;
    }
    &.icon-pass-red {
      background-image: url(${checkRed});
      background-size: 100% 100%;
    }
    &.icon-pass-blue {
      background-image: url(${checkBlue});
      background-size: 100% 100%;
    }
    &.icon-process {
      background-image: url(${ellipsis});
      background-size: 100% 100%;
    }
    &.icon-await {
      background-image: url(${ellipsisGray});
      background-size: 100% 100%;
      width: 21px;
      height: 21px;
      margin-right: 6px;
      position: relative;
      bottom: 1px;
      right: 2px;
    }
    &.icon-error {
      background-image: url(${iconError});
      background-size: 100% 100%;
    }
  }
  .step-txt {
    flex: 1;
    .title {
      font-size: 15px;
      color: rgba(0, 0, 0, 0.65);
      &.title-active,
      &.title-pass-red {
        font-size: 13px;
        color: #f54d4f;
      }
      &.title-disabled {
        font-size: 13px;
        color: #f7d3d5;
      }
      &.title-process,
      &.title-pass-blue {
        color: rgba(0, 0, 0, 0.8);
      }
    }
    .desc {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.45);
      margin-top: 6px;
    }
  }
`;

const StepBox = styled.div`
  display: flex;
  padding: 20px 0;
  div,
  p {
    margin: 0;
  }
  &.column {
    flex-direction: column;
    padding: 0 20px;
  }
  & > div {
    flex: 1;
  }
`;

export default StepBox;
