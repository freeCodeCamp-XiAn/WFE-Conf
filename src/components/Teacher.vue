<template>
  <div id="speaker">
    <div class="row">
        <h2 class="title">
        <span>{{config.titlezh}}</span>
        <span>{{config.titlen}}</span>
      </h2>
    </div>
    <div class="row">
      <div v-for="list in lists" :key="list.id" class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div class="teacher">
          <div class="teacher-img" :style="{backgroundImage: 'url(' + list.path + ')'}"></div>
          <h2 class="name">{{list.name}}</h2>
          <p>{{list.intro}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Teacher",
    data() {
      return {
      }
    },
    props: ["lists","config"]
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #speaker{
    width: 80%;
    margin: 0 auto;
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

  .teacher {
    text-align: center;
  }

  .teacher .teacher-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid 2px #ddd;
    box-shadow: 0px 5px 15px #aaa;
    margin: auto;
    background-position: center;
    background-size: cover;
  }
  .teacher .name{
    font-size: 22px;
  }
  .teacher p {
    text-align: left;
    font-size: 14px;
    line-height: 24px;
  }
  @media (max-width: 768px){
    .title {
        margin: 20px auto 20px;
        font-size: 18px;
    }
    .title span {
        margin-bottom: 5px;
    }
    .teacher p{
      font-size: 12px;
      line-height:22px;
    }
    .teacher .teacher-im{
      width: 80px;
      height: 80px;
    }
    .teacher .name {
      font-size: 16px;
    }
  }
</style>