import React, { useState, useEffect, useCallback, useMemo } from "react";

import { List } from "antd-mobile";
import { Picker } from "@wonder-ui/core";
import { observer } from "mobx-react";
import { session } from "~/utils/ls";
import provinceModel from "./province";

const { Item } = List;

const LcnPicker = observer(
  React.forwardRef(
    (
      {
        txt,
        value,
        label = "地址",
        placeholder = "请选择省份/城市",
        onOk,
        cols = 2,
        ...resProp
      },
      ref
    ) => {
      const info = useMemo(() => provinceModel.create(), []);

      const [timestamp, setTimestamp] = useState(""); // eslint-disable-line
      const forceUpdate = () => setTimestamp(Date.now());

      // 请求区数据
      const getDataListArea = useCallback(async (i, j, preloader) => {
        try {
          const data = await info
            .setQuery({
              parentId: info.dataList[i].children[j].id,
              preloader,
              type: "city"
            })
            .query();
          info.setArea(data, i, j);
          console.log("getDataListArea", data);
          session.set("provinceData", info.dataList);
          forceUpdate();
        } catch (e) {
          console.log("getDataListArea报错", e);
        }
      }, []);

      // 请求市数据
      const getDataListCity = useCallback(
        (i, preloader) => {
          return new Promise(async (resolve, reject) => {
            try {
              const data = await info
                .setQuery({
                  parentId: info.dataList[i].id,
                  preloader,
                  type: "city"
                })
                .query();
              info.setCity(data, i);
              console.log("getDataListCity", data);
              session.set("provinceData", info.dataList);
              forceUpdate();
              if (cols === 3) {
                getDataListArea(i, 0, true);
              }
              resolve();
            } catch (e) {
              console.log("getDataListCity报错", e);
              reject(e);
            }
          });
        },
        [cols, value]
      );

      // 如果存在选择值
      const getValueData = useCallback(async () => {
        try {
          if (!info.dataList || !info.dataList.length || !value) {
            return;
          }
          console.log("getDataList value", value, info.dataList);
          const i = info.dataList.findIndex(
            item => item.value === String(value[0])
          );
          if (!info.dataList[i].children.length) {
            await getDataListCity(i);
          }
          if (cols === 3) {
            const j = info.dataList[i].children.findIndex(
              item => item.value === String(value[1])
            );
            console.log("getDataList i", i, j);
            if (j !== 0 && info.dataList[i].children[j].children.length === 0) {
              getDataListArea(i, j);
            }
          }
        } catch (e) {
          console.log("getValueData报错", e);
        }
      }, [cols, value]);

      // 请求省份数据
      const getDataList = useCallback(
        async preloader => {
          const provinceData = session.get("provinceData");
          // 本地存在缓存
          if (provinceData) {
            info.setProvince(provinceData);
            getValueData();
            forceUpdate();
            return;
          }
          try {
            const data = await info
              .setQuery({
                parentId: 0,
                preloader,
                type: "province"
              })
              .query();
            info.setProvince(data);
            session.set("provinceData", data);
            console.log("getDataList", data);
            forceUpdate();
            // 需要初始化值
            if (value && value.length) {
              getValueData();
            } else {
              getDataListCity(0, preloader);
            }
          } catch (e) {
            console.log("getDataList报错", e);
          }
        },
        [cols, value]
      );

      // init
      useEffect(() => {
        getDataList();
      }, [cols]);

      // 需要请求固定城市
      useEffect(() => {
        if (value && value.length) {
          getValueData();
        }
      }, [value, cols]);

      // 格式转化
      const formatVal = useCallback(() => {
        if (!txt) {
          return <p style={{ color: "#bababa" }}>{placeholder}</p>;
        }
        return txt;
      }, [txt, placeholder]);

      // 省市显示
      const FormBoxWrapper = params => {
        const { extra, ...rest } = params;
        return (
          <Item arrow="horizontal" extra={formatVal()} wrap {...rest}>
            {label}
          </Item>
        );
      };

      // 每列数据选择变化后的回调函数
      const onPickerChange = useCallback(
        async e => {
          console.log("onPickerChange", e);
          // eslint-disable-next-line
          if (e.length > cols - 1 || info.dataList.length === 0) {
            return;
          }
          const i = info.dataList.findIndex(item => item.value === e[0]);
          console.log("i", i);
          // 请求市
          if (e.length === 1) {
            getDataListCity(i, true);
          } else if (e.length === 2) {
            // 请求区
            const j = info.dataList[i].children.findIndex(
              item => item.value === e[1]
            );
            console.log("j", j);
            getDataListArea(i, j, true);
          }
        },
        [cols]
      );

      // 确定
      const pickHandle = useCallback(
        // (e, arr) => {
        (e, arr) => {
          // return console.log('pickHandle', e, arr);
          if (e.length === 1) {
            e.push(arr[0].children[0].value);
            if (arr[0].children[0].children.length > 0) {
              e.push(arr[0].children[0].children[0].value);
            }
          } else if (e.length === 2 && arr[1].children.length > 0) {
            e.push(arr[1].children[0].value);
          }
          if (arr.length === 1) {
            arr.push(arr[0].children[0]);
            if (arr[0].children[0].children.length > 0) {
              arr.push(arr[0].children[0].children[0]);
            }
          } else if (arr.length === 2 && arr[1].children.length > 0) {
            arr.push(arr[1].children[0]);
          }
          console.log("pickHandle", e, arr);
          onOk && onOk(e, arr); // eslint-disable-line
        },
        [onOk, cols]
      );

      return (
        <Picker
          value={value}
          ref={ref}
          data={info.dataList}
          cols={cols}
          onOk={pickHandle}
          onPickerChange={onPickerChange}
          {...resProp}
        >
          <FormBoxWrapper />
        </Picker>
      );
    }
  )
);

export default LcnPicker;
