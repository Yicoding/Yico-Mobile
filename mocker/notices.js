module.exports = {
  "GET /api/notices": (req, res) => {
    res.send({
      data: [
        {
          timestamp: new Date().getTime(),
          content: "通知内容1"
        },
        {
          timestamp: new Date().getTime() + 1,
          content: "通知内容2"
        },
        {
          timestamp: new Date().getTime() + 2,
          content: "通知内容3"
        }
      ],
      errCode: "00",
      errMsg: "mock api success"
    });
  }
};
