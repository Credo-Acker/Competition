<template>
    <div class="query">
        <input type="text" id="studentNum" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" v-model="studentNum">
        <div class="confirm" @click="search">

        </div>
        <div class="shadow" :class="{ no: none }">

        </div>
        <div class="alert1" :class="{ no: none1 }">
            <div class="great" @click="close">

            </div>
        </div>
        <div class="alert2" :class="{ no: none2 }">
            <div class="sorry" @click="close">

            </div>
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
            url: "https://yanzipe.s3.natapp.cc"
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        search: function () {
            //发送学号查询结果
            if (/^\d{10}$/.test(this.studentNum)) {
                this.$http.post(this.url + "/huojiang", {
                        params: {
                            studentNum: this.studentNum
                        }
                    })
                    .then((response) => {
                        this.studentNum = null;
                        if (response.data.data.ok) {
                            this.none = false;
                            this.none1 = false;
                        } else {
                            this.none = false;
                            this.none2 = false;
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
                this.studentNum = null;
                alert("输入不合法，请重新输入");
            }
        },
        close: function () {
            this.none = true;
            this.none1 = true;
            this.none2 = true;
        }
    }
}
</script>

<style scoped>
.query {
    position: relative;
    height: 100vh;
    background: url(../assets/query_bg.png);
    background-size: 100% 100%;
}

#studentNum {
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
}
</style>
