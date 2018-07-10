<style>

</style>

<template>
  <header class="header header-absolute header-transparent header-fixed-on-mobile" data-helper-in-threshold="200" data-helper-out-threshold="500" data-sticky-threshold="200" data-bkg-threshold="100">
    <div class="header-inner">
      <div class="row nav-bar">
        <div class="column width-12 nav-bar-inner">
          <div class="logo">
            <div class="logo-inner">
              <a href="/"><img src="//do021-site.oss-cn-hangzhou.aliyuncs.com/images/logo-dark.png" alt="Faulkner Logo" /></a>
              <a href="/"><img src="//do021-site.oss-cn-hangzhou.aliyuncs.com/images/logo.png" alt="Faulkner Logo" /></a>
            </div>
          </div>
          <nav class="navigation nav-block secondary-navigation nav-right">
            <ul>
              <li class="aux-navigation hide">
                <!-- Aux Navigation -->
                <a href="#" class="navigation-show side-nav-show nav-icon">
                  <span class="icon-menu"></span>
                </a>
              </li>
            </ul>
          </nav>
          <nav class="navigation nav-block primary-navigation nav-right sub-menu-indicator">
            <ul>
              <li v-for="(nav, index) in STRING" :key="index">
                <a class="scroll-link" :href="nav.href">{{ nav.title }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      STRING: window.TEMPLATE_CONTENT.navigation
    }
  }
}
</script>
