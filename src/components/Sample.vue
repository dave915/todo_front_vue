<template>
  <div>
    <v-calendar></v-calendar>
  </div>
</template>

<script>

  export default {
    name: "Sample",
    components: {
    },
    data() {
      return {
        attrs: [
          {
            key: 'today',
            highlight: {
              backgroundColor: '#ff8080',
              // Other properties are available too, like `height` & `borderRadius`
            },
            dates: new Date(2018, 0, 1)
          }
        ],
      };
    },
  }
</script>

<style scoped>

</style>
