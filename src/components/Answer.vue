<template>
    <div class="answer">
        <div class="time-wrap">
            <div class="time">
                <ul>
                    <li>10</li>
                    <li>9</li>
                    <li>8</li>
                    <li>7</li>
                    <li>6</li>
                    <li>5</li>
                    <li>4</li>
                    <li>3</li>
                    <li>2</li>
                    <li>1</li>
                    <li>0</li>
                </ul>
            </div>
        </div>
        <div class="nowNum">
            {{nowNum}}/10
        </div>
        <div class="question">
            {{question}}
        </div>
        <ul class="answers">
            <li class="answerA" :class="{hanswer: clickA}" @click="choose('clickA')">
                <img class="abcd" src="../assets/a.png">
                <div class="answer-fu">
                    <div class="answer-content">
                        {{answerA}}
                    </div>
                </div>
                <!-- <div class="gou" :class="{no:!clickA}">

                </div> -->
            </li>
            <li class="answerB" :class="{hanswer: clickB}" @click="choose('clickB')">
                <img class="abcd" src="../assets/b.png">
                <div class="answer-fu">
                    <div class="answer-content">
                        {{answerB}}
                    </div>
                </div>
                <!-- <div class="gou" :class="{no:!clickB}">

                </div> -->
            </li>
            <li class="answerC" :class="{hanswer: clickC}" @click="choose('clickC')">
                <img class="abcd" src="../assets/c.png">
                <div class="answer-fu">
                    <div class="answer-content">
                        {{answerC}}
                    </div>
                </div>
                <!-- <div class="gou" :class="{no:!clickC}">

                </div> -->
            </li>
            <li class="answerD" :class="{hanswer: clickD}" @click="choose('clickD')">
                <img class="abcd" src="../assets/d.png">
                <div class="answer-fu">
                    <div class="answer-content">
                        {{answerD}}
                    </div>
                </div>
                <!-- <div class="gou" :class="{no:!clickD}">

                </div> -->
            </li>
        </ul>
        <div class="send" @click="send">

        </div>
    </div>
</template>

<script>
import qs from "qs";

