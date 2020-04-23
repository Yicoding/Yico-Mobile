import React, { useCallback } from "react";

import { Flex, Modal } from "antd-mobile";
import Bizbox from "./styles";

export default function BizModal({
  visible,
  onChange,
  onCancel,
  val = "",
  onOk,
  title = "请核对统一社会信用代码"
}) {
  // 空函数
  const noop = useCallback(() => {}, []);

  // calculate the position of the caret
  const calcPos = useCallback(
    (prePos, preCtrlVal, rawVal, ctrlVal, placeholderChars, maskReg) => {
      const editLength = rawVal.length - preCtrlVal.length;
      const isAddition = editLength > 0;
      let pos = prePos;
      if (isAddition) {
        const additionStr = rawVal.substr(pos - editLength, editLength);
        let ctrlCharCount = additionStr.replace(maskReg, "").length;
        pos -= editLength - ctrlCharCount;
        let placeholderCharCount = 0;
        while (ctrlCharCount > 0) {
          if (
            placeholderChars.indexOf(
              ctrlVal.charAt(pos - ctrlCharCount + placeholderCharCount)
            ) === -1
          ) {
            ctrlCharCount -= 1;
          } else {
            placeholderCharCount += 1;
          }
        }
        pos += placeholderCharCount;
      }
      return pos;
    },
    []
  );

  const handleOnChange = useCallback(
    (value, isMutated = false, adjustPos = noop) => {
      if (onChange) {
        if (isMutated) {
          setTimeout(() => {
            onChange(value);
            adjustPos();
          });
        } else {
          onChange(value);
          adjustPos();
        }
      } else {
        adjustPos();
      }
    },
    []
  );

  const onChangeTrim = useCallback(
    e => {
      const el = e.target;
      const { value: rawVal } = el;

      let prePos = 0;
      try {
        // some input type do not support selection, see https://html.spec.whatwg.org/multipage/input.html#do-not-apply
        prePos = el.selectionEnd || 0;
      } catch (error) {
        console.warn("Get selection error:", error);
      }

      const preCtrlVal = val;

      const ctrlValue = rawVal
        .replace(/\s/g, "")
        .replace(/(....)(?=.)/g, "$1 ");
      handleOnChange(ctrlValue, ctrlValue !== rawVal, () => {
        try {
          // some input type do not support selection, see https://html.spec.whatwg.org/multipage/input.html#do-not-apply
          let pos = calcPos(
            prePos,
            preCtrlVal,
            rawVal,
            ctrlValue,
            [" "],
            /\s/g
          );
          console.log("pos", pos);
          if (pos > 0 && pos % 5 === 0) {
            pos -= 1;
          }
          el.selectionStart = el.selectionEnd = pos; // eslint-disable-line
        } catch (error) {
          console.warn("Set selection error:", error);
        }
      });
    },
    [onChange, val]
  );

  // input失去焦点
  const onBlur = useCallback(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 200);
  }, []);

  if (!visible) {
    return null;
  }
  return (
    <Modal popup visible onClose={onCancel} animationType="slide-up">
      <Bizbox>
        <div className="biz-title">
          {title}
          <i onClick={() => onCancel()} />
        </div>
        <div className="biz-input">
          <input
            placeholder="请输入"
            autoFocus // eslint-disable-line
            maxLength="22"
            value={val}
            onChange={onChangeTrim}
            onBlur={onBlur}
          />
        </div>
        <Flex justify="center" className="biz-btn" onClick={onOk}>
          确认
        </Flex>
      </Bizbox>
    </Modal>
  );
}
