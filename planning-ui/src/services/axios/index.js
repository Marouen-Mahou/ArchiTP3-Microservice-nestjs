import axios from 'axios'

const apiAxios = axios.create({
  baseURL: '',
  'Content-Type': 'application/json',
})

apiAxios.interceptors.request.use((request) => {
  return request
}, error => {
  return Promise.reject(error)
})


export default apiAxios