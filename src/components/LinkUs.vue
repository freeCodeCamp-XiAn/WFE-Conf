<template>
  <div id="link">
    <div class="row">
        <h2 class="title">
          <span>{{config.titlezh}}</span>
          <span>{{config.titlen}}</span>
        </h2>
    </div>
    <div class="row">
      <div class="qrcode">
        <strong> FCC XI`AN</strong>
        <img :src="config.path" alt="FCC">
        <p>Lorem ipsum dolor sit amet cong elitelit neque et iu</p>
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
  width: 100%;
  margin:0 auto;
  text-align: center;
}
.qrcode strong {
  
  display: block;
  font-size: 18px;
  margin-bottom: 8px;
}
.qrcode img {
  display: block;
  width: 250px;
  margin: 0 auto 8px;
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
  .qrcode strong{
    font-size: 16px;
  }
}
</style>