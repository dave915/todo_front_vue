export default {
  auth: {
    idx: 0,
    userName: '',
    email: ''
  },
  itemSidebarOpen: false,
  sidebarOpen: true,
  itemList: [],
  modalInfo: {
    isShow: false,
    title: '',
    placeholder: '',
    modalName: '',
    modalType: '',
    onConfirm: '',
    data: {}
  },
  defaultGroup: {
    idx: 0,
    title: ''
  },
  selectedDay: {
    start: null,
    end: null
  },
  currentItem: {},
  groupList: [],
  groupJoinUserList: [],
  searchOption: {
    startDate: null,
    endDate: null,
    status: null,
    groupIdx: null,
    keywordType: null,
    keyword: null,
    itemType: null,
  }
}
