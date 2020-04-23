/**
 * Steps
 */
import React from "react";

import { Page } from "@wonder-ui/core";
import Tabs from "~/components/Tabs";
import CommonTitle from "~/components/CommonTitle";
import EllipsisTxt from "~/components/EllipsisTxt";

const tabs = ["产品信息", "联系人", "营业执照与法人", "开户凭证", "经营场所"];

export default function() {
  return (
    <Page name="标签页">
      <Tabs tabs={tabs} />
      <CommonTitle>电脑网址收款</CommonTitle>
      <CommonTitle>电脑网址收款</CommonTitle>
      <EllipsisTxt>
        电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款电脑网址收款
      </EllipsisTxt>
    </Page>
  );
}
