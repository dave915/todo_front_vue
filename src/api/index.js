import axios from 'axios';
import router from '../router';

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  if(isAuthError(error.response.status))
    router.push({path: 'login'});

  return Promise.reject(error);
});

const isAuthError = (status) => {
  return status === 401 || status === 403
};

export default {
  auth: {
    signIn(payload) {
      return axios.post('/api/signin', payload);
    },
    login(payload) {
      return axios.post('/api/login', payload);
    },
    logout() {
      return axios.get('/api/logout');
    },
    userInfo() {
      return axios.get('/api/userInfo');
    },
  },
  group: {
    addGroup(payload) {
      return axios.post('/api/group', payload);
    },
    getGroupList(payload) {
      return axios.get('/api/group');
    }
  },
  item: {
    getItemList(payload) {
      return axios.get(`/api/item/group/${payload}`);
    },
    addItem(payload) {
      return axios.post('/api/item', payload);
    },
    deleteItem(payload) {
      return axios.delete(`/api/item/${payload}`);
    },
  }
}
