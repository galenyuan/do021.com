<style scoped>
  .section-block {
    padding-top: 3rem !important;
  }
</style>

<template>
<div class="section-block feature-1 pb-0 bkg-charcoal-light" id="about-us">
  <div class="row">
    <div class="column width-8 offset-2">
      <div class="feature-content">
        <div class="feature-content-inner pt-mobile-60 center">
          <h2 class="mb-20 color-white">{{ STRING.title }}</h2>
          <p class="lead mb-30 color-white opacity-07">{{ STRING.content }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      STRING: window.TEMPLATE_CONTENT.aboutUs
    }
  }
}
</script>
