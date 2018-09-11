import constants from './constants'
export default {
  [constants.SIDEBAR_TOGGLE]: (store, payload) => {
    store.commit(constants.SIDEBAR_TOGGLE, payload);
  },
  [constants.ADD_TODO]: (store, payload) => {
    store.commit(constants.ADD_TODO, payload);
  },
  [constants.DELETE_TODO]: (store, payload) => {
    store.commit(constants.DELETE_TODO, payload);
  },
  [constants.DRAG_ITEM]: (store, payload) => {
    store.commit(constants.DRAG_ITEM, payload);
  },
  [constants.SHOW_MODAL]: (store, payload) => {
    store.commit(constants.SHOW_MODAL, payload);
  }
}
