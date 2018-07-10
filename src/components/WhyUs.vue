<style>

</style>

<template>
<div id="why-us" class="section-block replicable-content">
  <div class="row">
    <div class="column width-10 offset-1 center">
      <h2 class="mb-30">{{ STRING.title }}</h2>
      <p class="lead mb-70">{{ STRING.description }}</p>
    </div>
  </div>
  <div class="row flex boxes one-column-on-tablet">
    <div class="column width-5 v-align-middle">
      <div class="box box-2 background-cover xlarge rounded bkg-white color-white shadow">
        <div class="media-overlay bkg-black opacity-04"></div>
        <div class="pt-0 pb-30">
          <h3>{{ STRING.content[0].title }}</h3>
          <p class="lead mb-50">{{ STRING.content[0].description }}</p>
        </div>
      </div>
    </div>
    <div class="column width-7">
      <div class="row flex boxes">
        <div class="column width-6" v-for="(reason, index) in reasons" :key="index">
          <div class="box xlarge rounded border-grey-light">
            <h4>{{ reason.title }}</h4>
            <p>{{ reason.description }}</p>
          </div>
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
      STRING: window.TEMPLATE_CONTENT.whyUs
    }
  },

  computed: {
    reasons () {
      return this.STRING.content.slice(1, this.STRING.content.length)
    }
  }
}
</script>
