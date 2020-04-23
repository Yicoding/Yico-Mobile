import React, { useState, useEffect, useCallback, forwardRef } from "react";

import { Toast } from "antd-mobile";
import WxImageViewer from "react-wx-images-viewer";
import classnames from "classnames";
import ls from "~/utils/ls";
import services from "~/services";
import Container from "./styles";

const deleteIcon = require("~/assets/images/delete.png");

export default forwardRef(function InputFile(
  {
    children,
    setVolatile,
    src,
    srcLarge,
    smallUrlKey,
    middleUrlKey,
    fssid,
    fssidSmall,
    onFileChange,
    showBorderAround,
    showDashed,
    showBg,
    name,
    onFileHandle,
    forceUpdate,
    size = 10,
    preview = true
  },
  ref
) {
  const [isOpen, setOpen] = useState(false);

  console.log("fssidSmall", fssidSmall);
  // 下载图片
  const filedownload = useCallback(async (id, key, nextFun, preloader) => {
    try {
      const { data } = await services.filedownload({
        params: { fssid: id },
        preloader
      });
      console.log("filedownload", data);
      let { buffer } = data;
      if (!/^data:image/.test(buffer)) {
        // 没有设置图片格式
        buffer = `data:image/png;base64,${buffer}`; // eslint-disable-line
      }
      setVolatile && setVolatile(key, buffer); // eslint-disable-line
      forceUpdate();
      nextFun && nextFun(); // eslint-disable-line
    } catch (e) {
      console.log("filedownload报错", e);
    }
  }, []);

  // 初始化小图
  useEffect(() => {
    if (!src && fssidSmall) {
      filedownload(fssidSmall, smallUrlKey);
    }
  }, [src, fssidSmall, smallUrlKey]);

  // input改变
  const onChange = useCallback(e => {
    const fileSelectorEl = ref.current;
    const { files } = fileSelectorEl;
    console.log("files", files);
    if (!files || !files.length) {
      return;
    }
    if (files[0].size > size * 1024 * 1024) {
      e.target.value = null; // 清空input值
      Toast.info(`图片大小不能超过${size}M`);
      return;
    }
    if (onFileChange) {
      onFileChange(files);
    }
  }, []);

  // 删除照片
  const removeImg = useCallback(() => {
    onFileChange && onFileChange(); // eslint-disable-line
  }, []);

  // 点击input
  const onHandle = useCallback(
    e => {
      e.target.value = null; // 清空input值，防止两次文件一致时不触发onChange事件
      let showTipmodal = false;
      if (!ls.get(name)) {
        showTipmodal = true;
        e.preventDefault();
        ls.set(name, true);
      }
      onFileHandle && onFileHandle(name, ref.current, showTipmodal); // eslint-disable-line
    },
    [name]
  );

  // 打开图片预览
  const onOpen = useCallback(() => {
    if (srcLarge) {
      setOpen(true);
      return;
    }
    filedownload(
      fssid,
      middleUrlKey,
      () => {
        if (preview) {
          setOpen(true);
        }
      },
      true
    );
  }, [preview, fssid, srcLarge, middleUrlKey]);

  // 关闭图片预览
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Container
      className={classnames(
        !src && showBg ? "container" : "",
        src ? "container-border" : ""
      )}
    >
      {src && (
        <div className="delete-box" onClick={() => removeImg()}>
          <img alt="" src={deleteIcon} className="delete" />
        </div>
      )}
      <input
        ref={ref}
        type="file"
        className={src ? "hide" : ""}
        accept="image/*"
        onChange={onChange}
        onClick={e => onHandle(e)}
      />
      {src ? (
        <div className="picker-img-box" onClick={onOpen}>
          <img alt="" className="picker-img" src={src} />
        </div>
      ) : (
        children
      )}
      {showBorderAround && !src && (
        <>
          <i className="border-i border-left-top" />
          <i className="border-i border-right-top" />
          <i className="border-i border-left-bottom" />
          <i className="border-i border-right-bottom" />
        </>
      )}
      {(src || showDashed) && <div className="img-dashed" />}
      {isOpen && <WxImageViewer onClose={onClose} urls={[srcLarge]} />}
    </Container>
  );
});
