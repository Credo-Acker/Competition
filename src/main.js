import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import Vuex from 'vuex';
import md5 from 'md5';

Vue.use(Vuex);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.$md5 = md5;
// axios.defaults.withCredentials = true;

// const moduleA = {
//     state: {
//         aa: 111,
//         aaaa: 11111
//     },
//     getters: {
//         tohahah (state) {
//             return state.aa + 1;
//         },
//         toAAA (state) {
//             return state.aaaa + 2;
//         },
//         inlala (state, getters, rootState) {
//             return rootState;
//         }
//     }
// }
// const moduleB = {
//     state: {
//         bb: 111,
//         bbbb: 2222
//     },
//     getters: {
//         tolalal (state) {
//             return state.bb + 1;
//         },
//         toBBB (state) {
//             return state.bbbb + 2;
//         }
//     }
// }
const store = new Vuex.Store({
    // modules: {
    //     a: moduleA,
    //     b: moduleB
    // },
    state: {
        openid: null,
        // questions: [
        //     {
        //         "data": {
        //             "answer": "立冬",
        //             "choice0": "白露",
        //             "choice1": "小满",
        //             "choice2": "惊蛰",
        //             "choice3": "立冬",
        //             "questionId": 123,
        //             "title": "唐代李白“醉看墨花月白，恍疑雪满前村。”描述哪一时节的美景"
        //         },
        //         "status": 200,
        //         "record_id": 3
        //     }, {
        //         "data": {
        //             "answer": "立冬",
        //             "choice0": "白露",
        //             "choice1": "小满",
        //             "choice2": "惊蛰",
        //             "choice3": "立冬",
        //             "questionId": 123,
        //             "title": "唐代李白“醉看墨花月白，恍疑雪满前村。”描述哪一时节的美景"
        //         },
        //         "status": 200,
        //         "record_id": 3
        //     }, {
        //         "data": {
        //             "answer": "立冬",
        //             "choice0": "白露",
        //             "choice1": "小满",
        //             "choice2": "惊蛰",
        //             "choice3": "立冬",
        //             "questionId": 123,
        //             "title": "唐代李白“醉看墨花月白，恍疑雪满前村。”描述哪一时节的美景"
        //         },
        //         "status": 200,
        //         "record_id": 3
        //     }, {
        //         "data": {
        //             "answer": "立冬",
        //             "choice0": "白露",
        //             "choice1": "小满",
        //             "choice2": "惊蛰",
        //             "choice3": "立冬",
        //             "questionId": 123,
        //             "title": "唐代李白“醉看墨花月白，恍疑雪满前村。”描述哪一时节的美景"
        //         },
        //         "status": 200,
        //         "record_id": 3
        //     }, {
        //         "data": {
        //             "answer": "立冬",
        //             "choice0": "白露",
        //             "choice1": "小满",
        //             "choice2": "惊蛰",
        //             "choice3": "立冬",
        //             "questionId": 123,
        //             "title": "唐代李白“醉看墨花月白，恍疑雪满前村。”描述哪一时节的美景"
        //         },
        //         "status": 200,
        //         "record_id": 3
        //     }, {
        //         "data": {
        //             "answer": "立冬",
        //             "choice0": "白露",
        //             "choice1": "小满",
        //             "choice2": "惊蛰",
        //             "choice3": "立冬",
        //             "questionId": 123,
        //             "title": "唐代李白“醉看墨花月白，恍疑雪满前村。”描述哪一时节的美景"
        //         },
        //         "status": 200,
        //         "record_id": 3
        //     }, {
        //         "data": {
        //             "answer": "立冬",
        //             "choice0": "白露",
        //             "choice1": "小满",
        //             "choice2": "惊蛰",
        //             "choice3": "立冬",
        //             "questionId": 123,
        //             "title": "唐代李白“醉看墨花月白，恍疑雪满前村。”描述哪一时节的美景"
        //         },
        //         "status": 200,
        //         "record_id": 3
        //     }, {
        //         "data": {
        //             "answer": "立冬",
        //             "choice0": "白露",
        //             "choice1": "小满",
        //             "choice2": "惊蛰",
        //             "choice3": "立冬",
        //             "questionId": 123,
        //             "title": "唐代李白“醉看墨花月白，恍疑雪满前村。”描述哪一时节的美景"
        //         },
        //         "status": 200,
        //         "record_id": 3
        //     }, {
        //         "data": {
        //             "answer": "立冬",
        //             "choice0": "白露",
        //             "choice1": "小满",
        //             "choice2": "惊蛰",
        //             "choice3": "立冬",
        //             "questionId": 123,
        //             "title": "唐代李白“醉看墨花月白，恍疑雪满前村。”描述哪一时节的美景"
        //         },
        //         "status": 200,
        //         "record_id": 3
        //     }, {
        //         "data": {
        //             "answer": "立冬",
        //             "choice0": "白露",
        //             "choice1": "小满",
        //             "choice2": "惊蛰",
        //             "choice3": "立冬",
        //             "questionId": 123,
        //             "title": "唐代李白“醉看墨花月白，恍疑雪满前村。”描述哪一时节的美景"
        //         },
        //         "status": 200,
        //         "record_id": 3
        //     }
        // ],
        questions: [],
        nowNum: 1,
        str: "Kjj:Don't;Fuck;Me!"
    },
    mutations: {
        writeQuestions: function (state, payload) {
            state.nowNum = 1;
            state.questions = payload.data;
        },
        incrementNow: function (state) {
            state.nowNum += 1;
        }
    }
});

// const store = new Vuex.Store({
//     //全局数据
//     state: {
//         NewMsg: {
//             Msgs: {
//                 title:'暂无消息',
//                 content:'暂无消息！',
//                 url:'asno_msg',
//                 id:'no_msg'
//             }
//         },
//         "count": 1,
//         todos: [
//             { id: 1, text: 'as', done: true },
//             { id: 2, text: 'gg', done: false },
//             { id: 3, text: 'sd', done: true },
//         ]
//     },
//     //this.$store.getters[] 获取值
//     getters: {
//         doneTodos: state => {
//             return state.todos.filter(todo => todo.done)
//         },
//         getTodoById: (state) => (id) => {
//             return state.todos.find(todo => todo.id === id)
//         }
//     },
//     //同步改变数据方法
//     mutations: {
//         change (state, payload) {
//             // 变更状态
//             state.count = payload.data;
//         }
//     },
//     //异步改变数据方法
//     actions: {
//         incrementAsync ({ commit }, products) {
//             setTimeout(() => {
//                 commit('change', products)
//             }, 1000)
//         },
//         jiji ({state, commit, rootState}) {
//             console.log("rootState", rootState);
//             console.log("state", state);
//         }
//     }
// });

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    render: h => h(App)
});
