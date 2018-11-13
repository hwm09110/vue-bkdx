<template>
    <div id="page-wrap">
        <section class="page-top">
            <div class="kq-box">
                <span class="icon"></span>
                <span class="text">内蒙古</span>
            </div>
            <div class="app-title">报考大学</div>
            <div class="guide-box">
                <span class="icon"></span>
            </div>
        </section>
        <section class="banner-wrap">
            <!-- <img src="../assets/image/banner.png" alt="pic"> -->
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in bannerImages" :key="index">
                    <img :src="image" />
                </van-swipe-item>
            </van-swipe>
        </section>
        
        <section class="app-wrap">
            <ul class="app-list-box cls">
                <li>
                    <span class="icon bkzy"></span>
                    <span class="name">备考资源</span>
                </li>
                <li>
                    <span class="icon yxdq"></span>
                    <span class="name">院校大全</span>
                </li>
                <li>
                    <span class="icon zydq"></span>
                    <span class="name">专业大全</span>
                </li>
                <li>
                    <span class="icon kfpp"></span>
                    <span class="name">智能匹配大学</span>
                </li>
                <li>
                    <span class="icon test"></span>
                    <span class="name">测性格找专业</span>
                </li>
                <li>
                    <span class="icon xzxj"></span>
                    <span class="name">学长学姐</span>
                </li>
                <li>
                    <span class="icon skx"></span>
                    <span class="name">省控线</span>
                </li>
                <li>
                    <span class="icon jxj"></span>
                    <span class="name">奖学金</span>
                </li>
            </ul>
        </section>

        <div class="div-block"></div>
        
        <section class="module-box vip-wrap">
            <h3 class="module-title-box">
                <span class="line"></span>
                <span class="text">VIP专区</span>
                <span class="line"></span>
            </h3>
            <ul class="vip-list-box cls">
                <li>
                    <span class="icon gktf">
                        <img src="../assets/image/gktf.png" />
                    </span>
                    <span class="name">高考提分</span>
                </li>
                <li>
                    <span class="icon lqgl">
                        <img src="../assets/image/lqgl.png" />
                    </span>
                    <span class="name">录取概率</span>
                </li>
                <li>
                    <span class="icon mntb">
                        <img src="../assets/image/mntb.png" />
                    </span>
                    <span class="name">模拟填报</span>
                </li>
                <li>
                    <span class="icon wd">
                        <img src="../assets/image/wd.png" />
                    </span>
                    <span class="name">问答</span>
                </li>
            </ul>
        </section>
        
        <div class="div-block"></div>

        <section class="zj-chat">
            <img src="../assets/image/chat-entry.png" alt="pic">
        </section>

        <div class="div-block"></div>

        <section class="topic-wrap">
            <h3 class="module-title-box">
                <span class="line"></span>
                <span class="text">推荐专题</span>
                <span class="line"></span>
                <div class="more-entry">
                    <span class="btn-text">更多</span>
                    <span class="icon"></span>
                </div>
            </h3>
            <ul class="topic-list-box">
                <li>
                    <div class="topic-image">
                        <img src="../assets/image/topic-img.png" alt="pic">
                    </div>
                    <div class="topic-titlle">
                        <h2 class="main">清华大学老司机驾到，助你升学</h2>
                        <h3 class="sub">每日发现新奇好玩的事哦</h3>
                    </div>
                </li>
                <li>
                    <div class="topic-image">
                        <img src="../assets/image/topic-img.png" alt="pic">
                    </div>
                    <div class="topic-titlle">
                        <h2 class="main">清华大学老司机驾到，助你升学</h2>
                        <h3 class="sub">每日发现新奇好玩的事哦</h3>
                    </div>
                </li>
                <li>
                    <div class="topic-image">
                        <img src="../assets/image/topic-img.png" alt="pic">
                    </div>
                    <div class="topic-titlle">
                        <h2 class="main">清华大学老司机驾到，助你升学</h2>
                        <h3 class="sub">每日发现新奇好玩的事哦</h3>
                    </div>
                </li>
            </ul>
        </section>

    </div>
</template>

<script>
    import { Toast, Swipe, SwipeItem  } from 'vant'
    export default {
        name: 'Home',
        data () {
            return {
                bannerImages: [
                    require('../assets/image/banner.png'),
                    require('../assets/image/banner.png'),
                    require('../assets/image/banner.png')
                ]
            }
        },
        components:{
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
        },
        created () {
            Toast.loading({
                mask: true,
                message: '加载中...'
            })
        }
    }
</script>

