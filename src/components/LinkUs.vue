<template>
  <div id="link">
    <div class="row">
        <h2 class="title">
          <span>{{config.titlezh}}</span>
          <span>{{config.titlen}}</span>
        </h2>
    </div>
    <div class="row qrcode">
      <div class="col-xs-12 col-md-6 qrcode1">
        <strong> FCC XI`AN</strong>
        <img :src="config.path1" alt="FCC">
        <p>Lorem ipsum dolor sit amet cong elitelit neque et iu</p>
      </div>
      <div class="col-xs-12 col-md-6 qrcode2">
        <strong> FCC XI`AN</strong>
        <img :src="config.path2" alt="FCCdaqun">
        <p>Lorem ipsum dolor sit amet consecteelit neque et iu</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkUs",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  props: ['config']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#link{
  padding: 15px 0 25px 0;
}
.title {
  margin: 40px auto 20px;
}

.title span {
  display: block;
  text-align: center;
  margin-bottom: 15px;
  color: #006400;
}
.qrcode{
  margin: auto;
  width: 800px;
  overflow: hidden;
  text-align: center;
}
.qrcode strong {
  
  display: block;
  font-size: 18px;
}
.qrcode img {
  display: block;
  width: 250px;
  margin: auto;
}


@media (max-width: 768px) {
  .title {
    margin: 20px auto 20px;
    font-size: 18px;
  }
  .title span {
    margin-bottom: 5px;
  }
  .qrcode{
    width: auto;
  }
  .qrcode div{
    padding-left: 0;
    padding-right: 0;
  }
  .qrcode2{
    padding-top: 15px;
  }
  .qrcode strong{
    font-size: 16px;
  }
  /* .qrcode img{
    margin: 0;
    text-align: center;
  } */
}
</style>