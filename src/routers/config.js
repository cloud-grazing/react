import React from 'react';

const rootPath = process.env.PUBLIC_URL;

// 重點觀察位置
const routes = [
    {
        path: '/',
        exact: true,
        component: React.lazy(() => import('./Home')),
    },
    {
        path: '/training',
        component: React.lazy(() => import('./Training')),
    },
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
export { rootPath };
