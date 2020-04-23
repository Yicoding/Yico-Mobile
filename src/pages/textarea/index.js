/**
 * Steps
 */
import React, { useState, useCallback, useRef } from "react";

import { List } from "antd-mobile";
import { Page } from "@wonder-ui/core";
import ItemFill from "~/components/ItemFill";
import ItemTxt from "~/components/ItemTxt";
import InputItemFill from "~/components/InputItemFill";
import TextAreaFill from "~/components/TextAreaFill";

window.timeeInput = null;

export default function() {
  const ref = useRef();

  const [value, setVal] = useState("");

  const onChange = useCallback(val => {
    setVal(val);
  }, []);

  return (
    <Page name="步骤条">
      <List>
        <ItemFill extra="百货商店" arrow="horizontal">
          经营范围
        </ItemFill>
        <ItemFill
          extra="百货商店百货商店百货商店百货商店百货商店百货商店"
          arrow="horizontal"
        >
          经营范围
        </ItemFill>
        <ItemFill extra="百货商店百货商店百货商店百货商店百货商店百货商店">
          经营范围
        </ItemFill>
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
        <ItemTxt extra="股份责任公司">企业类型</ItemTxt>
        <ItemTxt extra="商丘市城乡一体化示范区梓宇电子烟店商丘市城乡一体化示范区梓宇电子烟店">
          商户名称
        </ItemTxt>
        <ItemTxt extra="上海市/浦东新区">经营场所</ItemTxt>
      </List>
    </Page>
  );
}
