import constants from "./constants";

export default {
  [constants.SIDEBAR_TOGGLE]: (state, payload) => {
    if(payload === undefined)
      state.sidebarOpen = !state.sidebarOpen;
    else
      state.sidebarOpen = payload;
  },
  [constants.ITEM_SIDEBAR_OPEN]: (state, payload) => {
    state.currentItem = payload;
    state.itemSidebarOpen = true;
  },
  [constants.ITEM_SIDEBAR_CLOSE]: (state) => {
    state.currentItem = {};
    state.itemSidebarOpen = false;
  },
  [constants.ADD_TODO]: (state, payload) => {
    state.itemList.push(payload)
  },
  [constants.DELETE_TODO]: (state, payload) => {
    state.itemList.splice(payload, 1)
  },
  [constants.DRAG_ITEM]: (state, payload) => {
    state.itemList = payload
  },
  [constants.SHOW_MODAL]: (state, payload) => {
    state.modalInfo = payload
  },
  [constants.INIT_MODAL]: (state) => {
    state.modalInfo = {
      isShow: false,
      title: '',
      placeholder: '',
      modalName: '',
      onConfirm: ''
    }
  },
  [constants.AUTH_LOGIN]: (state, payload) => {
    state.auth = payload
  },
  [constants.AUTH_LOGOUT]: (state, payload) => {
    state.auth = {
      idx: '',
      userName: '',
      email: ''
    }
  },
  [constants.AUTH_USERINFO]: (state, payload) => {
    state.auth = payload
  },
  [constants.GROUP_LIST]: (state, payload) => {
    state.groupList = payload.filter(g => !g.isDefaultGroup);
    state.defaultGroup = payload.filter(g => g.isDefaultGroup)[0];
  },
  [constants.GROUP_USER_LIST]: (state, payload) => {
    const userList = [];
    userList.push(state.auth);
    state.groupJoinUserList = userList.concat(payload.filter(u => u.idx !== state.auth.idx));
  },
  [constants.GROUP_USER_LIST_RESET]: (state, payload) => {
    state.groupJoinUserList = [];
  },
  [constants.ITEM_LIST]: (state, payload) => {
    state.itemList = payload
  },
}
