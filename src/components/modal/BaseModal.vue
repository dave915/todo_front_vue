<template>
  <transition name="modal" >
    <div class="modal-mask" id="modal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <add-modal v-if="modalInfo.modalName === 'addModal'" :modalInfo="modalInfo"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import constants from '@/store/constants'
  import AddModal from "./AddModal";
  export default {
    name: "BaseModal",
    components: {AddModal},
    props: ['modalInfo'],
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {
    },

  }
</script>

<style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 600px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
