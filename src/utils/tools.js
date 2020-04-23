import { isMobile } from "util-helpers";

/**
 * 去除空格
 */
export function removeSpace(value) {
  // eslint-disable-next-line
  return value.toString().replace(/\s/g, "");
}

/**
 * 验证手机号格式
 */
export default function formatMobile(value) {
  return isMobile(
    value
      .toString()
      .replace(/\s/g, "")
      .slice(0, 11)
  );
}

/**
 * 社会统一信用代码添加空格
 */
export function addEmptyLicense(value) {
  return value.replace(/(....)(?=.)/g, "$1 ");
}

/**
 * 手机号添加空格
 */
export function addEmptyPhone(value) {
  let ctrlValue = value.replace(/\D/g, "").substring(0, 11);
  const valueLen = ctrlValue.length;
  if (valueLen > 3 && valueLen < 8) {
    ctrlValue = `${ctrlValue.substr(0, 3)} ${ctrlValue.substr(3)}`;
  } else if (valueLen >= 8) {
    ctrlValue = `${ctrlValue.substr(0, 3)} ${ctrlValue.substr(
      3,
      4
    )} ${ctrlValue.substr(7)}`;
  }
  return ctrlValue;
}

/**
 * 验证网址
 */
export function formatWebSite(value) {
  // eslint-disable-next-line
  return /(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/.test(value); // eslint-disable-line
}

/**
 * 为空占位符
 */
export function prefix(value, str = "") {
  return value ? value + str : "-";
}

/**
 * 日期为空
 */
export function formatDate(value) {
  if (!value) {
    return;
  }
  return new Date(value); // eslint-disable-line
}

/**
 * 手机号隐私
 */
export function privacyMobile(value) {
  if (!value) {
    return "-";
  }
  return `${value.toString().slice(0, 3)}****${value.toString().slice(-4)}`;
}
