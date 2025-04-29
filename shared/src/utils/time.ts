/**
 * 将秒数格式化为“xx小时xx分钟”或“xx分钟xx秒”格式
 * @param seconds 时间戳（单位：秒）
 * @returns 格式化后的字符串
 */
export function formatDuration(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}秒`;
  }
  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes}分钟`;
  }

  const hours = Math.floor(minutes / 60);
  return `${hours}小时`;
}
