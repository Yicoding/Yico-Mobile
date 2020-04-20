import React from "react";
import { Page, List, ListItem } from "@wonder-ui/core";

import routing from "~/stores/routing";

export default function() {
  return (
    <Page name="首页">
      <List renderHeader={() => `页面列表`}>
        <ListItem
          arrow="horizontal"
          onClick={() => {
            routing.push("steps");
          }}
        >
          步骤条
        </ListItem>
        <ListItem
          arrow="horizontal"
          onClick={() => {
            routing.push("textarea");
          }}
        >
          文本域
        </ListItem>
      </List>
    </Page>
  );
}
