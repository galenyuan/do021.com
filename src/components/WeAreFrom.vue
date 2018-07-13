<style scoped>
  .section-block {
    padding-top: 3rem !important;
  }
</style>

<template>
<div  id="we-are-from" class="section-block logos-4 pt-0 pb-80 bkg-white">
  <div class="row">
    <div class="column width-10 offset-1 center">
      <h2 class="mb-50">{{ STRING.title }}</h2>
      <div class="row content-grid-5 opacity-05">
        <div class="grid-item">
          <a>
            <img src="//cdn.do021.com/images/logos/alibaba.png" alt="Alibaba">
          </a>
        </div>
        <div class="grid-item">
          <a>
            <img src="//cdn.do021.com/images/logos/glow.png" alt="Glow">
          </a>
        </div>
        <div class="grid-item">
          <a>
            <img src="//cdn.do021.com/images/logos/ibm.png" alt="IBM">
          </a>
        </div>
        <div class="grid-item">
          <a>
            <img src="//cdn.do021.com/images/logos/pwc.png" alt="pwc">
          </a>
        </div>
        <div class="grid-item">
          <a>
            <img src="//cdn.do021.com/images/logos/wiredcraft.png" alt="Wiredcraft">
          </a>
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
      STRING: window.TEMPLATE_CONTENT.weAreFrom
    }
  }
}
</script>
