<template>
    <div id="page-wrap">
        <section class="page-top">
            <span class="entry-btn follow">关注</span>
            <h1 class="page-title">高考圈</h1>
            <span class="entry-btn publish">发布</span>
        </section>

        <section class="tab-wrap">
            <ul class="tab-list-box">
                <li 
                    v-for="(item,index) of tabList" 
                    :key="index" 
                    :class="item.name == isChecked?'down':''"
                    @click="handleClick(item.name,item.path)"
                >
                {{item.name}}
                </li>
            </ul>
        </section>
        
        <div class="div-block"></div>
        

        <router-view></router-view>
        
    </div>
</template>

<script>
    export default {
        name: 'Gkq',
        data: function(){
            return {
                isChecked: '动态',
                tabList :[
                    {name:'动态',path:'/gkq/dynamic'},
                    {name:'话题',path:'/gkq/ht'},
                    {name:'专题',path:'/gkq/zt'}
                ]
            }
        },
        components:{
            
        },
        methods: {
            handleClick (name,path) {
                this.isChecked = name;
                this.$router.push(path);
            }
        },
        mounted: function(){
            var routeName = this.$route.name;
            switch(routeName){
                case 'dynamic':
                this.isChecked = '动态';
                break;
                case 'ht':
                this.isChecked = '话题';
                break;
                case 'zt':
                this.isChecked = '专题';
                break;
            }
      }
    }
</script>

<style scoped>
    
    /*分割块*/
    .div-block{
        height: 0.194444rem;
        width: 100%;
        background-color: #f2f4f7;
    }

    .page-top{
        height: 1.333333rem;
        line-height: 1.333333rem;
        background-color: #44a4ff;
        color: #fff;
        position: relative;
    }
    .page-top .page-title{
        text-align: center;
        font-size: 0.5rem;
    }
    .page-top .entry-btn{
        font-size: 0.416667rem;
        position: absolute;
        top:0px;
    }
    .page-top .follow{
        left: 0.277778rem;
    }
    .page-top .publish{
        right: 0.277778rem;
    }

    /*tab*/
    .tab-wrap{
        height: 1.111111rem;
        line-height: 1.111111rem;
        border-bottom: 1px solid #dcdcdc;
        background-color: #fff;
    }
    .tab-list-box{
        text-align: center;
    }
    .tab-list-box li{
        display: inline-block;
        padding: 0 0.527778rem;
        color: #999;
        font-size: 0.416667rem;
        position: relative;
    }
    .tab-list-box li.down{
        color: #333;
        font-weight: bold;
    }
    .tab-list-box li.down::after{
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 0.083333rem;
        background-color: #44a4ff;
        border-radius: 0.277778rem;
    }

    

    /*动态列表*/
    .dynamic-content-wrap{}
    .dynamic-list-box{
        background-color: #f2f4f7;
    }
    .dynamic-list-box .item-box{
        padding: 0.333333rem 0.277778rem 0;
        background-color: #fff;
        margin-bottom: 0.194444rem;
    }
    .item-box .item-top{
        display: flex;
    }
    .item-top .dynamic-portrait{
        width: 1.111111rem;
        height: 1.111111rem;
        border-radius: 50%;
        background-color: #ccc;
    }
    .item-top .dynamic-info{
        margin-left: 0.194444rem;
    }
    .item-top .dynamic-info .name{
        font-size: 0.388889rem;
        color: #5ba8ff;
        margin-top: 0.083333rem;
    }
    .item-top .dynamic-info .other{
        font-size: 0.333333rem;
        color: #999;
        margin-top: 0.208333rem;
    }
    .item-top .dynamic-info .other .time{
        margin-right: 0.222222rem;
    }
    .item-top .dynamic-info .other .place{}
    .item-box .item-middle{
        font-size: 0.388889rem;
        line-height: 0.666667rem;
        color: #333;
        margin-top: 0.277778rem;
    }
    .item-box .item-bottom{
        margin-top: 0.388889rem;
    }
    .item-box .operate-box{
        height: 0.833333rem;
        border-top: 1px solid #dcdcdc;
        display: flex;
    }
    .item-box .operate-box li{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .item-box .operate-box li .icon{
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        background-size: 0.5rem 0.5rem;
    }
    .item-box .operate-box li .text{
        color: #999;
        font-size: 0.333333rem;
        margin-left: 0.166667rem;
    }
    .item-box .operate-box li .share{
        background-image: url(../assets/image/share.png);
    }
    .item-box .operate-box li .comment{
        background-image: url(../assets/image/comment.png);
    }
    .item-box .operate-box li .praise{
        background-image: url(../assets/image/like.png);
    }
    .item-box .operate-box li .status-active{
        background-image: url(../assets/image/liked.png);
    }
</style>
