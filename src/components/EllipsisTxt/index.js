/**
 * Steps
 */
import React, { useState, useEffect, useCallback, useRef } from "react";

import EllipsisBox, { EllipsisContanier } from "./styles";

export default function(props) {
  const { children } = props;

  const ref = useRef();

  const [rows, setRows] = useState(false);
  const [show, setShow] = useState(false);

  // init
  useEffect(() => {
    if (ref && ref.current) {
      console.log(ref, ref.current, ref.current.getClientRects());
      const num = ref.current.getClientRects().length;
      console.log("num", num);
      if (num > 3) {
        setRows(true);
      }
    }
  }, []);

  // 切换
  const onHandle = useCallback(() => {
    setShow(val => !val);
    setRows(show);
  }, [show]);

  return (
    <EllipsisContanier>
      <EllipsisBox ref={ref} className={rows ? "ellipsis" : ""}>
        {children}
      </EllipsisBox>
      {rows && !show && (
        <div className="arrow" onClick={onHandle}>
          展开
        </div>
      )}
      {rows ||
        (show && (
          <div className="arrow" onClick={onHandle}>
            收起
          </div>
        ))}
    </EllipsisContanier>
  );
}
