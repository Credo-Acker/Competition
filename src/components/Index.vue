<template>
    <div class="index">
        <div class="answer" @click="toAnswer">

        </div>
        <div class="list">
            <router-link to="/list" class="to-list">
            </router-link>
        </div>
        <div class="shadow" :class="{ no: none }">

        </div>
        <div class="alert" :class="{ no: none }">
            <div class="five">
                每人每天有5次答题机会
            </div>
            <div class="close" @click="closeAlert">

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Index',
    data () {
        return {
            // canAnswer: true,
            canAnswer: false,
            none: true,
            url: "https://wx.idsbllp.cn"
        }
    },
    computed: {

    },
    created() {
        //获取用户信息存储openid到vuex
        this.$http.post(this.url + '/competition/getUserInfo')
            .then((response) => {
                if (response.data.data.left_times > 0) {
                    this.canAnswer = true;
                }
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
                this.$router.push('/answer');
            } else {
                this.none = false;
            }
        },
        closeAlert: function () {
            this.none = true;
        }
    }
}
</script>

<style scoped>
.index {
    position: relative;
    height: 100vh;
    height: 100%;
    background: url(../assets/index.png);
    background-size: 100% 100%;
}

.answer {
    position: relative;
    background: url(../assets/to_answer.png);
    background-size: 100% 100%;
    top: 62.8vh;
    height: 9.5vh;
    width: 56.4vw;
    margin: 0 auto;
}

.list {
    position: relative;
    display: block;
    top: 62.8vh;
    margin: 0 auto;
    margin-top: 4.2vh;
    width: 56.4vw;
    height: 9.5vh;
    background: url(../assets/to_list.png);
    background-size: 100% 100%;
}

.to-answer {
    position: relative;
    display: block;
    height: 9.5vh;
    width: 56.4vw;
}

.to-list {
    position: relative;
    display: block;
    width: 56.4vw;
    height: 9.5vh;
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

.close {
    position: relative;
    top: 29.7vh;
    margin: 0 auto;
    width: 31.6vw;
    height: 6.28vh;
    background: url(../assets/return.png);
    background-size: 100% 100%;
}

.five {
    position: absolute;
    margin: 0 auto;
    top: 25.3vh;
    width: 100%;
    text-align: center;
    font-size: 3.9vw;
    color: #aaaaaa;
    font-family: 'fzse';
}

.no {
    display: none;
}

</style>
