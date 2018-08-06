<template>
  <div class="row">
    <div id="introduce">
      <h2 class="title">
        <span>{{config.titlezn}}</span>
        <span>{{config.titlen}}</span>
      </h2>
      <p style="text-indent: 2em">{{config.intro}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['config']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #introduce{
        min-height: 200px;
        height: auto;
        width: 80%;
        margin: auto;
    }

    .title {
        margin: 40px auto 20px;
    }

    p{
        line-height: 26px;
        font-size: 18px;
    }

    .title span {
        display: block;
        text-align: center;
        margin-bottom: 15px;
        color: #006400;
    }

    @media (max-width: 768px){
        #introduce {
            padding: 0px 0px 20px 0px;
        }
        .title {
            margin: 20px auto 20px;
            font-size: 18px;
        }
        .title span {
            margin-bottom: 5px;
        }
        #introduce p {
            font-size: 12px;
            line-height: 18px;
        }   
    }
</style>