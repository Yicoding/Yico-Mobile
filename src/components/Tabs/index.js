/**
 * Steps
 */
import React, { useState, useCallback, useRef } from "react";

import TabBox, { TabContainer } from "./styles";

export default function(props) {
  // 空函数
  const noon = useCallback(() => {}, []);

  const { num = 4, tabs = [], initialPage = 0, onChange = noon } = props;

  const ref = useRef();

  const [tabIndex, setTabIndex] = useState(initialPage);

  const tabHandle = useCallback(
    (item, index, e) => {
      if (index === tabIndex) {
        return;
      }
      setTabIndex(index);
      onChange && onChange(item, index); // eslint-disable-line
      if (tabs.length > num && ref && ref.current) {
        ref.current.scrollTo(e.target.offsetLeft / 2, 0);
      }
    },
    [tabIndex, tabs, num]
  );

  return (
    <TabContainer>
      <TabBox
        ref={ref}
        num={num}
        className={tabs && tabs.length > num ? "tab-scroll" : ""}
      >
        {tabs &&
          tabs.length > 0 &&
          tabs.map((item, index) => {
            return (
              <li // eslint-disable-line
                key={index} // eslint-disable-line
                className={index === tabIndex ? "active" : ""}
                onClick={e => tabHandle(item, index, e)}
              >
                {item}
              </li>
            );
          })}
      </TabBox>
    </TabContainer>
  );
}
