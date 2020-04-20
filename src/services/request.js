import axios from "axios";

/**
 * 可在该模块编写部分业务逻辑，如请求头token，请求失败/登录过期/服务错误等处理
 * axios 文档：https://github.com/axios/axios#request-config
 */
export default function request(options) {
  return axios({
    // eslint-disable-next-line
    baseURL: API_URL, // 在 doly.config.js 中配置
    ...options
  })
    .then(res => {
      // 请求成功处理，一般会有其他逻辑处理。如登录过期、特殊responseCode等

      return res.data;
    })
    .catch(err => {
      // 请求失败处理，一般是全局错误提示

      return Promise.reject(err);
    });
}
