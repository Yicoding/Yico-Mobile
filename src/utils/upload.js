/**
 * 图片上传
 */
import services from "~/services";
import ls from "~/utils/ls";

async function upLoad(files, callback, name = "file", url = "fileupload") {
  try {
    const formData = new FormData();
    const file = files[0];
    formData.append(name, file);
    const { data } = await services[url]({
      data: formData,
      headers: {
        accessToken: ls.get("accessToken"),
        "Content-Type": "multipart/form-data"
      },
      preloader: true
    });
    console.log("upLoad", data);
    // 预览图片
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
      console.log("e.target.result", e.target.result);
      callback && // eslint-disable-line
        callback({
          data,
          src: e.target.result
        });
    };
  } catch (e) {
    console.log("upLoad报错", e);
  }
}

export default upLoad;
