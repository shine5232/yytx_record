import axios from '@/axios/index';

export function getLoginApi (data) {
  return axios.post('/record/login',  data)//返回的时promies对象，所以直接return出去就好了
}
