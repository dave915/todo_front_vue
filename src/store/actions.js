import constants from './constants'
export default {
  [constants.SIDEBAR_TOGGLE]: (store, payload) => {
    store.commit(constants.SIDEBAR_TOGGLE, payload);
  }
}
