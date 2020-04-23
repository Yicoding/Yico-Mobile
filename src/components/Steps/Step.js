/**
 * Steps
 */
import React, { useCallback } from "react";

import classnames from "classnames";

import { StepItem } from "./styles";

export default function(props) {
  const {
    status = "active",
    size = "large",
    current = 0,
    index = 0,
    direction = "row",
    total = 0,
    icon,
    title,
    desc
  } = props;

  // 渲染图标
  const RendenIcon = useCallback(() => {
    if (icon) {
      return icon;
    }
    return (
      <div className={`icon icon-${size} icon-${status}`}>
        {status === "active" || status === "disabled" ? index + 1 : null}
      </div>
    );
  }, []);

  // 渲染title
  const RendenTitle = useCallback(() => {
    if (!title) {
      return null;
    }
    return <p className={classnames("title", `title-${status}`)}>{title}</p>;
  }, []);

  // 渲染描述
  const RendenDesc = useCallback(() => {
    if (!desc) {
      return null;
    }
    if (typeof desc === "string") {
      return <p className="desc">{desc}</p>;
    }
    return desc;
  }, []);

  return (
    <StepItem
      className={classnames(
        `item-${direction}`,
        `item-${size}`,
        total === 1 || index === total - 1 // eslint-disable-line
          ? ""
          : index < current
          ? "line-active"
          : "line-disabled"
      )}
    >
      {RendenIcon()}
      <div className="step-txt">
        {RendenTitle()}
        {RendenDesc()}
      </div>
    </StepItem>
  );
}
