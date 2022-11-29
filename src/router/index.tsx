// 使用路由懒加载
import { lazy } from "react";
// 引入组件
const home = lazy(() => import("../views/home"));
const about = lazy(() => import("../views/about"));
const notFound = lazy(() => import("../views/notFound"));
const routes = [
    // home
    {
        path: "/",
        component: home,
    },
    // about
    {
        path: "/about",
        component: about,
    },
    // 404
    {
        path: "*",
        component: notFound,
    },
];
export default routes;
