<template>
    <div id="page-wrap">
        <section class="ht-content-wrap">
            <ul class="ht-list-box">
                <li class="item-box">
                    <div class="cover-box">
                        <img src="../assets/image/ht-img.png" alt="pic">
                    </div>
                    <div class="title-box">
                        <h2 class="main">数学要如何才能高效的复习</h2>
                        <h3 class="sub">这是副标题，重点大学学长学姐来给你带节奏</h3>
                    </div>
                    <div class="dic-count">讨论：999+</div>
                </li>
                <li class="item-box">
                    <div class="cover-box">
                        <img src="../assets/image/ht-img2.png" alt="pic">
                    </div>
                    <div class="title-box">
                        <h2 class="main">数学要如何才能高效的复习</h2>
                        <h3 class="sub">这是副标题，重点大学学长学姐来给你带节奏</h3>
                    </div>
                    <div class="dic-count">讨论：999+</div>
                </li>
                <li class="item-box">
                    <div class="cover-box">
                        <img src="../assets/image/ht-img.png" alt="pic">
                    </div>
                    <div class="title-box">
                        <h2 class="main">数学要如何才能高效的复习</h2>
                        <h3 class="sub">这是副标题，重点大学学长学姐来给你带节奏</h3>
                    </div>
                    <div class="dic-count">讨论：999+</div>
                </li>
                <li class="item-box">
                    <div class="cover-box">
                        <img src="../assets/image/ht-img2.png" alt="pic">
                    </div>
                    <div class="title-box">
                        <h2 class="main">数学要如何才能高效的复习</h2>
                        <h3 class="sub">这是副标题，重点大学学长学姐来给你带节奏</h3>
                    </div>
                    <div class="dic-count">讨论：999+</div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'GkqHt',
        components:{
            
        }
    }
</script>

<style scoped>
    /*话题列表*/
    .ht-content-wrap{
        background-color: #f2f4f7;
    }
    .ht-list-box{
    }
    .ht-list-box .item-box{
        position: relative;
        padding: 0.277778rem 0.277778rem 0;
        background-color: #fff;
        margin-top: 0.194444rem;
    }
    .item-box .dic-count{
        position: absolute;
        left: 0.277778rem;
        top:0.277778rem;
        width: 3.333333rem;
        height: 1.041667rem;
        background-image: url(../assets/image/dic-bg.png);
        background-size: 3.333333rem 1.041667rem;
        line-height: 1.041667rem;
        color: #fff;
        font-size: 0.333333rem;
        text-align: center;
    }
    .item-box .cover-box{
        font-size: 0;
    }
    .item-box .cover-box img{
        width: 100%;
    }
    .item-box .title-box{
        font-weight: bold;
        color: #333;
        padding: 0.333333rem 0;
    }
    .title-box .main,
    .title-box .sub{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .title-box .main{
        font-weight: bold;
        font-size: 0.388889rem;
    }
    .title-box .sub{
        margin-top: 0.25rem;
        font-size: 0.333333rem;
    }
</style>
