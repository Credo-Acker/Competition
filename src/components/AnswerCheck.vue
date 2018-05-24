<template>
    <div class="answerCheck">
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
            <li class="answerA" :class="{hanswer: yesA,wanswer:noA}">
                <img class="abcd" src="../assets/a.png">
                <div class="answer-fu">
                    <div class="answer-content">
                        {{answerA}}
                    </div>
                </div>
                <div class="gou" :class="{no:!yesA}">

                </div>
                <div class="cha" :class="{no:!noA}">

                </div>
            </li>
            <li class="answerB" :class="{hanswer: yesB,wanswer:noB}">
                <img class="abcd" src="../assets/b.png">
                <div class="answer-fu">
                    <div class="answer-content">
                        {{answerB}}
                    </div>
                </div>
                <div class="gou" :class="{no:!yesB}">

                </div>
                <div class="cha" :class="{no:!noB}">

                </div>
            </li>
            <li class="answerC" :class="{hanswer: yesC,wanswer:noC}">
                <img class="abcd" src="../assets/c.png">
                <div class="answer-fu">
                    <div class="answer-content">
                        {{answerC}}
                    </div>
                </div>
                <div class="gou" :class="{no:!yesC}">

                </div>
                <div class="cha" :class="{no:!noC}">

                </div>
            </li>
            <li class="answerD" :class="{hanswer: yesD,wanswer:noD}">
                <img class="abcd" src="../assets/d.png">
                <div class="answer-fu">
                    <div class="answer-content">
                        {{answerD}}
                    </div>
                </div>
                <div class="gou" :class="{no:!yesD}">

                </div>
                <div class="cha" :class="{no:!noD}">

                </div>
            </li>
        </ul>
        <div class="send" @click="toNext">

        </div>
    </div>
</template>

<script>
export default {
    name: 'AnswerCheck',
    data () {
        return {
            nowNum: 0,
            question: "",
            answerA: "",
            answerB: "",
            answerC: "",
            answerD: "",
            chooseX: "",
            chooseC: "",
            yesA: false,
            yesB: false,
            yesC: false,
            yesD: false,
            noA: false,
            noB: false,
            noC: false,
            noD: false,
            questionId: null,
            timer: null,
            url: "https://yanzipe.s3.natapp.cc"
        }
    },
    created() {
        switch (this.$route.params.rightAnswer) {
            case "A":
                if (this.$route.params.rightAnswer == this.$route.params.choose) {
                    this.yesA = true;
                } else {
                    this.yesA = true;
                    if (this.$route.params.choose == "A") {
                        this.noA = true;
                    } else if (this.$route.params.choose == "B") {
                        this.noB = true;
                    } else if (this.$route.params.choose == "C") {
                        this.noC = true;
                    } else if (this.$route.params.choose == "D") {
                        this.noD = true;
                    } else {
                        this.noB = true;
                        this.noC = true;
                        this.noD = true;
                    }
                }
                break;
            case "B":
                if (this.$route.params.rightAnswer == this.$route.params.choose) {
                    this.yesB = true;
                } else {
                    this.yesB = true;
                    if (this.$route.params.choose == "A") {
                            this.noA = true;
                    } else if (this.$route.params.choose == "B") {
                        this.noB = true;
                    } else if (this.$route.params.choose == "C") {
                        this.noC = true;
                    } else if (this.$route.params.choose == "D") {
                        this.noD = true;
                    } else {
                        this.noA = true;
                        this.noC = true;
                        this.noD = true;
                    }
                }
                break;
            case "C":
                if (this.$route.params.rightAnswer == this.$route.params.choose) {
                    this.yesC = true;
                } else {
                    this.yesC = true;
                    if (this.$route.params.choose == "A") {
                            this.noA = true;
                    } else if (this.$route.params.choose == "B") {
                        this.noB = true;
                    } else if (this.$route.params.choose == "C") {
                        this.noC = true;
                    } else if (this.$route.params.choose == "D") {
                        this.noD = true;
                    } else {
                        this.noA = true;
                        this.noB = true;
                        this.noD = true;
                    }
                }
                break;
            case "D":
                if (this.$route.params.rightAnswer == this.$route.params.choose) {
                    this.yesD = true;
                } else {
                    this.yesD = true;
                    if (this.$route.params.choose == "A") {
                            this.noA = true;
                    } else if (this.$route.params.choose == "B") {
                        this.noB = true;
                    } else if (this.$route.params.choose == "C") {
                        this.noC = true;
                    } else if (this.$route.params.choose == "D") {
                        this.noD = true;
                    } else {
                        this.noA = true;
                        this.noB = true;
                        this.noC = true;
                    }
                }
                break;
        }
        this.question = this.$route.params.question;
        this.answerA = this.$route.params.answerA;
        this.answerB = this.$route.params.answerB;
        this.answerC = this.$route.params.answerC;
        this.answerD = this.$route.params.answerD;
        this.nowNum = this.$route.params.nowNum;
    },
    mounted() {
        this.timer = setTimeout(() => {
            if (this.nowNum <= 10) {
                this.toNext();
            } else {
                this.$router.push('/index');
            }
        }, 2000);
    },
    beforeDestroy() {
        clearTimeout(this.timer);
    },
    methods: {
        toNext: function () {
            this.$router.push('/answer');
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

.answerCheck {
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
}

.time ul li {
    display: block;
    height: 4.1vh;
    line-height: 4.1vh;
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

.gou {
    position: absolute;
    top: 1.65vh;
    left: 56vw;
    background: url(../assets/true.png);
    background-size: 100% 100%;
    width: 7.06vw;
    height: 3.8vh;
    z-index: 99;
}

.cha {
    position: absolute;
    top: 1.65vh;
    left: 56vw;
    background: url(../assets/false.png);
    background-size: 100% 100%;
    width: 7.06vw;
    height: 3.8vh;
    z-index: 99;
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

.no {
    display: none;
}
</style>
