<template>
  <div style="margin-bottom: 30px;">
    <banner></banner>
    <conf-info
      :config = config.confInfo>
    </conf-info>
    <teacher
      :config = config.teacher.config
      :lists = config.teacher.lists>
    </teacher>
    <time-line
      :config = config.timeLine.config
      :lists = config.timeLine.lists>
    </time-line>
    <div v-if="showAs">
      <activity-show
        :title = false
        :lists = config.activityShow>
      </activity-show>
    </div>
    <link-us
      :config = config.linkUs>
    </link-us>
    <place-info
      :lists = config.placeInfo.lists
    >
    </place-info>
    <div class="row" style="margin-top: 30px;">
      <div id="map"  style="margin:  0 auto;"></div>
    </div>
  </div>
</template>


<script>
import config from "../configTxt";
import Banner from "@/components/Banner";
import ConfInfo from "@/components/ConfInfo";
import Teacher from "@/components/Teacher";
import TimeLine from "@/components/TimeLine";
import ActivityShow from "@/components/ActivityShow";
import PlaceInfo from "@/components/PlaceInfo";
import LinkUs from "@/components/LinkUs";
// import Map from '@/components/Map'
export default {
  name: "WfeConf",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      config: config,
      showAs: true
    };
  },
  components: {
    Banner,
    ConfInfo,
    Teacher,
    TimeLine,
    ActivityShow,
    LinkUs,
    PlaceInfo
    // Map
  },
  mounted() {
    this.ready();
  },
  methods: {
    ready: function() {
      var map = new BMap.Map("map");
      var point = new BMap.Point(108.840053, 34.129522);
      map.centerAndZoom(point, 14);
      // map.addControl(new BMap.MapTypeControl());
      map.enableScrollWheelZoom(true);
      map.enableDoubleClickZoom(true);
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
      var opts = {
        width: 200,
        height: 100,
        title: "海底捞王府井店",
        enableMessage: true,
        offset:{
          width: 0,
          height: -15

        },
        message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
      };
      var infoWindow = new BMap.InfoWindow(
        "地址：北京市东城区王府井大街88号乐天银泰百货八层",
        opts
      );
      map.centerAndZoom(point, 15);
      map.openInfoWindow(infoWindow, point);
    }
  }
};
</script>


<style scoped>
#map {
  /* width: 600px; */
  width: 55%;
  height: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  #map {
    /* width: 350px; */
    width: 70%;
    height: 350px;

  }
}
</style>
