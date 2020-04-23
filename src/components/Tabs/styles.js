import styled from "styled-components";

export const TabContainer = styled.div`
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 35px;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff);
  }
`;

const TabBox = styled.ul`
  padding: 0 20px 0 0;
  margin: 0;
  font-size: 0;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
  &.tab-scroll {
    display: block;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      padding: 0 15px;
    }
  }
  li {
    display: inline-block;
    font-size: 14px;
    height: 34px;
    line-height: 34px;
    white-space: nowrap;
    &.active {
      color: #f54d4f;
      font-size: 15px;
      font-weight: bold;
      position: relative;
      &:after {
        content: "";
        display: inline-block;
        width: 25px;
        height: 2px;
        background: #f54d4f;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

export default TabBox;
