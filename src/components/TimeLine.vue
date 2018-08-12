<template>
  <div id="time">
    <div class="row">
      <h2 class="title">
        <span>{{config.titlezh}}</span>
        <span>{{config.titlen}}</span>
      </h2>
      <div class="col-xs-12 time-line"  :class="{'topbor': list.id == 1}" v-for="list in lists" :key="list.id">
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
  props:['lists','config']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #time{
    margin: 0 auto;
    width: 80%;
  }
  #time>div{
    padding: 0 15%;
  }
  .title {
    margin: 40px auto 25px;
  }
  span{
    display: inline-block;
  }
  .title span {
    display: block;
    text-align: center;
    margin-bottom: 15px;
    color: #006400;
  }
  .time-line{
    margin: 0 auto;
    padding: 0;
  }
  .first-line{
    padding: 30px 0 10px 30px;
    font-size: 18px;

  }
  .first-line>span:nth-child(1){
    width: 50px;
  }
  .second-line{
    border-bottom: 1px solid #665;
    padding: 10px 0 15px 78px;
    font-size: 16px;
    line-height: 22px;
  }
  .blue{
    color: blue;
  }
  .topbor{
    border-top: 1px solid #665;
  }
   @media (max-width: 768px){
    .title {
        margin: 20px auto 20px;
        font-size: 18px;
    }
    .title span {
        margin-bottom: 5px;
    }
    #time>div{
      padding: 0 5px;
    }
    .first-line{
      font-size: 14px;
      line-height: 18px;
    }
    .second-line{
      font-size: 12px;
    }
  }
</style>