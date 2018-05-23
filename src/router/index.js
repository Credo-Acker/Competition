import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Answer from '@/components/Answer';
import AnswerCheck from '@/components/AnswerCheck';
import List from '@/components/List';
import Query from '@/components/Query';

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
        {
            path: '/answer',
            name: 'Answer',
            component: Answer
        },
        {
            path: '/answerCheck',
            name: 'AnswerCheck',
            component: AnswerCheck
        },
        {
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/query',
            name: 'Query',
            component: Query
        }
    ]
});
