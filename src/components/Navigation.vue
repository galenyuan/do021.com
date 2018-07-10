<style>

</style>

<template>
  <aside class="side-navigation-wrapper enter-right" data-no-scrollbar data-animation="push-in">
    <div class="side-navigation-scroll-pane">
      <div class="side-navigation-inner">
        <div class="side-navigation-header">
          <div class="navigation-hide side-nav-hide">
            <a href="#">
              <span class="icon-cancel medium"></span>
            </a>
          </div>
        </div>
        <nav class="side-navigation nav-block">
          <ul>
            <li v-for="(nav, index) in STRING" :key="index">
              <a class="scroll-link" :href="nav.href">{{ nav.title }}</a>
            </li>
          </ul>
        </nav>
        <div class="side-navigation-footer">
          <p class="copyright no-margin-bottom">&copy; 2017 ThemeMountain.</p>
        </div>
      </div>
    </div>
  </aside>
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
