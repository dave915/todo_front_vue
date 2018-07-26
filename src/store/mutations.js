import constants from "./constants";

export default {
  [constants.SIDEBAR_TOGGLE]: (state, payload) => {
    if(payload === undefined)
      state.sidebarOpen = !state.sidebarOpen;
    else
      state.sidebarOpen = payload;
  },
  [constants.ADD_TODO]: (state, payload) => {
    state.itemList.push(payload)
  },
  [constants.DELETE_TODO]: (state, payload) => {
    state.itemList.splice(payload, 1)
  },
  [constants.DRAG_ITEM]: (state, payload) => {
    state.itemList = payload
  }
}