<style scoped>
    /*顶部*/
    .page-top{
        text-align: center;
        padding: 0 0.277778rem;
        display: flex;
        height: 1.333333rem;
        align-items: center;
        justify-content: space-between;
        background-color: #44a4ff;
        color: #fff;
    }
    .kq-box{
        width: 2.5rem;
    }
    .kq-box .icon{
        display: inline-block;
        width: 0.5rem;
        height: 0.666667rem;
        background: url('../assets/image/location.png');
        background-size: 0.5rem 0.666667rem;
        vertical-align: middle;
    }
    .kq-box .text{
        vertical-align: middle;
        font-size: 0.472222rem;
    }
    .guide-box{
        width: 2.5rem;
        text-align: right;
    }
    .guide-box .icon{
        display: inline-block;
        width: 0.666667rem;
        height: 0.666667rem;
        background: url('../assets/image/guide.png');
        background-size: 0.666667rem 0.666667rem;
    }
    .app-title{
        font-size: 0.638889rem;
    }

    /*banner*/
    .banner-wrap{
        width: 100%;
    }
    .banner-wrap img{
        max-width: 100%;
        width: 100%;
    }

    /*app list*/
    .app-list-box{
        padding-top: 0.333333rem
    }
    .app-list-box li{
        float: left;
        width: 2.5rem;
        margin-bottom: 0.333333rem;
        text-align: center;
    }
    .app-list-box .icon{
        display: inline-block;
        width: 1.583333rem;
        height: 1.583333rem;
        background-size: 1.583333rem 1.583333rem;
        margin-bottom: 0.138889rem;
    }
    .app-list-box .bkzy{
        background-image: url('../assets/image/bkzy.png');
    }
    .app-list-box .yxdq{
        background-image: url('../assets/image/yxdq.png');
    }
    .app-list-box .zydq{
        background-image: url('../assets/image/zydq.png');
    }
    .app-list-box .kfpp{
        background-image: url('../assets/image/kfpp.png');
    }
    .app-list-box .test{
        background-image: url('../assets/image/test.png');
    }
    .app-list-box .xzxj{
        background-image: url('../assets/image/xzxj.png');
    }
    .app-list-box .skx{
        background-image: url('../assets/image/skx.png');
    }
    .app-list-box .jxj{
        background-image: url('../assets/image/jxj.png');
    }
    .app-list-box .name{
        display: block;
        color: #333;
        font-size: 0.305556rem;
    }

    /*分割块*/
    .div-block{
        height: 0.277778rem;
        width: 100%;
        background-color: #f5f5f5;
    }

    /*vip*/
    .module-title-box{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .module-title-box .line{
        display: inline-block;
        width: 0.416667rem;
        height: 0.013889rem;
        background-color: #ccc;
    }
    .module-title-box .text{
        margin: 0 0.277778rem;
        font-size: 0.388889rem;
        font-weight: bold;
        color: #333;
        vertical-align: middle;
    }

    .vip-wrap{
        padding: 0.416667rem 0;
    }
    .vip-list-box{
        margin-top: 0.361111rem;
        display: flex;
        padding: 0 0.208333rem;
    }
    .vip-list-box li{
        flex: 1;
        text-align: center;
    }
    .vip-list-box .icon{
        display: block;
        
        margin-bottom: 0.083333rem;
    }
    .vip-list-box .icon img{
        max-width: 100%;
    }
    .vip-list-box .name{
        display: block;
        color: #333;
        font-size: 0.305556rem;
    }

    /*专家一对一*/
    .zj-chat img{
        width: 100%;
    }

    /*推荐专题*/
    .topic-wrap{}
    .topic-wrap .module-title-box{
        position: relative;
        padding: 0.333333rem 0;
    }
    .module-title-box .more-entry{
        position: absolute;
        right: 0.277778rem;
        top:0.361111rem;
        line-height: 0;
    }
    .module-title-box .more-entry .btn-text{
        font-size: 0.333333rem;
        color: #aaa;
        vertical-align: middle;
    }
    .module-title-box .more-entry .icon{
        display: inline-block;
        width: 0.208333rem;
        height: 0.375rem;
        background-image: url(../assets/image/more-icon.png);
        background-size: 0.208333rem 0.375rem;
        margin-left: 0.083333rem;
        vertical-align: middle;
    }
    .topic-list-box{}
    .topic-list-box li{
        padding: 0 0.277778rem 0.333333rem;
    }
    .topic-list-box .topic-image{
        width: 100%;
    }
    .topic-list-box .topic-image img{
        width: 100%;
        border-radius: 0.138889rem;
    }
    .topic-list-box .topic-titlle{
        padding-left: 0.083333rem;
    }
    .topic-list-box .topic-titlle .main{
        margin-top: 0.138889rem;
        margin-bottom: 0.194444rem;
        color: #333;
        font-size: 0.388889rem;
        font-weight: normal;
    }
    .topic-list-box .topic-titlle .sub{
        color: #999;
        font-size: 0.333333rem;
        font-weight: normal;
    }
</style>
