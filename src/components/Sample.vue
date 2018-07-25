<template>
  <div>
    <div>
        <draggable v-model="sampleList" class="todo-list" :options="{handle:'.handle'}">
          <li v-for="(item, index) in sampleList" class="item">
            <!-- drag handle -->
            <span class="handle">
                        <i class="fa fa-ellipsis-v"></i>
                        <i class="fa fa-ellipsis-v"></i>
                      </span>
            <!-- checkbox -->
            <input type="checkbox" v-model="item.status">
            <!-- todo text -->
            <span class="text">{{item.title}}</span>
            <!-- Emphasis label -->
            <small class="label label-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
            <!-- General tools such as edit or delete-->
            <div class="tools">
              <i class="fa fa-edit"></i>
              <i class="fa fa-trash-o" @click="deleteItem(index)"></i>
            </div>
          </li>
        </draggable>
      <button @click="addItem">add item</button>
      {{sampleList}}
    </div>
  </div>
</template>

<script>

  import draggable from 'vuedraggable'
  export default {
    name: "Sample",
    components: {
      draggable
    },
    data() {
      return {
        sampleList: [
          {title: 'Design a nice theme', status: false},
          {title: 'Design a nice the322233me', status: false},
          {title: 'Design a nice the3333333me', status: false},
        ]
      };
    },
    methods: {
      deleteItem(index) {
        this.sampleList.splice(index, 1);
      },
      addItem() {
        this.sampleList.push({title: 'Design a nice theme 1111111'});
      }
    }
  }
</script>

<style scoped>
  .item{
    background: #d2d6de;
    border-left: 2px solid #3c8dbc;
  }
</style>
