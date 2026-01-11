import axios from "axios"

const apiInstance = axios.create({
    baseURL:'https://newsapi.org/v2',
    timeout:5000,

})

export default apiInstance