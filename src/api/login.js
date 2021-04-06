import req from '@/utils/request.js'

export const login = (params)=>{
  return req.post('/login',params);
}