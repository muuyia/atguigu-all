import axios from 'axios'

// https://www.bilibili.com/video/BV1UN411x7xe?p=170&vd_source=14551025f000a7403c153e5a0e5f8140

const instance = axios.create({
    baseUrl:'http://localhost:8080/'
})

instance.interceptors.request.use(

    config=>{
        return config
    },

    error=>{
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(

    response=>{
        return response
    },

    error=>{
        return Promise.reject(error)
    }
)

//默认导出
export default instance 