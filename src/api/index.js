import { baseAxios } from './intercept.js'
/* 验证码获取 */
export function getCode (phone) {
  return baseAxios({
    method: 'POST',
    url: '/captcha/sent',
    data: {
      phone
    }
  }).catch((error) => {
    console.log(error)
  })
}
export function Login (phone, password) {
  return baseAxios({
    method: 'POST',
    url: '/captcha/sent',
    data: {
      phone,
      password
    }
  }).catch((error) => {
    console.log(error)
  })
}
// 请求banner
export function banner () {
  return baseAxios({
    method: 'GET',
    url: '/banner'
  }).catch((error) => {
    console.log(error)
  })
}
