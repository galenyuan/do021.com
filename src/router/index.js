import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  const langs = ['cn', 'en']
  const systemLang = navigator.language || 'zh-cn'
  let targetLang = ''

  if (to.query.lang && langs.indexOf(to.query.lang) !== -1) {
    if ('TEMPLATE_CONTENT' in window) return next()
    else targetLang = to.query.lang
  } else {
    switch (true) {
      case /cn/i.test(systemLang):
        targetLang = 'cn'
        break
      case /en/i.test(systemLang):
        targetLang = 'en'
        break
      default:
        targetLang = 'en'
        break
    }
  }

  const query = { lang: targetLang }
  if (!window.TEMPLATE_CONTENT) {
    import(/* webpackChunkName: "i18n-template-string" */ `@/consts/i18n-${targetLang}`)
      .then(_ => next({ path: to.path, query }))
  } else {
    next({ path: to.path, query })
  }
})

export default router
