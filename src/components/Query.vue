<template>
    <div class="query">
        <div class="noResult" :class="{no: canLook}">
            暂无获奖信息哦~<br>
            请继续加油！
        </div>
        <div class="prize" :class="{no: !canLook}">
            <h2>个人获奖榜单：</h2>
            <div class="yousheng">
                <div class="title1">
                    优胜奖
                </div>
                <ul class="ul-ys">
                    <li>
                        第一周：李京津 2014XXX495
                    </li>
                    <!-- <li>
                        第二周：啦啦啦 2016XXX222
                    </li> -->
                </ul>
            </div>
            <!-- <div class="onetwothree">
                <ul>
                    <li class="li-ott">
                        <div class="title2">
                            一等奖
                        </div>
                        <div class="names">
                            啦啦啦 2016XXX222
                        </div>
                    </li>
                    <li class="li-ott">
                        <div class="title2">
                            二等奖
                        </div>
                        <div class="names">
                            啦啦啦 2016XXX222
                        </div>
                    </li>
                    <li class="li-ott">
                        <div class="title2">
                            三等奖
                        </div>
                        <div class="names">
                            啦啦啦 2016XXX222
                        </div>
                    </li>
                </ul>
            </div>
            <div class="xingyun">
                <div class="title1">
                    幸运奖
                </div>
                <ul class="ul-xy">
                    <li>
                        啦啦啦 2016XXX222
                    </li>
                    <li>
                        啦啦啦 2016XXX222
                    </li>
                    <li>
                        啦啦啦 2016XXX222
                    </li>
                </ul>
            </div> -->
        </div>
        <div class="tip">
            个人获奖信息只有绑定学号用户才能查询到哦
        </div>
    </div>
</template>

<script>

export default {
    name: 'Query',
    data () {
        return {
            studentNum: "",
            none: true,
            none1: true,
            none2: true,
            canLook: false,
            url: "https://wx.idsbllp.cn"
        }
    },
    created() {
        this.canLook = this.$store.state.canQuery;
    },
    mounted() {

    },
    methods: {
        // search: function () {
        //     //发送学号查询结果
        //     if (/^\d{10}$/.test(this.studentNum)) {
        //         this.$http.post(this.url + "/huojiang", {
        //                 params: {
        //                     studentNum: this.studentNum
        //                 }
        //             })
        //             .then((response) => {
        //                 this.studentNum = null;
        //                 if (response.data.data.ok) {
        //                     this.none = false;
        //                     this.none1 = false;
        //                 } else {
        //                     this.none = false;
        //                     this.none2 = false;
        //                 }
        //             })
        //             .catch((err) => {
        //                 console.log(err);
        //             })
        //     } else {
        //         this.studentNum = null;
        //         alert("输入不合法，请重新输入");
        //     }
        // },
        // close: function () {
        //     this.none = true;
        //     this.none1 = true;
        //     this.none2 = true;
        // }
    }
}
</script>

<style scoped>
.query {
    position: absolute;
    width: 100vw;
    /* height: 100vh; */
    height: 100%;
    background: url(../assets/query_bg.png);
    background-size: 100% 100%;
}

.prize {
    overflow: scroll;
    position: relative;
    top: 28vh;
    height: 60vh;
    padding: 0 10vw;
}

.prize h2 {
    font-size: 6.5vw;
}

.yousheng {
    margin-top: 5vh;
    margin-bottom: 5vh;
}

.ul-ys, .ul-xy, .names {
    display: inline-block;
    font-size: 4.2vw;
    line-height: 5vw;
}

.ul-ys li {
    margin-bottom: 3vh;
}

.ul-ys li:last-child {
    margin-bottom: 0vh;
}

.onetwothree {
    margin-bottom: 5vh;
}

.li-ott {
    margin-bottom: 3vh;
}

.xingyun {
    position: relative;
    margin-top: 5vh;
}

.ul-xy li {
    margin-bottom: 3vh;
}

.title1 {
    display: inline-block;
    font-weight: 600;
    font-size: 5vw;
    margin-right: 5vw;
}

.title1:nth-child(1) {
    vertical-align: top;
}

.title2 {
    display: inline-block;
    font-weight: 600;
    font-size: 5vw;
    margin-right: 5vw;
}

.noResult {
    position: relative;
    height: 6.9vh;
    text-align: center;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-3.45vh);
}

.tip {
    position: absolute;
    bottom: 3vh;
    color: #aaaaaa;
    font-size: 3.46vw;
    width: 100vw;
    text-align: center;
}

.no {
    display: none;
}

/* #studentNum {
    position: absolute;
    left: 32.8vw;
    top: 37.7vh;
    padding-left: 2vw;
    padding-right: 2vw;
    line-height: 5vh;
    font-size: 4.8vw;
    width: 54vw;
    height: 7.6vh;
    border: 0.34vw solid #600513;
    border-radius: 2vw;
}

.confirm {
    position: absolute;
    top: 54.05vh;
    left: 50%;
    margin-left: -28.2vw;
    width: 56.4vw;
    height: 9.42vh;
    background: url(../assets/confirm.png);
    background-size: 100% 100%;
}

.shadow {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #000000;
    opacity: 0.5;
    z-index: 99;
}

.alert1,.alert2 {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -21vh;
    margin-left: -45.8vw;
    width: 91.6vw;
    height: 42vh;
    background: url(../assets/great.png);
    background-size: 100% 100%;
    z-index: 99;
}

.alert2 {
    background: url(../assets/sorry.png);
    background-size: 100% 100%;
}

.great,.sorry {
    position: relative;
    top: 29.7vh;
    margin: 0 auto;
    width: 31.6vw;
    height: 6.28vh;
    background: url(../assets/return.png);
    background-size: 100% 100%;
}

.no {
    display: none;
} */
</style>
