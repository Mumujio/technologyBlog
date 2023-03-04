import axios from "axios"

const require = axios.create({
    baseURL: 'http://119.23.189.220:3008/api/',
    timeout: 0,
   
})


export default require

