// 路由配置
export default [
  {
    path: "/",
    async: () => import("~/pages/home"),
    exact: true
  },
  {
    path: "/steps",
    async: () => import("~/pages/step"),
    exact: true
  },
  {
    path: "/textarea",
    async: () => import("~/pages/textarea"),
    exact: true
  },
  {
    path: "/tab",
    async: () => import("~/pages/tab"),
    exact: true
  }
];
