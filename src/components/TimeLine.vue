<template>
  <div id="time">
    <div class="row">
      <h2 class="title">
        <span>{{config.titlezh}}</span>
        <span>{{config.titlen}}</span>
      </h2>
      <div class="col-xs-12 time-line"  :class="{'topbor': list.id == 1}" v-for="list in lists" :key="list.id">
          <!-- <div class="first-line">
            <span>{{list.time}}</span>
            <span :class="{blue: list.isSpeech}">{{list.title}}</span>
          </div>
          <div class="second-line">
            <span>【{{list.type}}】&nbsp;&nbsp;{{{list.title}}}</span>
          </div> -->
          <div class="line">
            <div>时间</div> <div>{{list.time}}</div>
          </div> 
          <div class="line line2">
            <div>主题</div> <div class="topic" :class="{blue: list.isSpeech}">{{list.title}}</div>
          </div>
          <div class="line">
            <div>{{list.type}}</div> <div class="topic">{{list.info}}</div>
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
  .topic{
    /* overflow:hidden; */
    /* text-overflow:ellipsis; */
    white-space:normal;
  }
  .line{
    display: flex;
    padding-bottom: 10px;
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
    padding: 15px 5% ;
    border-bottom: 1px solid #665;
  }
  .first-line{
    padding: 30px 0 10px 30px;
    font-size: 18px;

  }
  .line>div:nth-child(1){
    width: 10%;
    flex-shrink: 0;
  }
  .blue{
    color: blue;
  }
  .topbor{
    border-top: 1px solid #665;
  }
   @media (max-width: 768px){
    .time-line{
      padding: 20px 10px ;
    }
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
    .line>div:nth-child(1){
      width: 70px;
      flex-shrink: 0;
  }
  }
</style>