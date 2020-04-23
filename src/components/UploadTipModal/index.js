import React, { useCallback } from "react";

import { Flex, Modal } from "antd-mobile";
import PiackerBox from "./styles";

export default function UploadTipModal({
  visible,
  tipType,
  onCancel,
  openUpload
}) {
  console.log("UploadTipModal", visible);

  const open = useCallback(() => {
    console.log("open");
    onCancel && onCancel(); // eslint-disable-line
    openUpload && openUpload(); // eslint-disable-line
  }, [openUpload]);

  // 关闭弹窗

  if (!visible) {
    return null;
  }
  return (
    <Modal popup visible onClose={onCancel} animationType="slide-up">
      <PiackerBox>
        <i className="tip-close" onClick={onCancel} />
        <p className="tip-title">上传小技巧</p>
        {tipType === "license" && (
          <>
            <p className="tip-info">请上传原件，或加盖公章的复印件</p>
            {/* <p className="tip-info">
                为了方便您上传，建议提前将营业执照和法人身份证照片使用&ldquo;手机相机&quot;拍摄后，再进行上传
              </p> */}
            <Flex className="tip-img">
              <div>
                <i className="tip-img-1" />
                <p>信息要完整</p>
              </div>
              <div>
                <i className="tip-img-2" />
                <p>照片要清晰</p>
              </div>
              <div>
                <i className="tip-img-3" />
                <p>照片不能曝光</p>
              </div>
            </Flex>
          </>
        )}
        {tipType === "idCard" && (
          <Flex className="tip-img">
            <div>
              <i className="tip-img-4" />
              <p>信息完整的原件</p>
            </div>
            <div>
              <i className="tip-img-5" />
              <p>照片要清晰</p>
            </div>
            <div>
              <i className="tip-img-6" />
              <p>照片不能曝光</p>
            </div>
          </Flex>
        )}
        <Flex justify="center" className="tip-btn" onClick={open}>
          开始上传
        </Flex>
      </PiackerBox>
    </Modal>
  );
}
