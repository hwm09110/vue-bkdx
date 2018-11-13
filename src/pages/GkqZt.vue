<template>
    <div id="page-wrap">
        <section class="zt-content-wrap">
            <ul class="zt-list-box">
                <li class="item-box">
                    <div class="cover-box">
                        <img src="../assets/image/zt-img.png" alt="">
                    </div>
                    <div class="title-box">
                        物理如何能高效复习
                    </div>
                    <div class="bottom-box">
                        <div class="author">
                            <span class="icon"></span>
                            <span class="name">小白兔</span>
                        </div>
                        <div class="operate-box">
                            <span class="btn">
                                <i class="icon comment"></i>
                                <span class="count">202</span>
                            </span>
                            <span class="btn">
                                <i class="icon star"></i>
                                <span class="count">202</span>
                            </span>
                        </div>
                    </div>
                </li>
                <li class="item-box">
                    <div class="cover-box">
                        <img src="../assets/image/zt-img2.png" alt="">
                    </div>
                    <div class="title-box">
                        物理如何能高效复习
                    </div>
                    <div class="bottom-box">
                        <div class="author">
                            <span class="icon"></span>
                            <span class="name">小白兔</span>
                        </div>
                        <div class="operate-box">
                            <span class="btn">
                                <i class="icon comment"></i>
                                <span class="count">202</span>
                            </span>
                            <span class="btn">
                                <i class="icon star"></i>
                                <span class="count">202</span>
                            </span>
                        </div>
                    </div>
                </li>
                <li class="item-box">
                    <div class="cover-box">
                        <img src="../assets/image/zt-img3.png" alt="pic">
                    </div>
                    <div class="title-box">
                        物理如何能高效复习
                    </div>
                    <div class="bottom-box">
                        <div class="author">
                            <span class="icon"></span>
                            <span class="name">小白兔</span>
                        </div>
                        <div class="operate-box">
                            <span class="btn">
                                <i class="icon comment"></i>
                                <span class="count">202</span>
                            </span>
                            <span class="btn">
                                <i class="icon star"></i>
                                <span class="count">202</span>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'GkqZt',
        components:{
            
        }
    }
</script>

<style scoped>
    /*专题列表*/
    .zt-content-wrap{
        background-color: #f2f4f7;
    }
    .zt-list-box{
    }
    .zt-list-box .item-box{
        padding: 0.277778rem 0.277778rem 0;
        background-color: #fff;
        margin-top: 0.194444rem;
    }
    .item-box .cover-box{
        font-size: 0;
    }
    .item-box .cover-box img{
        width: 100%;
    }
    .item-box .title-box{
        font-size: 0.388889rem;
        font-weight: bold;
        color: #333;
        margin-top: 0.333333rem;
    }
    .item-box .bottom-box{
        padding: 0.277778rem 0 ;
        display: flex;
        justify-content: space-between;
        font-size: 0.333333rem;
        color: #999;
    }
    .bottom-box .author{
    }
    .bottom-box .author .icon{
        display: inline-block;
        width: 0.375rem;
        height: 0.5rem;
        background-image: url(../assets/image/author.png);
        background-size: 0.375rem 0.5rem;
        vertical-align: middle;
    }
    .bottom-box .author .name{
        margin-left: 0.083333rem;
        vertical-align: middle;
    }
    .operate-box{}
    .operate-box .btn{
        margin-left: 0.361111rem;
    }
    .operate-box .icon{
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        background-size: 0.5rem 0.5rem;
        vertical-align: middle;
    }
    .operate-box .comment{
        background-image: url(../assets/image/comment.png);
    }
    .operate-box .star{
        background-image: url(../assets/image/collection.png);
    }
    .operate-box .count{
        margin-left: 0.083333rem;
        vertical-align: middle;

    }
</style>
