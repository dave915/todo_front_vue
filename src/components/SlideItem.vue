<template>
  <router-link tag="li" v-if="router && (router.name || router.path)" :to="router">
    <a href="javascript:void(0)">
      <i :class="icon"></i> <span>{{ name }}</span>
      <span class="pull-right-container" v-show="badge">
        <small class="label pull-right" :class="[badge.type==='String'?'bg-green':'label-primary']">{{ badge.data }}</small>
      </span>
    </a>
  </router-link>
  <li :class="getType" v-else>
    {{ isHeader ? name : '' }}
    <a href="javascript:void(0)" v-if="!isHeader">
      <i :class="icon"></i> <span>{{ name }}</span>
      <span class="pull-right-container">
        <i v-if="items.length > 0" class="fa fa-angle-left pull-right"></i>
        <i v-if="name === 'Group'" class="fa fa-plus-circle pull-right btn-icon" style="margin-right: 10px;" @click.stop="showAddItemModal"></i>
      </span>
    </a>
    <ul class="treeview-menu" v-if="items.length > 0">
      <router-link tag="li" v-for="(item,index) in items" :data="item" :key="index" :to="item.router"
                   v-if="item.router && (item.router.name || item.router.path)">
        <a>
          <i :class="item.icon"> {{ subMenuFormater(item.name) }}</i>
          <span class="pull-right-container" v-if="name === 'Group'">
            <i class="fa fa-trash pull-right btn-icon" @click.stop="groupDelete(item)"></i>
            <i class="fa fa-users pull-right btn-icon" @click.stop="groupInfoModal(item.groupInfo)"></i>
          </span>
        </a>
      </router-link>
      <li v-else>
        <a>
          <i :class="item.icon"> {{ subMenuFormater(item.name) }}</i>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
  import constants from "../store/constants";

  export default {
    name: 'SlideItem',
    props: {
      type: {
        type: String,
        default: 'item'
      },
      isHeader: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
      },
      name: {
        type: String
      },
      badge: {
        type: Object,
        default () {
          return {}
        }
      },
      items: {
        type: Array,
        default () {
          return []
        }
      },
      router: {
        type: Object,
        default () {
          return {
            path: '',
            name: ''
          }
        }
      },
      link: {
        type: String,
        default: ''
      }
    },
    created () {

    },
    computed: {
      getType () {
        if (this.isHeader) {
          return 'header'
        }
        return this.type === 'item' ? '' : 'treeview'
      }
    },
    methods: {
      showAddItemModal() {
        const modalInfo = {
          isShow: true,
          title: '그룹 추가',
          placeholder: '그룹명',
          modalName: 'addModal',
          onConfirm: this.addGroup
        };
        this.$store.dispatch(constants.SHOW_MODAL, modalInfo);
      },
      addGroup(name) {
        this.$store.dispatch(constants.GROUP_ADD, {name})
          .then(() => this.$store.dispatch(constants.GROUP_LIST));
        this.$store.dispatch(constants.INIT_MODAL);
      },
      subMenuFormater(name) {
        if(name.length < 10)
          return name;
        else
          return name.substring(0, 10).concat('...');
      },
      groupInfoModal(groupInfo) {
        const modalInfo = {
          isShow: true,
          title: '그룹 유저 정보',
          placeholder: '유저 이메일 또는 아이디',
          modalName: 'groupInfoModal',
          data: {
            groupIdx: groupInfo.idx,
          }
        };
        this.$store.dispatch(constants.SHOW_MODAL, modalInfo);
      },
      groupDelete(group) {
        if(confirm(`"${group.name}" 그룹을 정말 떠니시겠습니까?`))
          this.$store.dispatch(constants.GROUP_DELETE, group.groupInfo.idx)
            .then(() => this.$store.dispatch(constants.GROUP_LIST));
      }
    }
  }
</script>

<style scoped>
  .btn-icon {
    color: #8aa4af;
    margin-right: 5px;
  }
  .btn-icon:hover {
    color: #ffffff;
    margin-right: 5px;
  }
  .btn-icon:active {
    color: #ffffff;
    margin-right: 5px;
  }
</style>
