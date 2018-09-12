<template>
 <div>
   <div class="modal-header">
     <h4>{{modalInfo.title}}</h4>
   </div>
   <div class="modal-body">
     <slot name="body">
       <input type="text" :placeholder="modalInfo.placeholder" class="form-control" v-model="input">
     </slot>
   </div>
   <div class="modal-footer">
     <slot name="footer">
       <button class="modal-default-button" @click="closeModal()">
         취소
       </button>
       <button class="modal-default-button" @click="modalInfo.onConfirm(input)">
         OK
       </button>
     </slot>
   </div>
 </div>
</template>

<script>
  import constants from '@/store/constants'
  export default {
    name: "AddModal",
    props: ['modalInfo'],
    data() {
      return {
        input: ''
      }
    },
    methods: {
      closeModal() {
        this.$store.dispatch(constants.INIT_MODAL);
      }
    },
    computed: {

    }
  }
</script>

<style>
  .modal-header h4 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 5px 0;
  }

  .modal-default-button {
    float: right;
  }
</style>
