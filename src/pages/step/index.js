/**
 * Steps
 */
import React from "react";

import { Page } from "@wonder-ui/core";
import Steps from '~/components/Steps';

const { Step } = Steps;

export default function() {
  return (
    <Page name="步骤条">
      <Steps size="large" current={1}>
        <Step status="pass-red" title="营业执照与法人"></Step>
        <Step title="开户凭证"></Step>
        <Step status="disabled" title="经营场所"></Step>
      </Steps>
      <Steps size="small" current={1}>
        <Step status="pass-red" title="营业执照与法人"></Step>
        <Step title="开户凭证"></Step>
        <Step status="disabled" title="经营场所"></Step>
      </Steps>
      <Steps size="small" direction="column" current={0}>
        <Step status="process" title="资料审核中" desc="审核结果将在1~2个工作日内给出，如果审核不通过，请及时修改你的资料哦"></Step>
        <Step status="await" title="合同签约" desc="审核通过后，前往【我的申请】可直接签约哦~"></Step>
        <Step status="await" title="系统接入" desc="审核通过后，双方将进行系统联调对接，我们会给您的邮箱（xiali.li@126.com）发送系统接入指南"></Step>
      </Steps>
    </Page>
  )
};

