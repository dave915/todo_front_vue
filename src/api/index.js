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
  user: {
    searchUsers(payload) {
      return axios.get('/api/users', {params: {keyword: payload}})
    },
    saveUser(payload) {
      return axios.put('/api/users', payload)
    },
    sendChangePasswordMail(payload) {
      return axios.get('/api/users/password/mail', {params: {email: payload}})
    },
    getChnagePasswordUser(payload) {
      return axios.get(`/api/users/password/${payload}`);
    }
  },
  group: {
    addGroup(payload) {
      return axios.post('/api/group', payload);
    },
    updateGroup(payload) {
      return axios.put('/api/group', payload);
    },
    getGroupList(payload) {
      return axios.get('/api/group');
    },
    deleteGroup(payload) {
      return axios.delete(`/api/group/leave/${payload}`);
    },
    getGroupJoinUserList(payload) {
      return axios.get(`/api/group/${payload}/users`);
    },
    inviteUser(payload) {
      return axios.post(`/api/group/invite/${payload.groupIdx}/${payload.userIdx}`);
    },
    checkInvite(payload) {
      return axios.get(`/api/group/invite/${payload}`);
    },
    passOwner(payload) {
      return axios.put(`/api/group/pass/${payload.groupIdx}/${payload.userIdx}`);
    },
    banishUser(payload) {
      return axios.delete(`/api/group/banish/${payload.groupIdx}/${payload.userIdx}`);
    }
  },
  item: {
    getItemList(payload) {
      return axios.get('/api/item', {params: payload});
    },
    addItem(payload) {
      return axios.post('/api/item', payload);
    },
    saveItem(payload) {
      return axios.put('/api/item', payload);
    },
    addRepeatItem(payload) {
      return axios.post('/api/repeatItem', payload);
    },
    deleteItem(payload) {
      return axios.delete(`/api/item/${payload}`);
    },
  }
}
