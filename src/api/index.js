import axios from 'axios';

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
  }
}
