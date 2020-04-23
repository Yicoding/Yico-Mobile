import styled from "styled-components";

const ItemBox = styled.div`
  .am-list-item {
    .am-list-line {
      .am-list-content,
      .am-list-extra {
        color: #323232;
        font-size: 15px;
      }
      .am-list-content {
        width: 119px;
        margin-right: 5px;
        flex: initial;
      }
      .am-list-extra {
        flex: 1;
        text-align: left;
        white-space: normal;
      }
    }
  }
  &.align-start {
    .am-list-item {
      .am-list-line {
        align-items: flex-start;
      }
    }
  }
`;

export default ItemBox;
