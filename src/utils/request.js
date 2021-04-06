
import axios from 'axios'
import Qs from 'qs'
import {message,Modal} from 'ant-design-vue'


axios.defaults.baseURL = '/api';

//全局响应拦截器，登陆后对后台数据拦截处理
axios.interceptors.response.use(response => {

  if (response.data.hasOwnProperty('code') && response.data.hasOwnProperty('msg')) {
    let { code, msg } = response.data;
    let username = response.data.data.username
    if (code === 0) {
      Modal.success({
        title:'登陆信息',
        content:`登陆您${username}成功恭喜`,
      });
    } else {
     message.error(msg);
    }
  }
  return response;
});

const req = {
  post(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, Qs.stringify(params)).then(response => {
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default req;