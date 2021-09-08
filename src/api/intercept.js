import Axios from 'axios'
import { Indicator } from 'mint-ui'
export const baseAxios = Axios.create({
  baseURL: 'http://www.qmj.fun:8889',
  withCredentials: true
})
// 添加请求拦截器
baseAxios.interceptors.request.use(function (config) {
  Indicator.open()
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
baseAxios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  Indicator.close()
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
