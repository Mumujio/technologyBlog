// meta的ts接口
declare module 'vue-router' {
  interface RouteMeta {
    // 是否需要管理员权限
    isManager?: boolean
  }
}
import { createRouter, createWebHistory } from "vue-router";
import { get_login } from "@/util/app_config";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home.vue"),
      children: [
        {
          path: "article",
          name: "article",
          component: () => import("@/views/article/article_list.vue"),
          meta:{isManager:false}
        },
        {
          path: "article/:id",
          name: "article_viewicle",
          component: () => import("@/views/article/article_view.vue"),
        
        },
        {
          path: "edit",
          name: "edit",
          component: () => import("@/views/article/article_edit.vue"),
          meta:{isManager:true}
        },
       

      ],
    },
    {
      path: "/index",
      name: "index",
      component: () => import("@/views/Index.vue"),
    },
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/enroll",
      name: "enroll",
      component: () => import("@/views/Enroll.vue"),
    },
  ],
});

// 全局路由守卫
router.beforeEach((to, from,next) => {
  if (to.meta.isManager) {
    if (get_login()) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }

})

export default router;