export default {
    name: 'Answer',
    data () {
        return {
            clickA: false,
            clickB: false,
            clickC: false,
            clickD: false,
            nowNum: 0,
            question: "",
            answerA: "",
            answerB: "",
            answerC: "",
            answerD: "",
            chooseX: "",
            chooseC: "",
            right: "",
            questionId: null,
            timer: null,
            url: ""
        }
    },
    created() {
        this.$http.post(this.url + "/competition/getQuestion")
            .then((response) => {
                if (response.data.data == null) {
                    this.$router.push('/index');
                }
                this.question = response.data.data.title;
                this.questionId = response.data.data.questionId;
                this.answerA = response.data.data.choice0;
                this.answerB = response.data.data.choice1;
                this.answerC = response.data.data.choice2;
                this.answerD = response.data.data.choice3;
                if (response.data.data.answer === response.data.data.choice0) {
                    this.right = "A";
                } else if (response.data.data.answer === response.data.data.choice1) {
                    this.right = "B";
                } else if (response.data.data.answer === response.data.data.choice2) {
                    this.right = "C";
                } else if (response.data.data.answer === response.data.data.choice3) {
                    this.right = "D";
                }
                this.nowNum = response.data.question_num;
                if (this.nowNum > 10) {
                    this.$router.push('/index');
                }
            })
    },
    mounted() {
        this.timer = setTimeout(() => {
            this.send();
        }, 10000);
    },
    beforeDestroy() {
        clearTimeout(this.timer);
    },
    methods: {
        choose: function (which) {
            this.clickA = false;
            this.clickB = false;
            this.clickC = false;
            this.clickD = false;
            this[which] = true;
            switch (which) {
                case "clickA":
                    this.chooseC = this.answerA;
                    this.chooseX = "A";
                    break;
                case "clickB":
                    this.chooseC = this.answerB;
                    this.chooseX = "B";
                    break;
                case "clickC":
                    this.chooseC = this.answerC;
                    this.chooseX = "C";
                    break;
                case "clickD":
                    this.chooseC = this.answerD;
                    this.chooseX = "D";
                    break;
            }
        },
        send: function () {
            this.$http.post(this.url + "/competition/answerQuestion", qs.stringify({
                        questionId: this.questionId,
                        choose: this.chooseC,
                        question_num: this.nowNum
                }), {
                    headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }})
                .then((response) => {
                    this.$router.push({
                        name: 'AnswerCheck',
                        params: {
                            todayNum: this.nowNum,
                            question: this.question,
                            answerA: this.answerA,
                            answerB: this.answerB,
                            answerC: this.answerC,
                            answerD: this.answerD,
                            questionId: this.questionId,
                            choose: this.chooseX,
                            rightAnswer: this.right,
                            nowNum: this.nowNum
                        }
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family:"fzse";
    src: url('../assets/fzse.ttf');
}

@font-face {
    font-family:"cg";
    src: url('../assets/cg.ttf');
}

.answer {
    position: relative;
    height: 100vh;
    background: url(../assets/answer_bg.png);
    background-size: 100% 100%;
}

.time-wrap {
    position: absolute;
    left: 46.5vw;
    top: 9.2vh;
    width: 9.3vw;
    height: 4.2vh;
    font-size: 8vw;
    text-align: center;
    overflow: hidden;
}

.time {
    font-family: "fzse";
    color: #fc782e;
    animation: jishi 10s;
}

.time ul li {
    display: block;
    height: 4.1vh;
    line-height: 4.1vh;
}

@keyframes jishi {
    0% {
        transform: translateY(0);
    }
    10% {
        transform: translateY(-4.1vh);
    }
    20% {
        transform: translateY(-8.2vh);
    }
    30% {
        transform: translateY(-12.3vh);
    }
    40% {
        transform: translateY(-16.4vh);
    }
    50% {
        transform: translateY(-20.5vh);
    }
    60% {
        transform: translateY(-24.6vh);
    }
    70% {
        transform: translateY(-28.7vh);
    }
    80% {
        transform: translateY(-32.8vh);
    }
    90% {
        transform: translateY(-36.9vh);
    }
    100% {
        transform: translateY(-41vh);
    }
}

.nowNum {
    position: absolute;
    top: 20.5vh;
    left: 38.3vw;
    text-align: center;
    width: 23.3vw;
    font-size: 6.66vw;
    font-family: "cg";
    font-weight: 800;
    color: #ffe595;
}

.question {
    position: relative;
    top: 31.9vh;
    width: 67.6vw;
    margin: 0 auto;
    color: #333333;
    line-height: 3.72vh;
    font-size: 3.73vw;
}

.answers {
    position: relative;
    top: 31.9vh;
    width: 66.4vw;
    margin: 0 auto;
    margin-top: 1.65vh;
}

.answerA,.answerB,.answerC,.answerD {
    position: relative;
    width: 66.4vw;
    height: 6.78vh;
    background: url(../assets/answer.png);
    background-size: 100% 100%;
    margin-bottom: 2.06vh;
}

.hanswer {
    background: url(../assets/hanswer.png);
    background-size: 100% 100%;
}

.wanswer {
    background: url(../assets/wanswer.png);
    background-size: 100% 100%;
}

.abcd {
    position: relative;
    margin-left: 3.46vw;
    margin-top: 2.4vh;
    width: 3.86vw;
    height: 2.4vh;
}

.answer-fu {
    width: 46.3vw;
    height: 6.6vh;
    position: relative;
    top: -5.7vh;
    left: 9vw;
    font-size: 4vw;
    color: #885533;
    text-align: center;
    display: table;
}

.answer-content {
    display: table-cell;
    vertical-align: middle;
}

.send {
    position: relative;
    top: 31.9vh;
    margin: 0 auto;
    margin-top: 3.72vh;
    width: 41.2vw;
    height: 7.1vh;
    background: url(../assets/send.png);
    background-size: 100% 100%;
}
</style>
