<template>
  <div id="place">
    <div class="row">
      <h2 class="title">
        <span>{{config.titlezh}}</span>
        <span>{{config.titlen}}</span>
      </h2>
      <p>{{config.intro}}</p>
    </div>
    <activity-show
      :title = true
      :lists = lists>
    </activity-show>
  </div>
</template>

<script>
import ActivityShow from "./ActivityShow";
// import Map from "./Map";
export default {
  name: "PlaceInfo",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      config: {
        titlezh: "场地介绍",
        titlen: "PLACE INTRO",
        intro:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctl sint labore porro vero sit eos praesentium! Deleniti.intro"
      }
    };
  },
  props: ['lists'],
  components: {
    ActivityShow,
    // Map
  }
};
</script>

<style scoped>
#place{
  width: 80%;
  margin: 0 auto;
}
.title {
  margin: 40px auto 25px;
}
.title span {
  display: block;
  text-align: center;
  margin-bottom: 15px;
  color: #006400;
}
p {
  line-height: 26px;
  font-size: 18px;
  text-align: center;
}
@media (max-width: 768px) {
  .title {
    margin: 20px auto 20px;
    font-size: 18px;
  }
  .title span {
    margin-bottom: 5px;
  }
  #place p {
    font-size: 12px;
    line-height: 18px;
    text-indent: 2em;
  }
}
</style>