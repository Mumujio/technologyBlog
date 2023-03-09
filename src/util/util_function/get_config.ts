export function get_login() {
    let token = localStorage.getItem("login_token")
      ? localStorage.getItem("login_token")
      : "";
  
    return token === "linzhuoshizhendeshuai";
  }