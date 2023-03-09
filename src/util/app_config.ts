// 全局配置

/* 全局方法 */
// 是否登录
export function get_login() {
  let token = localStorage.getItem("login_token")
    ? localStorage.getItem("login_token")
    : "";

  return token === "linzhuoshizhendeshuai";
}

/*  */
