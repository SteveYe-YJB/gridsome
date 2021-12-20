const c1 = () => import(/* webpackChunkName: "page--src-pages-user-id-vue" */ "E:\\个人学习\\my-gridsome\\src\\pages\\user\\[id].vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-post-vue" */ "E:\\个人学习\\my-gridsome\\src\\pages\\Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-posts1-vue" */ "E:\\个人学习\\my-gridsome\\src\\pages\\Posts1.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-posts2-vue" */ "E:\\个人学习\\my-gridsome\\src\\pages\\Posts2.vue")
const c5 = () => import(/* webpackChunkName: "page--src-templates-my-page-vue" */ "E:\\个人学习\\my-gridsome\\src\\templates\\MyPage.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-foo-vue" */ "E:\\个人学习\\my-gridsome\\src\\pages\\Foo.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "E:\\个人学习\\my-gridsome\\src\\pages\\Contact.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "E:\\个人学习\\my-gridsome\\src\\pages\\About.vue")
const c9 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "E:\\个人学习\\my-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c10 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "E:\\个人学习\\my-gridsome\\src\\pages\\Index.vue")

export default [
  {
    name: "__user_id",
    path: "/user/:id",
    component: c1,
    meta: {
      dataPath: "/user/_id.json",
      dynamic: true
    }
  },
  {
    path: "/post/",
    component: c2
  },
  {
    path: "/posts1/",
    component: c3
  },
  {
    path: "/posts2/",
    component: c4
  },
  {
    path: "/my-page/",
    component: c5
  },
  {
    path: "/foo/",
    component: c6
  },
  {
    path: "/contact/",
    component: c7
  },
  {
    path: "/about/",
    component: c8
  },
  {
    name: "404",
    path: "/404/",
    component: c9
  },
  {
    name: "home",
    path: "/",
    component: c10
  },
  {
    name: "*",
    path: "*",
    component: c9
  }
]
