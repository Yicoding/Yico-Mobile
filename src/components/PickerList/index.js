import React, { useState, useEffect } from "react";

import PiackerListBox from "./styles";

export default function PickerList({
  visible,
  selectList = [],
  onOk,
  value,
  height = 200
}) {
  console.log("PickerList value", value);
  const [filterList, setFilterList] = useState([]);

  // init
  useEffect(() => {
    console.log("filterList", selectList);
    setFilterList(selectList);
  }, [selectList]);

  // 过滤
  useEffect(() => {
    if (value.trim()) {
      const newList = selectList.filter(item => {
        return item.txt.indexOf(value.trim()) > -1;
      });
      console.log("newList", newList);
      setFilterList(newList);
    } else {
      setFilterList(selectList);
    }
  }, [value, selectList]);

  if (!visible || !filterList.length) {
    return null;
  }
  return (
    <PiackerListBox style={{ height }}>
      <ul className="picker-content">
        {filterList.length > 0 &&
          filterList.map(item => {
            return (
              <li // eslint-disable-line
                key={item.value}
                className={value === item.value ? "picker-li-active" : ""}
                onClick={() => onOk(item)}
              >
                <span>{item.txt}</span>
                {value === item.value ? (
                  <div className="picker-icon picker-icon-check">
                    <i />
                  </div>
                ) : (
                  <div className="picker-icon" />
                )}
              </li>
            );
          })}
      </ul>
    </PiackerListBox>
  );
}
