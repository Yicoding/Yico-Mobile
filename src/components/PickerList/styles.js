import styled from "styled-components";

const check = require("~/assets/images/icon-right.png");

const PiackerListBox = styled.div`
  min-height: 200px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background: rgba(0, 0, 0, 0.6);
  padding: 0 15px 30px;
  .picker-content {
    background: #fff;
    padding: 10px 15px;
    li {
      height: 45px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      &.picker-li-active {
        color: #f54d4f;
      }
      span {
        flex: 1;
      }
      .picker-icon {
        width: 18px;
        height: 18px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin-left: 20px
        position: relative;
        &.picker-icon-check {
          border: 1px solid #F54D4F;
          i {
            background: url(${check});
            background-size: 100% 100%;
            width: 14px;
            height: 14px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
`;

export default PiackerListBox;
