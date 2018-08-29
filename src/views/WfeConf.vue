<template>
  <div style="margin-bottom: 30px;">
    <div id="banner" class="row">
      <img class="img-responsive center-block banner-img  col-xs-12" src="../../static/banner.png" alt="">
    </div>
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
    <title :config= timeAndAdd></title>
    <div v-if= "showAs">
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
    <!-- <friends
      :config=config.friends.config
      :lists = config.friends.lists>
    </friends> -->
    <button class="btn" @click="goSignup">我要报名</button>
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
import Friends from '@/components/Friends'
import Title from '@/components/Title'
export default {
  name: "WfeConf",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      config: config,
      showAs: false,
      timeAndAdd: {
        titlen:'',
        titlezh: '时间地点'
      }
    };
  },
  components: {
    Banner,
    ConfInfo,
    Teacher,
    TimeLine,
    ActivityShow,
    LinkUs,
    PlaceInfo,
    Friends,
    Title
  },
  mounted() {
    this.ready();
  },
  methods: {
    ready: function() {
      var map = new BMap.Map("map");
      var point = new BMap.Point(108.940436,34.236623);
      map.centerAndZoom(point, 14);
      // map.addControl(new BMap.MapTypeControl());
      map.enableScrollWheelZoom(true);
      map.enableDoubleClickZoom(true);
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
      var opts = {
        width: 200,
        height: 100,
        title: "活动信息",
        enableMessage: true,
        offset: {
          width: 0,
          height: -15
        }
      };
      var infoWindow = new BMap.InfoWindow(
        "地址：西安市碑林区南二环西段69号，西安创新设计中心大楼三楼 </br>时间：2018年9月16日 9:30~17:30",
        opts
      );
      map.centerAndZoom(point, 15);
      map.openInfoWindow(infoWindow, point);
    },
    goSignup: function () {
      window.open('http://www.baidu.com');
    }
  }
};
</script>


<style scoped>
#map {
  /* width: 600px; */
  width: 65%;
  height: 350px;
  padding:0 10%;
  margin: 0 auto;
}
#banner {
  width: 80%;
  margin: 0 auto;
}
.banner-img{
  padding: 0;
}
@media (max-width: 768px) {
  #map {
    /* width: 350px; */
    width: 80%;
    height: 200px;
  }
  #banner {
    width: 100%;
    margin: 0 auto;
  }
}
.btn{
  display: block;
  width:80%;
  margin: 30px auto 50px;
  background: #409eff;
  text-align: center;
  color: #fff;
}
</style>
