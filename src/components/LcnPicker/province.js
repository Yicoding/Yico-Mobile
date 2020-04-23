import { types } from "mobx-state-tree";
import { toJS } from "mobx";

import services from "~/services";

// 区
const areaItem = types.model("areaItem", {
  id: types.maybeNull(types.number),
  value: types.maybeNull(types.string),
  label: types.maybeNull(types.string)
});

// 市
const cityItem = types.model("cityItem", {
  id: types.maybeNull(types.number),
  value: types.maybeNull(types.string),
  label: types.maybeNull(types.string),
  children: types.optional(types.array(areaItem), [])
});

// 省
const provinceItem = types.model("provinceItem", {
  id: types.maybeNull(types.number),
  value: types.maybeNull(types.string),
  label: types.maybeNull(types.string),
  children: types.optional(types.array(cityItem), [])
});

// 列表
const provinceModel = types
  .model("provinceModel", {
    data: types.optional(types.array(provinceItem), [])
  })
  .views(self => {
    return {
      get dataList() {
        return toJS(self.data);
      }
    };
  })
  .volatile(() => {
    return {
      parentId: null,
      preloader: false,
      type: null
    };
  })
  .actions(self => {
    return {
      // 修改省
      setProvince(data) {
        self.data = data; // eslint-disable-line
        return self;
      },
      // 修改市
      setCity(data, i) {
        self.data[i].children = data; // eslint-disable-line
        return self;
      },
      // 修改区
      setArea(data, i, j) {
        self.data[i].children[j].children = data; // eslint-disable-line
        return self;
      },
      // 设置请求参数
      setQuery({ parentId, preloader, type }) {
        self.parentId = parentId; // eslint-disable-line
        self.preloader = preloader; // eslint-disable-line
        self.type = type; // eslint-disable-line
        return self;
      },
      // 查询
      query() {
        return new Promise(async (resolve, reject) => {
          try {
            const { data } = await services.queryzone({
              params: {
                parentId: self.parentId
              },
              preloader: self.preloader
            });
            console.log("queryzone", data);
            if (!data || !data.length) {
              resolve([]);
              return;
            }
            let dataList = data.map(item => {
              const { zoneCode, zoneName, id } = item;
              return {
                value: zoneCode,
                label: zoneName,
                id,
                children: []
              };
            });
            if (self.type === "province") {
              dataList = dataList.filter(
                item =>
                  !(
                    item.value === "820000" ||
                    item.value === "810000" ||
                    item.value === "710000"
                  )
              );
            }
            resolve(dataList);
          } catch (e) {
            console.log("queryzone报错", e);
            reject(e);
          }
        });
      }
    };
  });

export default provinceModel;
