<template>
    <div class="list">
        <div class="main">
            <div class="user-info">
                <div class="headImg">
                    <img :src="headImg" class="headImg-img">
                </div>
                <div class="username">
                    {{username}}
                </div>
                <div class="userpm">
                    {{text}}：第<span>{{pm}}</span>名
                </div>
                <div class="userright">
                    累计答题正确数：{{rightNum}}道
                </div>
            </div>
            <div class="bangdan">
                <div :class="[ isGeren ? 'geren2' : 'geren1' ]" @click="changeBD(true)">
                </div>
                <div :class="[ isGeren ? 'banji1' : 'banji2' ]" @click="changeBD(false)">
                </div>
                <template v-if="isGerenBD">
                    <div class="geren-BD-wrap">
                        <div class="geren-BD-title">
                            <span class="span-nicheng">昵称</span>
                            <span class="span-zhengque">正确数</span>
                            <span class="span-paiming">排名</span>
                        </div>
                        <div class="geren-BD">
                            <ul class="geren-BD-ul">
                                <li class="geren-BD-li" v-for="(item, index) in gerens">
                                    <span class="li-headImg"><img :src="item.headimgurl"></span>
                                    <span class="li-username">{{item.nickname}}</span>
                                    <span class="li-dati">{{item.amount}}</span>
                                    <span class="li-paiming">{{item.rank}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="banji-BD-wrap">
                        <div class="banji-BD-title">
                            <span class="span-xueyuan">学院</span>
                            <span class="span-banji">班级</span>
                            <span class="span-paiming">排名</span>
                        </div>
                        <div class="banji-BD">
                            <ul class="banji-BD-ul">
                                <li class="banji-BD-li" v-for="(item, index) in banjis">
                                    <span class="li-xueyuan">{{item.college}}</span>
                                    <span class="li-bianhao">{{item.class_id}}</span>
                                    <span class="li-mingci">{{item.rank}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
                <!-- <div class="scroll">
                    <div class="scroll-wrap">
                        <div class="scroll-bar" @touchstart="movesBD" @touchmove="movemBD" @touchend="moveeBD">
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="to-answer" @click="toAnswer">

        </div>
        <div class="to-query">
            <router-link to="/query" class="query">
            </router-link>
        </div>
        <div class="shadow" :class="{ no: none }">

        </div>
        <div class="alert" :class="{ no: none }">
            <div class="close" @click="closeAlert">

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'List',
    data () {
        return {
            headImg: "",
            username: "",
            userpm: "∞",
            banjipm: "∞",
            pm: "∞",
            rightNum: 0,
            gerens: [],
            banjis: [],
            text: "我的排名",
            isGeren: "truthy",  //truthy
            isGerenBD: true,
            none: true,
            openid: "",
            canAnswer: false,
            // start: 0,
            // offsetBar: 0,
            // moving: 0,
            // height: 0,
            // end: 0,
            // gerenheight: 0,
            // banjiheight: 0,
            // flags: false,
            // position: {
            //   y: 0
            // },
            // ny: '', dy: '', yPum: '',
            // url: "https://wx.idsbllp.cn/test-proxy-rewrite-root"
            url: "https://wx.idsbllp.cn"
        }
    },
    created() {
        //获取个人信息
        this.$http.post(this.url + '/competition/getUserInfo', {paramas: {}}, {headers: {'X-Requested-With': 'XMLHttpRequest'}})
            .then((response) => {
                this.headImg = response.data.data.headimgurl;
                this.username = response.data.data.nickname;
                if (response.data.data.personal_rank != 0) {
                    this.userpm = response.data.data.personal_rank;
                }
                if (response.data.data.class_rank != 0) {
                    this.banjipm = response.data.data.class_rank;
                }
                this.pm = this.userpm;
                this.openid = response.data.data.openid;
                this.userright = response.data.data.personal_amount;
                this.banjiright = response.data.data.class_amount;
                this.rightNum = this.userright;
                if (response.data.data.isBinding == false) {
                    this.banjipm = "∞";
                    this.banjiright = "∞";
                } else {
                    this.$store.commit("changeCanQuery");
                }
                if (response.data.data.left_times > 0) {
                    this.canAnswer = true;
                }
            })
            .catch((err) => {
                console.log(err);
            });
        //获取班级排行榜
        this.$http.post(this.url + '/competition/getClassRank')
            .then((response) => {
                this.banjis = response.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
        //获取个人排行榜
        this.$http.post(this.url + '/competition/getPersonalRank')
            .then((response) => {
                this.gerens = response.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    mounted() {

    },
    methods: {
        toAnswer: function () {
            if (this.canAnswer) {
                this.$router.push('/index');
            } else {
                this.$router.push('/index');
                // this.none = false;
            }
        },
        closeAlert: function () {
            this.none = true;
        },
        changeBD: function (is) {
            // let bar = document.querySelector('.scroll-bar');
            // bar.style.top = "0vh";
            if (is == true) {
                this.isGeren = "truthy";
                this.isGerenBD = true;
                this.text = "我的排名";
                this.pm = this.userpm;
                this.rightNum = this.userright;
            } else {
                this.isGeren = "";
                this.isGerenBD = false;
                this.text = "我所在的班级排名";
                this.pm = this.banjipm;
                this.rightNum = this.banjiright;
            }
        }
        // movesBD: function () {
        //     // event.preventDefault();
        //     let bar = document.querySelector('.scroll-bar');
        //     // this.start = event.changedTouches[0].clientY;
        //     // this.offsetBar = bar.offsetTop;
        //     // this.moving = this.start - this.offsetBar;
        //     // bar.addEventListener('touchmove', this.movemBD);
        //     let wrap = document.querySelector('.scroll-wrap');
        //     let geren = document.querySelector('.geren-BD-ul');
        //     let gerenBD = document.querySelector('.geren-BD');
        //     let ev = ev || event;
        //     let iMaxTop = 34;
        //     let disY = (ev.changedTouches[0].clientY - bar.offsetTop) / 12.10;
        //     document.ontouchmove = function (ev) {
        //         let T = (ev.changedTouches[0].clientY / 12.10 - disY);
        //         if (T < 0) {
        //             T = 0;
        //         } else if (T > iMaxTop) {
        //             T = iMaxTop;
        //         }
        //         bar.style.top = T + 'vh';
        //         let iScale = T / iMaxTop;
        //         geren.style.top = (gerenBD.clientHeight - geren.offsetHeight) * iScale + 'vh';
        //         }
        //         console.log(iMaxTop);
        //         document.onmouseup = function () {
        //             document.onmousemove = document.onmouseup =  null;
        //         }
        //     return false;
        //     // let moveDiv = document.querySelector('.scroll-bar');
        //     // this.flags = true;
        //     // let touch ;
        //     // if (event.touches) {
        //     //     touch = event.touches[0];
        //     // } else {
        //     //     touch = event;
        //     // }
        //     // this.position.y = touch.clientY;
        //     // this.dy = moveDiv.offsetTop;
        // }
        // movemBD: function () {
        //     // event.preventDefault();
        //     // let bar = document.querySelector('.scroll-bar');
        //     // let wrap = document.querySelector('.scroll-wrap');
        //     // this.end = event.changedTouches[0].clientY;
        //     //
        //     // this.height = (this.end - this.moving) / 12.10;
        //     let moveDiv = document.querySelector('.scroll-bar');
        //     if (this.flags) {
        //         let touch ;
        //         if (event.touches) {
        //             touch = event.touches[0];
        //         } else {
        //             touch = event;
        //         }
        //         this.ny = touch.clientY - this.position.y;
        //         this.yPum = this.dy + this.ny;
        //         if (this.yPum < 0) {
        //             this.yPum = 0;
        //         } else if (this.yPum > 34 * 12.10) {
        //             this.yPum = 34 * 12.10;
        //         }
        //         moveDiv.style.top = this.yPum / 12.10 + "vh";
        //         //阻止页面的滑动默认事件
        //         document.addEventListener("touchmove", function () {
        //             event.preventDefault();
        //         }, false);
        //     }
        //
        //     // let style = "translateY(" + this.height + "vh)";
        //     // if (this.height >= 0 && this.height <= 34) {
        //     //     bar.style.top = this.height + "vh";
        //     //     // bar.style.transform = style;
        //     // } else if (this.height < 0) {
        //     //     this.height = 0;
        //     //     bar.style.top = "0vh";
        //     //     // bar.style.transform = "translateY(0vh)";
        //     // } else if (this.height > 34) {
        //     //     this.height = 34;
        //     //     bar.style.top = "34vh";
        //     //     // bar.style.transform = "translateY(0vh)";
        //     // }
        //
        //     if (this.isGerenBD) {
        //         let geren = document.querySelector('.geren-BD-ul');
        //         let gerenBD = document.querySelector('.geren-BD');
        //         let sca = this.yPum / 34.0 / 12.10;
        //         geren.style.top = (gerenBD.clientHeight - geren.offsetHeight) / 12.10 * sca + "vh";
        //     } else {
        //         let banji = document.querySelector('.banji-BD-ul');
        //         let banjiBD = document.querySelector('.banji-BD');
        //         let sca = this.yPum / 34.0 / 12.10;
        //         banji.style.top = (banjiBD.clientHeight - banji.offsetHeight) / 12.10 * sca + "vh";
        //     }
        //     return false;
        // }
    }
}
</script>

<style scoped>
.list {
    position: relative;
    height: 100vh;
    background: #e8ffc8;
}

.main {
    position: relative;
    top: 2.48vh;
    width: 81.86vw;
    height: 83.9vh;
    margin: 0 auto;
    background: url(../assets/bang.png);
    background-size: 100% 100%;
}

.user-info {
    position: relative;
    top: 3.72vh;
    margin: 0 auto;
}

.headImg {
    position: relative;
    background: #fc782e;
    border-radius: 7vw;
    width: 14vw;
    height: 14vw;
    margin: 0 auto;
}

.headImg-img {
    position: relative;
    top: 0.5vw;
    left: 0.5vw;
    width: 13vw;
    height: 13vw;
    border-radius: 7vw;
}

.username {
    font-size: 3.46vw;
    color: #874e2e;
    text-align: center;
    margin-top: 1vh;
}

.userpm {
    text-align: center;
    color: #ff803b;
    font-size: 3.46vw;
    font-weight: 600;
    margin-top: 1vh;
}

.userpm span {
    display: inline-block;
    margin-left: 0.5vw;
    margin-right: 0.5vw;
    color: #ff803b;
    font-weight: 500;
}

.userright {
    text-align: center;
    color: #ff803b;
    font-size: 3.46vw;
    font-weight: 600;
    margin-top: 1vh;
}

.bangdan {
    position: relative;
    top: 5.66vh;
    margin: 0 auto;
}

.geren1 {
    position: relative;
    left: 10.9vw;
    display: inline-block;
    width: 26.13vw;
    height: 6.28vh;
    background: url(../assets/geren.png);
    background-size: 100% 100%;
}

.geren2 {
    position: relative;
    left: 10.9vw;
    display: inline-block;
    width: 26.13vw;
    height: 6.28vh;
    background: url(../assets/hgeren.png);
    background-size: 100% 100%;
}

.banji1 {
    position: relative;
    left: 10.9vw;
    margin-left: 6vw;
    display: inline-block;
    width: 26.13vw;
    height: 6.28vh;
    background: url(../assets/banji.png);
    background-size: 100% 100%;
}

.banji2 {
    position: relative;
    left: 10.9vw;
    margin-left: 6vw;
    display: inline-block;
    width: 26.13vw;
    height: 6.28vh;
    background: url(../assets/hbanji.png);
    background-size: 100% 100%;
}

.geren-BD {
    position: relative;
    width: 59vw;
    height: 40vh;
    overflow: scroll;
}

.geren-BD-ul {
    position: relative;
    width: 59vw;
}

.geren-BD-li {
    position: relative;
    margin-bottom: 1.24vh;
}

.li-headImg {
    position: relative;
    display: inline-block;
    width: 10.6vw;
    height: 10.6vw;
    border-radius: 7vw;
    background: #fc782e;
    vertical-align: middle;
}

.li-headImg img {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-4.8vw,-4.8vw);
    /* margin-left: -4.8vw;
    margin-top: -4.8vw; */
    width: 9.6vw;
    height: 9.6vw;
    border-radius: 7vw;
}

.li-username {
    display: inline-block;
    position: relative;
    height: 10.6vw;
    font-size: 3.2vw;
    color: #a7806f;
    line-height: 10.6vw;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 16vw;
    margin-left: 2.4vw;
}

.li-dati {
    display: inline-block;
    position: relative;
    height: 10.6vw;
    font-size: 3.2vw;
    color: #a7806f;
    line-height: 10.6vw;
    vertical-align: middle;
    width: 12.8vw;
    text-align: center;
}

.li-paiming {
    display: inline-block;
    position: relative;
    height: 10.6vw;
    font-size: 3.2vw;
    line-height: 10.6vw;
    color: #823f1a;
    vertical-align: middle;
    margin-left: 3.6vw;
    width: 8.53vw;
    text-align: center;
}

.li-mingci {
    display: inline-block;
    position: relative;
    width: 8.53vw;
    text-align: center;
}

.banji-BD-wrap,.geren-BD-wrap {
    position: relative;
    left: 12.66vw;
    height: 45vh;
    width: 58vw;
    overflow: hidden;
}

.banji-BD-title,.geren-BD-title {
    position: relative;
    width: 59vw;
    margin-top: 1.48vh;
}

.span-xueyuan,.span-banji,.span-paiming,.span-zhengque,.span-nicheng {
    font-size: 4.26vw;
    color: #ff803b;
}

.span-nicheng {
    margin-left: 14vw;
    margin-right: 8vw;
}

.span-zhengque {
    margin-right: 3.5vw;
}

.span-xueyuan,.span-banji {
    margin-right: 14vw;
}

.banji-BD {
    position: relative;
    margin-top: 2.06vh;
    height: 40vh;
    overflow: scroll;
}

.banji-BD-ul {
    position: relative;
    width: 58vw;
    font-size: 3.2vw;
    color: #b45825;
}

.banji-BD-li {
    margin-bottom: 2.06vh;
}

.li-xueyuan,.li-bianhao {
    display: inline-block;
    width: 23vw;
}

/* .scroll {
    position: absolute;
    top: 11.57vh;
    left: 65.06vw;
    height: 46.36vh;
    width: 10.53vw;
    background: url(../assets/scroll.png);
    background-size: 100% 100%;

}

.scroll-wrap {
    position: relative;
    top: 0.82vh;
    left: 4vw;
    height: 38vh;
    width: 5.06vw;
    overflow: hidden;
}

.scroll-bar {
    position: relative;
    height: 4.0vh;
    width: 5.06vw;
    background: url(../assets/bar.png);
    background-size: 100% 100%;
} */

/* div {
    pointer-events: none;
} */

.to-answer {
    position: absolute;
    top: 89.66vh;
    left: 8.53vw;
    width: 35.86vw;
    height: 7.6vh;
    background: url(../assets/continue.png);
    background-size: 100% 100%;
}

.to-query {
    position: absolute;
    top: 89.66vh;
    right: 8.53vw;
    width: 35.86vw;
    height: 7.6vh;
    background: url(../assets/search.png);
    background-size: 100% 100%;
}

.query {
    position: relative;
    display: block;
    width: 35.86vw;
    height: 7.6vh;
}

.alert {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -21vh;
    margin-left: -45.8vw;
    width: 91.6vw;
    height: 42vh;
    background: url(../assets/answer_max.png);
    background-size: 100% 100%;
    z-index: 99;
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

.close {
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
}
</style>
