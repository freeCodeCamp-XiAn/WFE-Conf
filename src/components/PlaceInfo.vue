<template>
  <div id="place">
    <div class="row">
      <h2 class="title">
        <span>{{config.titlezh}}</span>
        <span>{{config.titlen}}</span>
      </h2>
      <p style="text-indent: 2em">{{config.intro}}</p>
    </div>
    <div class="row">

    </div>
    <activity-show
      :title = true
      :lists = lists>
    </activity-show>
  </div>
</template>

<script>
import ActivityShow from "./ActivityShow";
export default {
  name: "PlaceInfo",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      config: {
        titlezh: "≥°µÿΩÈ…‹",
        titlen: "PLACE INTRO",
        intro:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctl sint labore porro vero sit eos praesentium! Deleniti.intro"
      }
    };
  },
  props: ['lists'],
  components: {
    ActivityShow
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
  }
}
</style>