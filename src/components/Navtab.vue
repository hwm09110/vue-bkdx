<template>
	<ul class="nav-tab-wrap">
		<li v-for="(item,index) of navList" :key="index" @click="navClickHandler(index)">
			<span class="icon" :class="item.active?item.icon+'-active':item.icon"></span>
			<span class="text" :style="item.active?'color:'+navActiveTextColor:''">{{item.text}}</span>
		</li>
	</ul>
</template>

<script>
	export default {
	  name: 'Navtab',
	  data () {
	  	return {
	  		navList: [
	  			{'icon':'home',active:true,'text':'首页','path':'/home'},
	  			{'icon':'group',active:false,'text':'高考圈','path':'/gkq'},
	  			{'icon':'news',active:false,'text':'资讯'},
	  			{'icon':'personal',active:false,'text':'我的'}
	  		],
	  		navActiveTextColor:'#5ba8ff'
	  	}
	  },
	  methods: {
	  	navClickHandler (index) {
	  		this.navList.forEach((item,i)=>{
	  			if(i == index){
	  				item['active'] = true;
	  				item.path?this.$router.push(item.path):'';
	  			}else{
	  				item['active'] = false;
	  			}
	  		})
	  	}
	  },
	  mounted: function(){
	  	var routePath = this.$route.path;
	  	var isActivePath = '';
	  	if(routePath.indexOf('/home') !== -1){
	  		isActivePath = '/home';
	  	}else if(routePath.indexOf('/gkq') !== -1){
	  		isActivePath = '/gkq';
	  	}
	  	this.navList.forEach((item,i)=>{
  			if(isActivePath == item['path']){
  				item['active'] = true;
  			}else{
  				item['active'] = false;
  			}
  		})
	  }
	}
</script>

<style scoped>
	.nav-tab-wrap{
		position: fixed;
		background-color: #fff;
		bottom: 0px;
		left: 0;
		border-top:1px solid #dcdcdc;
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 0.25rem 0 0.111111rem;
	}
	.nav-tab-wrap li{
		flex: 1;
		text-align: center;
	}
	.nav-tab-wrap li span{
		display: inline-block;
	}
	.nav-tab-wrap li .icon{
		width: 0.833333rem;
		height: 0.833333rem;
		background-size: 0.833333rem 0.833333rem;
	}
	.nav-tab-wrap li .text{
		display: block;
		font-size: 0.277778rem;
		color: #777;
	}
	.nav-tab-wrap li .home{
		background-image: url('../assets/image/home.png');
	}
	.nav-tab-wrap li .group{
		background-image: url('../assets/image/group.png');
	}
	.nav-tab-wrap li .news{
		background-image: url('../assets/image/news.png');
	}
	.nav-tab-wrap li .personal{
		background-image: url('../assets/image/personal.png');
	}
	.nav-tab-wrap li .home-active{
		background-image: url('../assets/image/home-active.png');
	}
	.nav-tab-wrap li .group-active{
		background-image: url('../assets/image/group-active.png');
	}
	.nav-tab-wrap li .news-active{
		background-image: url('../assets/image/news-active.png');
	}
	.nav-tab-wrap li .personal-active{
		background-image: url('../assets/image/personal-active.png');
	}
</style>
