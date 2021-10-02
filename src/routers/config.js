// router/index.js
// import React from 'react';
// import Main from '../components/Main/Main';
import HomePage from '../containers/HomePage/HomePage';
import ResultPage from '../containers/ResultPage/ResultPage';

// 重點觀察位置
const routes = [
    // {
    //     path: '/',
    //     // exact: true,
    //     component: Main,
    // },
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/result',
        component: ResultPage,
    },

    // {
    //     path: '/result',
    //     component: ResultPage,
    // },
    // {
    //     path: '/nested',
    //     component: React.lazy(() => import('../components/Nested')),
    //     routes: [
    //         {
    //             path: '/cmp-1',
    //             component: React.lazy(() => import('../components/CmpOne')),
    //         },
    //         {
    //             path: '/cmp-2',
    //             component: React.lazy(() => import('../components/CmpTwo')),
    //         },
    //     ],
    // },
];

export default routes;
