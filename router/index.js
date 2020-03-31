import Vue from 'vue'
import Router, {RouterMount} from 'uni-simple-router';
Vue.use(Router)

console.log(ROUTES)
//初始化
const router = new Router({
	encodeURI:true,  //默认为true
    routes:ROUTES //路由表 ROUTES 从vue.config.js  tfPages弄出来了
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log(to)
	console.log(from)
    // if (to.meta&&to.disable) {
    //     if (!auth.loggedIn()) {
    //       next({
    //         path: '/login',
    //         query: { redirect: to.meta.title }
    //       })
    //     } else {
    //       next()
    //     }
    // } else {
    //     next() // 确保一定要调用 next()
    // }
	next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
})

export default router