import api from '../api';
import constants from './constants'
import router from '../router'

export default {
  [constants.SIDEBAR_TOGGLE]: (store, payload) => {
    store.commit(constants.SIDEBAR_TOGGLE, payload);
  },
  [constants.DRAG_ITEM]: (store, payload) => {
    store.commit(constants.DRAG_ITEM, payload);
  },
  [constants.SHOW_MODAL]: (store, payload) => {
    store.commit(constants.SHOW_MODAL, payload);
  },
  [constants.INIT_MODAL]: (store) => {
    store.commit(constants.INIT_MODAL);
  },
  [constants.AUTH_SIGNIN]: (state, payload) => {
    return api.auth.signIn(payload)
      .then((res) => {
        alert("회원가입 완료");
        router.push({path: 'login'});
      }).catch(() => {
        alert("회원가입 실패");
        }
      )
  },
  [constants.AUTH_LOGIN]: (store, payload) => {
    return api.auth.login(payload)
      .then((res) => {
        store.commit(constants.AUTH_LOGIN, res.data);
        router.push({path: 'hello'});
      });
  },
  [constants.AUTH_LOGOUT]: (store, payload) => {
    return api.auth.logout(payload)
      .then((res) => {
        store.commit(constants.AUTH_LOGOUT, res);
        router.push({path: 'login'});
      });
  },
  [constants.AUTH_USERINFO]: (store, payload) => {
    return api.auth.userInfo(payload)
      .then((res) => {
        store.commit(constants.AUTH_USERINFO, res.data);
      });
  },
  [constants.GROUP_ADD]: (store, payload) => {
    return api.group.addGroup(payload)
      .then((res) => {
      });
  },
  [constants.GROUP_LIST]: (store, payload) => {
    return api.group.getGroupList(payload)
      .then((res) => {
        store.commit(constants.GROUP_LIST, res.data);
      });
  },
  [constants.ITEM_LIST]: (store, payload) => {
    return api.item.getItemList(payload)
      .then((res) => {
        store.commit(constants.ITEM_LIST, res.data);
      });
  },
  [constants.ITEM_ADD]: (store, payload) => {
    return api.item.addItem(payload)
      .then((res) => {
      });
  },
  [constants.ITEM_DELETE]: (store, payload) => {
    return api.item.deleteItem(payload)
      .then((res) => {
      });
  },
}
