import axios from "axios"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const require = axios.create({
    baseURL: 'http://119.23.189.220:3008/manager/',
    // baseURL: 'http://127.0.0.1:3008/manager/',
    // baseURL:import.meta.env.BASE_URL,
    timeout: 5000,
    // headers: {
    //     'Content-Type': 'application/json; charset=utf-8'
    // }
   
})


// 添加响应拦截器
require.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
   
    return  response.data;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default require

