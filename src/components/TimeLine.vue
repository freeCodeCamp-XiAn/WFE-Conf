<template>
  <div id="time">
    <div class="row">
      <div class="col-xs-12 col-md-8 col-md-offset-2 time-line"  :class="{topbor: list.id === 1}" v-for="list in lists" :key="list.id">
          <div class="first-line">
            <span>{{list.time}}</span>
            <span :class="{blue: list.isSpeech}">{{list.title}}</span>
          </div>
          <div class="second-line">
            <span>【{{list.type}}】&nbsp;&nbsp;{{list.info}}</span>
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
      msg: ''
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
  .time-line{
    margin: 0 auto;
    padding-left: 20px;
  }
  .first-line{
    border-top:0;
  }
  .second-line{
    border-bottom: 1px solid #665;
  }
  .blue{
    color: blue;
  }
  .topbor{
    border-top: 1px solid #665;
  }
</style>