/**
 * api 配置文件
 * 格式：
 *    // 用于注册 service 方法
 *    apiName: {
 *      name, // 接口描述
 *      url, // 接口地址
 *      method // 请求方法
 *    }
 */
const apiConfig = {
  getNotices: {
    name: "获取通知列表",
    url: "/api/notices",
    method: "get"
  }
};

// 注意使用的是module.exports，便于本地开发mock使用
module.exports = apiConfig;
