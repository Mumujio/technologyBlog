import axios from "axios"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const require = axios.create({
    // baseURL: 'http://119.23.189.220:3008/api/',
    baseURL: 'http://127.0.0.1:3008/manager/',
    timeout: 0,
    // headers: {
    //     'Content-Type': 'application/json; charset=utf-8'
    // }
})


export default require

