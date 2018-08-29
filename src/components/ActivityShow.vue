<template>
  <div id="active">
    <div class="row">
      <h2 class="title" :class="{'hidden': title == true}">
        <span>{{config.titlezh}}</span>
        <span>{{config.titlen}}</span>
      </h2>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6" v-for="list in lists" :key="list.id">
        <img class="img-responsive act" :src="list.path">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityShow",
  data() {
    return {
      config: {
        titlezh: "活动场景",
        titlen: "ACTIVTY SHOW"
      }
    }
  },
  props: ['lists', 'title', ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#active{
  width: 1000px;
  margin: auto;
}
.title {
  margin: 40px auto 20px;
}
.hidden{
  display: none;
}
.title span {
  display: block;
  text-align: center;
  margin-bottom: 15px;
  color: #006400;
}
.act{
  width: 75%;
  margin: 8px auto;
  overflow: hidden
}

@media (max-width: 768px) {
  #active{
    width: 85%;
    margin: auto;
  }
  .title {
    margin: 20px auto 20px;
    font-size: 18px;
  }
  .title span {
    margin-bottom: 5px;
  }
}
</style>