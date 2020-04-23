import React, { useCallback, useState, useEffect } from "react";

import { Modal } from "antd-mobile";
import Empty from "../Empty";
import PiackerBox from "./styles";

let timeeInput = null;

export default function PickerSelect({
  visible,
  selectList = [],
  onOk,
  onCancel,
  title,
  value,
  showSearchBox,
  placeholder = "请输入",
  height = 300
}) {
  const [filterList, setFilterList] = useState([]);

  const onChange = useCallback(
    e => {
      console.log("onChange", e.target.value);
      const val = e.target.value.trim();
      const newList = selectList.filter(item => {
        return item.txt.indexOf(val) > -1;
      });
      setFilterList(newList);
    },
    [selectList]
  );

  useEffect(() => {
    setFilterList(selectList);
  }, [selectList]);

  // 聚焦
  const onFocus = useCallback(() => {
    if (timeeInput) {
      clearTimeout(timeeInput);
      timeeInput = null;
    }
  }, []);

  // input失去焦点
  const onBlur = useCallback(() => {
    timeeInput = setTimeout(() => {
      window.scroll(0, 0);
    }, 200);
  }, []);

  if (!visible) {
    return null;
  }
  return (
    <Modal popup visible={visible} onClose={onCancel} animationType="slide-up">
      <PiackerBox>
        <div className="picker-title">
          {title}
          <i onClick={() => onCancel()} />
        </div>
        {showSearchBox && (
          <div className="search-input-box">
            <div className="search-input-content">
              <i />
              <input
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>
          </div>
        )}
        <div className="picker-content" style={{ height: `${height}px` }}>
          {filterList.length > 0 ? (
            filterList.map((item, i) => {
              return (
                <li // eslint-disable-line
                  key={item.value}
                  className={value === item.value ? "picker-li-active" : ""}
                  onClick={() => onOk(item)}
                >
                  <span>{item.txt}</span>
                  {value === item.value && <i />}
                </li>
              );
            })
          ) : (
            <Empty txt="没有搜索到该银行" />
          )}
        </div>
      </PiackerBox>
    </Modal>
  );
}
