import React, { useState, useEffect, useCallback } from "react";

import { Flex } from "antd-mobile";
import WxImageViewer from "react-wx-images-viewer";
import services from "~/services";
import Container from "./styles";

export default function LoadImg({
  title,
  fssidSmall,
  fssid,
  src,
  srcLarge,
  setUrl,
  setLargeUrl,
  preview = true
}) {
  console.log("srcLarge", srcLarge);
  const [isOpen, setOpen] = useState(false);

  // 下载图片
  const filedownload = useCallback(
    async (id, callbackFun, nextFun, preloader) => {
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
        callbackFun && callbackFun(buffer); // eslint-disable-line
        nextFun && nextFun(); // eslint-disable-line
      } catch (e) {
        console.log("filedownload报错", e);
      }
    },
    []
  );

  // 初始化小图
  useEffect(() => {
    if (!src && fssidSmall) {
      filedownload(fssidSmall, setUrl);
    }
  }, [src, fssidSmall, setUrl]);

  // 打开图片预览
  const onOpen = useCallback(() => {
    console.log("onOpen", preview, isOpen);
    if (!src) {
      return;
    }
    if (srcLarge) {
      setOpen(true);
      return;
    }
    filedownload(
      fssid,
      setLargeUrl,
      () => {
        if (preview) {
          setOpen(true);
        }
      },
      true
    );
  }, [preview, fssid, setLargeUrl, srcLarge, src]);

  // 关闭图片预览
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <Container>
      <div className="picker-img-box" onClick={onOpen}>
        {src ? (
          <img alt="" className="picker-img" src={src} />
        ) : (
          <Flex justify="center" className="picker-empty">
            暂无照片
          </Flex>
        )}
      </div>
      <p className="title">{title}</p>
      {isOpen && <WxImageViewer onClose={onClose} urls={[srcLarge]} />}
    </Container>
  );
}
