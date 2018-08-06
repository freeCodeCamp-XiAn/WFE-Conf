<template>
    <div class="img-responsive center-block banner-img row">
		<div class="content">
			<h1>2018西安</h1>
			<h1>Web前端交流大会</h1>
			<h3>Learn to Code and ...</h3>
			<h4></h4>
		</div>
    </div>
</template>

<script>
export default {
	name: "Banner",
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner-img{
  background: url() repeat ;
}
@media screen and( max-width:  768px){
	.content{
		padding: 0 2em;
	}
}
@media screen and( min-width:  768px){
	.content{
		padding: 0 2em;
	}
}
</style>