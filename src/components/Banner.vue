<template>
    <div class="img-responsive center-block banner-img row">
		<div class="content">
			<h1>2018西安</h1>
			<h1>Web前端交流大会</h1>
			<h3>Learn to Code and ...</h3>
			<h4>Lorem ipsum dolor sit amet consectetur  quisquam sequi illum eos necessitatibus, expedita facere tenetur quod fugiat nobis. Aperiam, accusamus magni.</h4>
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
.content{
	background-color: #c54572;
	color: #fff;
	min-height: 300px;
	padding: 30px 0;
	text-align: center;
}
.content h1{
	font-size: 42px;
	margin-top: 25px;
}
.content h2{
	font-size: 30px;
}

@media screen and( max-width:  768px){
	.content{
		padding: 0 2em;
	}
}
</style>