import constants from "./constants";

export default {
  [constants.SIDEBAR_TOGGLE]: (state, payload) => {
    if(payload === undefined)
      state.sidebarOpen = !state.sidebarOpen;
    else
      state.sidebarOpen = payload;
  }
}
