import i18next from "i18next";

/**
 * 将秒数格式化为"xx小时xx分钟"或"xx分钟xx秒"格式
 * @param seconds 时间戳（单位：秒）
 * @returns 格式化后的字符串
 */
export function formatDuration(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}${i18next.t("time.second")}`;
  }
  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes}${i18next.t("time.minute")}`;
  }

  const hours = Math.floor(minutes / 60);
  return `${hours}${i18next.t("time.hour")}`;
}
