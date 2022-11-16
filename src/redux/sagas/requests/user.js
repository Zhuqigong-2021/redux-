import axios from 'axios';

export function requestGetUser() {
  return axios.request({
    method: 'get',
    // url: 'https://my-json-server.typicode.com/Zhuqigong-2021/demo/users',
    url: 'http://localhost:8000/user',
  });
}
