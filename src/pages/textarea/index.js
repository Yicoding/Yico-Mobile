/**
 * Steps
 */
import React, { useState, useCallback, useRef } from "react";

import { List } from 'antd-mobile';
import { Page } from "@wonder-ui/core";
import InputItemFill from '~/components/InputItemFill';
import TextAreaFill from '~/components/TextAreaFill';

window.timeeInput = null;

export default function () {

  const ref = useRef();

  const [value, setVal] = useState('');

  const onChange = useCallback((val) => {
    setVal(val);
  }, []);

  return (
    <Page name="步骤条">
      <List>
        <InputItemFill
          clear
          placeholder="请输入姓名"
          labelNumber={7}
          value={value}
          onChange={onChange}
        >
          姓名
        </InputItemFill>
        <TextAreaFill
          clear
          ref={ref}
          title="商户名称"
          autoHeight
          labelNumber={7}
          maxLength={30}
          placeholder="请输入商户名称"
          value={value}
          onChange={onChange}
        />
      </List>
    </Page>
  )
};

