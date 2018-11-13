<template>
    <div id="page-wrap">
        <section class="square-trends-wrap">
            <div class="square-image">
                <img src="../assets/image/square.png"  alt="pic">
            </div>
            <div class="trends-box">
                <ul class="trends-list">
                    <li class="item">
                        <span class="head"></span>
                        <span class="nick">大笨猪666</span>
                        <span class="content">我了个去啊！！我了个去啊！！我了个去啊！！我了个去啊！！我了个去啊！！</span>
                    </li>
                </ul>
            </div>
        </section>
        <div class="div-block"></div>
        <section class="dynamic-content-wrap">
            <ul class="dynamic-list-box">
                <li class="item-box">
                    <div class="item-top">
                        <div class="dynamic-portrait"></div>
                        <div class="dynamic-info">
                            <h2 class="name">篱笆</h2>
                            <div class="other">
                                <span class="time">7小时前</span>
                                <span class="place">广州市</span>
                            </div>
                        </div>
                    </div>
                    <div class="item-middle">
                        目前阿里基本上绝大部分业务的前端用的都是 React 技术栈，而在业务场景中又经常会有图表绘制的需求，所以一个 基于 React 技术栈的图表库 就显得非常必要，而在阿里内部又有像 G2 这样非常强大的图表底层引擎，所以在该引擎之上做一层封装是一件很自然而然的事情，而 Bizcharts 就是基于 G2 引擎的 React 版本的封装。
                    </div>
                    <div class="item-bottom">
                        <ul class="operate-box">
                            <li>
                                <span class="icon share"></span>
                                <span class="text">分享</span>
                            </li>
                            <li>
                                <span class="icon comment"></span>
                                <span class="text">评论</span>
                            </li>
                            <li>
                                <span class="icon praise status-active"></span>
                                <span class="text">赞</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="item-box">
                    <div class="item-top">
                        <div class="dynamic-portrait"></div>
                        <div class="dynamic-info">
                            <h2 class="name">篱笆</h2>
                            <div class="other">
                                <span class="time">7小时前</span>
                                <span class="place">广州市</span>
                            </div>
                        </div>
                    </div>
                    <div class="item-middle">
                        目前阿里基本上绝大部分业务的前端用的都是 React 技术栈，而在业务场景中又经常会有图表绘制的需求，所以一个 基于 React 技术栈的图表库 就显得非常必要，而在阿里内部又有像 G2 这样非常强大的图表底层引擎，所以在该引擎之上做一层封装是一件很自然而然的事情，而 Bizcharts 就是基于 G2 引擎的 React 版本的封装。
                    </div>
                    <div class="item-bottom">
                        <ul class="operate-box">
                            <li>
                                <span class="icon share"></span>
                                <span class="text">分享</span>
                            </li>
                            <li>
                                <span class="icon comment"></span>
                                <span class="text">评论</span>
                            </li>
                            <li>
                                <span class="icon praise"></span>
                                <span class="text">赞</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="item-box">
                    <div class="item-top">
                        <div class="dynamic-portrait"></div>
                        <div class="dynamic-info">
                            <h2 class="name">篱笆</h2>
                            <div class="other">
                                <span class="time">7小时前</span>
                                <span class="place">广州市</span>
                            </div>
                        </div>
                    </div>
                    <div class="item-middle">
                        目前阿里基本上绝大部分业务的前端用的都是 React 技术栈，而在业务场景中又经常会有图表绘制的需求，所以一个 基于 React 技术栈的图表库 就显得非常必要，而在阿里内部又有像 G2 这样非常强大的图表底层引擎，所以在该引擎之上做一层封装是一件很自然而然的事情，而 Bizcharts 就是基于 G2 引擎的 React 版本的封装。
                    </div>
                    <div class="item-bottom">
                        <ul class="operate-box">
                            <li>
                                <span class="icon share"></span>
                                <span class="text">分享</span>
                            </li>
                            <li>
                                <span class="icon comment"></span>
                                <span class="text">评论</span>
                            </li>
                            <li>
                                <span class="icon praise"></span>
                                <span class="text">赞</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'GkqDynamic',
        components:{
            
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
    
    /*广场动态*/
    .square-trends-wrap{
        padding: 0.277778rem;
        background-color: #fff;
        height: 0.833333rem;
        display: flex;
    }
    .square-trends-wrap .square-image{
        height: 0.833333rem;
        width: 0.833333rem;
    }
    .square-trends-wrap .square-image img{
        width: 100%;
        height: 100%;
    }
    .square-trends-wrap .trends-box{
        width: calc(100% - 1.138889rem);
        margin-left: 0.277778rem;
        border-left: 2px solid #44a4ff;
    }
    .trends-box .trends-list{
        margin-left: 0.194444rem
    }
    .trends-box .trends-list .item{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
    }
    .trends-list .item .head{
        display: inline-block;
        width: 0.833333rem;
        height: 0.833333rem;
        border-radius: 50%;
        background-color: #ccc;
        vertical-align: middle;
    }
    .trends-list .item .nick{
        font-size: 0.333333rem;
        color: #40c689;
        margin: 0 0.138889rem;
    }
    .trends-list .item .content{
        font-size: 0.333333rem;
        color: #333;
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
