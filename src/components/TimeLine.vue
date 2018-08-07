<template>
  <div id="time">
    <div class="row">
      <div class="col-xs-12" v-for="list in lists" :key="list.id">
          <div class="first-line">
            <span>{{list.time}}</span>
            <span>{{list.title}}</span>
          </div>
          <div class="second-line">
            <span>{{list.type}} {{list.info}}</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['lists']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #time{
    width: 80%;
    margin: 0 auto;
  }
</style>