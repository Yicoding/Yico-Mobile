import styled from "styled-components";

export const EllipsisContanier = styled.div`
  .arrow {
    color: blue;
    text-align: center;
  }
`;

const EllipsisBox = styled.div`
  display: inline;
  &.ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    word-break: break-all;
    overflow: hidden;
  }
`;

export default EllipsisBox;
