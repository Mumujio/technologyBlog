export function getNowDate() {
  const myDate = new Date();
  const year = myDate.getFullYear(); //获取当前年
  const mon = myDate.getMonth() + 1; //获取当前月
  const date = myDate.getDate(); //获取当前日
  const hours = myDate.getHours(); //获取当前小时
  const minutes = myDate.getMinutes(); //获取当前分钟
  const seconds = myDate.getSeconds(); //获取当前秒
  const now =
    year + "-" + mon + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
  return now;
}

export function getTimestamp(){
    return Date.now()
}
