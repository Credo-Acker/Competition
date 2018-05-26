import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
// import Answer from '@/components/Answer';
// import AnswerCheck from '@/components/AnswerCheck';
import List from '@/components/List';
import Query from '@/components/Query';
import Answer1 from '@/components/Answer1';
import AnswerCheck1 from '@/components/AnswerCheck1';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        // {
        //     path: '/answer',
        //     name: 'Answer',
        //     component: Answer
        // },
        // {
        //     path: '/answerCheck',
        //     name: 'AnswerCheck',
        //     component: AnswerCheck
        // },
        {
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/query',
            name: 'Query',
            component: Query
        },
        {
            path: '/answer1',
            name: 'Answer1',
            component: Answer1
        },
        {
            path: '/answerCheck1',
            name: 'AnswerCheck1',
            component: AnswerCheck1
        }
    ]
});
