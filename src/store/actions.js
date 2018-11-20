import api from '../api';
import constants from './constants'
import router from '../router'
import moment from 'moment'

export default {
  [constants.SIDEBAR_TOGGLE]: (store, payload) => {
    store.commit(constants.SIDEBAR_TOGGLE, payload);
  },
  [constants.ITEM_SIDEBAR_OPEN]: (store, payload) => {
    store.commit(constants.ITEM_SIDEBAR_OPEN, payload);
  },
  [constants.ITEM_SIDEBAR_CLOSE]: (store, payload) => {
    store.commit(constants.ITEM_SIDEBAR_CLOSE, payload);
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
        location.href = '/';
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
  [constants.GROUP_UPDATE]: (store, payload) => {
    return api.group.updateGroup(payload)
      .then((res) => {
        alert('그룹명이 수정되었습니다.');
      });
  },
  [constants.GROUP_DELETE]: (store, payload) => {
    return api.group.deleteGroup(payload)
      .then((res) => {
      });
  },
  [constants.GROUP_LIST]: (store, payload) => {
    return api.group.getGroupList(payload)
      .then((res) => {
        store.commit(constants.GROUP_LIST, res.data);
      });
  },
  [constants.GROUP_USER_LIST]: (store, payload) => {
    return api.group.getGroupJoinUserList(payload)
      .then((res) => {
        const data = res.data.map(user => {
          const info = {...user[0], type: user[1]};
          return info;
        });
        store.commit(constants.GROUP_USER_LIST, data);
      });
  },
  [constants.GROUP_USER_LIST_RESET]: (store, payload) => {
    store.commit(constants.GROUP_USER_LIST_RESET);
  },
  [constants.GROUP_INVITE]: (store, payload) => {
    return api.group.inviteUser(payload)
      .then((res) => {
        console.log(res.data)
        alert('초대 완료되었습니다.');
      })
      .catch((e) => alert('이미 그룹에 가입된 유저입니다.'));
  },
  [constants.GROUP_INVITE_CHECK]: (store, payload) => {
    return api.group.checkInvite(payload.inviteCode)
      .then((res) => {
        console.log(res)
        payload.callBack(res.data.result);
      })
  },
  [constants.GROUP_PASS]: (store, payload) => {
    return api.group.passOwner(payload)
      .then((res) => {
        alert('소유권 이전이 완료되었습니다.');
      });
  },
  [constants.GROUP_BANISH]: (store, payload) => {
    return api.group.banishUser(payload)
      .then((res) => {
        alert('그룹 참여자를 강퇴 시켰습니다.');
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
  [constants.ITEM_ADD_REPEAT]: (store, payload) => {
    return api.item.addRepeatItem(payload)
      .then((res) => {
      });
  },
  [constants.ITEM_SAVE]: (store, payload) => {
    payload.itemDatetime = moment(payload.itemDatetime).format('YYYY.MM.DD hh:mm:00');
    payload.createAt = moment(payload.createAt).format('YYYY.MM.DD hh:mm:ss');

    return api.item.saveItem(payload)
      .then((res) => {
      });
  },
  [constants.ITEM_DELETE]: (store, payload) => {
    return api.item.deleteItem(payload)
      .then((res) => {
      });
  },
  [constants.CALENDER_INIT]: (store, payload) => {
    store.commit(constants.CALENDER_INIT, payload);
  },
  [constants.SEARCH_OPTION_SET]: (store, payload) => {
    store.commit(constants.SEARCH_OPTION_SET, payload);
  },
  [constants.SEARCH_OPTION_INIT]: (store, payload) => {
    store.commit(constants.SEARCH_OPTION_INIT, payload);
  }
}
