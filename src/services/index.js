import request from "./request";
import api from "./api";

const services = {};

function createService(apiOpts) {
  const { name, ...restOpts } = apiOpts;
  return params => {
    // 开发环境打印调试信息
    // eslint-disable-next-line
    if (DEV) {
      // eslint-disable-next-line no-console
      console.log(`${name} ${new Date()}`);
    }

    return request({
      ...restOpts,
      ...params
    });
  };
}

for (const [key, value] of Object.entries(api)) {
  services[key] = createService(value);
}

export default services;
