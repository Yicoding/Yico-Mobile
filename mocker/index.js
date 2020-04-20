const delay = require("doly-mocker-api/utils/delay");
const notices = require("./notices");

const noMock = process.env.MOCK === "none";

// mock数据
const mocks = {
  ...notices
};

module.exports = noMock ? {} : delay(mocks, 1000);
