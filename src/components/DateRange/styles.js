import styled from "styled-components";

const DateBox = styled.div`
  padding-top: 12px;
  display: flex;
  font-size: 14px;
  .select-item {
    flex: 1.5;
    & > p {
      white-space: nowrap;
      color: #969799;
      font-size: 13px;
    }
    .am-list-item {
      padding-left: 0;
      .am-list-line {
        display: flex;
        padding-right: 10px;
        .am-list-extra {
          flex: 1;
          color: #232323;
          font-size: 15px;
          text-align: left;
        }
      }
    }
  }
  .time-forever {
    flex: 1;
    position: relative;
    display: flex;
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: #ddd;
      transform: scaleY(0.5);
    }
    & > div {
      min-height: 44px;
      align-self: flex-end;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 10px;
      i {
        width: 15px;
        height: 15px;
        border: 1px solid #999;
        border-radius: 50%;
        margin-left: 10px;
      }
      span {
        font-size: 15px;
      }
    }
    &.time-forever-left {
      & > div {
        justify-content: flex-start;
        img {
          width: 16px;
          height: 16px;
          margin-left: 10px;
        }
      }
    }
  }
`;

export default DateBox;
