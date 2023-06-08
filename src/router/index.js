import VueRouter from "vue-router"
const routes = [
  {
    path: '/',
    component: () => import('../views/home/index')
  },
  {
    path: '/about',
    component: () => import('../views/about/index')
  }
]

const router = new VueRouter({
  mode: "history",
  routes,
  // 切换路由的滚动位置
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router